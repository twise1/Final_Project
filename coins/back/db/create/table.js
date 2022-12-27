const insertValues = require("./insert/insert");
module.exports = (conn) => {
    conn.query("SHOW TABLES FROM `catalog_of_precious_coins` LIKE 'coins'", (err, results) => {
        if (err) {
            console.log(err);
        }
        if (results && !results['0']) {
            const sql = `CREATE TABLE IF NOT EXISTS coins(
                id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
                type VARCHAR(50) NOT NULL,
                name VARCHAR(200) NOT NULL,
                description TEXT NOT NULL,
                information TEXT NOT NULL,
                issuing_country VARCHAR(200) NOT NULL,
                composition VARCHAR(50) NOT NULL,
                quality VARCHAR(50) NOT NULL,
                denomition VARCHAR(100) NOT NULL,
                year INT NOT NULL,
                weight VARCHAR(50) NOT NULL,
                price VARCHAR(50) NOT NULL,
                first TEXT NOT NULL,
                second TEXT NOT NULL
            );`;
            conn.query(sql, (err, results, fields) => {
                if (err) {
                    console.log(err);
                }
            });
            insertValues(conn);
        }
    });
}