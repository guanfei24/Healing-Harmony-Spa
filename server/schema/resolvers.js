const pool = require("../db");

const resolvers = {
    Query: {
        users: async () => {
            const [rows] = await pool.query("SELECT * FROM users");
            return rows;
        },
    },
};

module.exports = resolvers;