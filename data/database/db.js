const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    database: 'anime_list',
    user: 'quocanh',
    password: 'ti532001',
    max: 5,
    connectionTimeoutMillis: 10000,
});

exports.query = async (textQuery, params) => {
    const client = await pool.connect();
    const {rows} = await client.query(textQuery, params);
    // console.log(rows);
    client.release(true);
    return rows;
};

// const client = pool.connect()
// client.then((poolClient) => {
//     exports.query = (textQuery, params, callback) => {
//         return poolClient.query(textQuery, params, callback);
//     }
//     exports.release = () => {
//         return poolClient.release;
//     }
//     exports.end = () => {
//         return poolClient.end;
//     }
// }).catch((err) => {
//     throw err;
// })
