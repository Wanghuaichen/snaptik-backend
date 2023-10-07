const express = require("express");
const cors = require("cors");
const { createServer } = require("http");
const downloadRoutes = require("./routes/download");


const app = express();
const httpServer = createServer(app);

app.use(cors());
app.use(express.json());

app.use("/snaptik", downloadRoutes);

const HOST_NAME = 'http://snaptik.zone'
// const HOST_NAME = 'https://68.178.145.77'
const port = 5500;

httpServer.listen(port, HOST_NAME, () => console.log(`Server listening on port ${port}`));

module.exports = { app };