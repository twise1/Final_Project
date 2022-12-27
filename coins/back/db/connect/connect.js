module.exports = (conn) => {
    conn.connect((err) => {
        if (!err) { 
            console.log("SUCCESS");
        }
        else console.log(err);
    });
}