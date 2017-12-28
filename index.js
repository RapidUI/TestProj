const express = require("express");
const app = express();

app.get("/test", (request, response) => {
    response.send("test8");
    response.end();
});

app.listen(8080);