const { Pool } = require('pg');
require('dotenv').config()
async function conn() {
    let config = null;
    config = {
        user: process.env.user,
        host: process.env.host,
        password: process.env.password,
        database: process.env.database,
        port: process.env.port

    }
    const pool = new Pool(config)
    return pool
}
module.exports = { conn }