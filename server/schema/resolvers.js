const pool = require("../db"); // Import the PostgreSQL client

const resolvers = {
    Query: {
        users: async () => {
            const result = await pool.query("SELECT * FROM users");
            return result.rows;
        },
    },
};

module.exports = resolvers;