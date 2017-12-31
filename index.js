const express = require("express");
const app = express();

app.get("/test", (request, response) => {
    response.send("test10");
    response.end();
});

app.listen(8080);