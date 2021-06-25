const { Pool } = require('pg');

const connString =
  "postgres://hgglllsd:EvJM37RkrWI82-8f6r9n8d4EtQhrZ_OT@kashin.db.elephantsql.com/hgglllsd";

const pool = new Pool({
    connectionString: connString
})

// pool.query("SELECT NOW()", (err, res) => {
//   console.log('CONNECTED TO DATABASE!!!', err, res);
//   pool.end();
// });

module.exports = {
    query: (text, params, callback) => {
        console.log('Executed query: ', text);
        return pool.query(text, params, callback);
    }
};