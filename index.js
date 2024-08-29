const fs = require("fs");
const path = require("path");
const config = require("./config.json");
const Server = require("./http/Server");

const server = new Server();
const app = server.router;

app.get("/:{repoName}.json/", (req, res, next, params) => {
    fs.readFile(path.resolve(config.reposLocation, `${params.repoName}.json`), "utf-8", (err, data) => {
        if (err) return res.sendStatus(500);
        res.json(JSON.parse(data));
    });
});

server.listen(config.port, () => console.log(`Listening at :${config.port}`));