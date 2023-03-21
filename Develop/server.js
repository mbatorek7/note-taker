const express = require("express");
const app = express();
const fileRoutes = require('./routes/fileRoutes');
const api = require("./routes/api");

const PORT = 3002;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.use("/api", api);
app.use("/", fileRoutes);

app.listen(PORT, () => {
    console.log(`server running on PORT ${PORT}`);
});