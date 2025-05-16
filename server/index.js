const express = require("express");
const path = require("path");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const cors = require("cors");
const fs = require("fs");
const typeDefs = require("./schema/typeDefs");
const resolvers = require("./schema/resolvers");

const app = express();
const port = process.env.PORT || 4000;

// Middleware stack
app.use(cors({ origin: "*" })); // Allow all origins for testing
app.use(express.json()); // Parse JSON bodies (This must be here before Apollo Server middleware)
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies (optional, for completeness)

// Detailed request logging
app.use((req, res, next) => {
    console.log(`Request URL: ${req.originalUrl}`);
    console.log(`Method: ${req.method}`);
    console.log(`Headers:`, req.headers);
    console.log(`Body:`, req.body);
    next();
});

// Apollo GraphQL server setup
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

async function startServer() {
    await server.start();

    // Explicitly handle /graphql route with Apollo middleware
    app.use("/graphql", expressMiddleware(server));

    // Validate index.html path
    const indexPath = path.join(__dirname, "../front/index.html");
    if (!fs.existsSync(indexPath)) {
        console.error(`Error: index.html not found at ${indexPath}`);
        process.exit(1);
    }

    // Serve static files (React build output)
    app.use(express.static(path.join(__dirname, "../front")));

    // Fallback for React SPA routing (ensure it only falls back for routes that aren't /graphql or static)
    app.use((req, res, next) => {
        if (req.originalUrl.startsWith("/graphql") || req.originalUrl.includes("://")) {
            return next();
        }
        res.sendFile(indexPath);
    });

    // Start the server
    app.listen(port, () => {
        console.log(`🚀 Server ready at http://localhost:${port}/graphql`);
    });
}

startServer();