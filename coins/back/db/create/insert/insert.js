const { sqlCommemorative, sqlBullion, sqlExclusive } = require("./sqls/sqls");

module.exports = (conn) => {
    conn.query(sqlCommemorative + sqlBullion + sqlExclusive, (err) => {
        if (err) {
            console.log(err);
        }
    });
}