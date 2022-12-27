const connection = require("./db/db")();
const app = require('express')();
const cors = require('cors');
app.use(cors());
app.get('/coins', function (req, res) {
    connection.query(`SELECT * FROM coins`, (err, data) => {
        if (err) return res.status(500);
        res.json(data);
    });;
});
app.get('/coins/:id', function (req, res) {
    const id = +req.params.id;
    const sql = `SELECT * FROM coins WHERE id=${id}`;
    connection.query(sql, (err, results, fields) => {
        if (err) {
            return res.status(500);
        }
        res.json(results);
    });
});
app.listen(5004, function () {
    console.log('5000!');
});