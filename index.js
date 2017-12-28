const express = require("express");
const app = express();

app.get("/test", (request, response) => {
    response.send("test");
    response.end();
});

app.listen(8080);