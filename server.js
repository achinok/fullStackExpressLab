const express = require ("express");
const app = express();
const routes = require("./routes.js");

app.use(express.static(__dirname +"/public"));
app.use("/", routes);

let port = 8080;
const server = app.listen(port, () => {
    console.log("Server runs. Port Num: "+port);
});