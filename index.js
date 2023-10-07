const express = require("express");
const cors = require("cors");
const { createServer } = require("http");
const downloadRoutes = require("./routes/download");


const app = express();
const httpServer = createServer(app);

app.use(cors());
app.use(express.json());

app.use("/snaptik", downloadRoutes);

const port = 5500;

httpServer.listen(port, () => console.log(`Server listening on port ${port}`));

module.exports = { app };