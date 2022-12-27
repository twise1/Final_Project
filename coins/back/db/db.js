const connection = require("./connect/connection");
const connectDatabase = require("./connect/connect");
const { createDatabase, createTable } = require("./create/create");

module.exports = () => {
    connectDatabase(connection);

    createDatabase(connection);
    createTable(connection);

    return connection;
}