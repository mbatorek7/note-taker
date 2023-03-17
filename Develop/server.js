const express = require("express");
const app = express();
const fileRoutes = require('./routes/fileRoutes');
const api = require("./routes/api");

const PORT = 3002;

app.use(express.json());
app.use(express.static("public"));

app.use("/", fileRoutes);
app.use("/api", api);

app.listen(PORT, () => {
    console.log(`running on ${PORT}`);
});