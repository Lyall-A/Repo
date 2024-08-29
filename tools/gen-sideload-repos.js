const fs = require("fs");
const path = require("path");
const config = require("../config.json");

const spacing = 2;

// Source repo
const source = JSON.parse(fs.readFileSync("sideload.json", "utf-8"));

// Generate repos
const altStoreRepo = {};
const appdbRepo = {};
const scarletRepo = {
    META: {
        repoName: source.name,
        repoIcon: source.icon,
        // TODO:
    }
};

// Write repos
fs.writeFileSync(path.resolve(config.reposLocation, "altstore.json"), JSON.stringify(altStoreRepo, null, spacing));
fs.writeFileSync(path.resolve(config.reposLocation, "appdb.json"), JSON.stringify(appdbRepo, null, spacing));
fs.writeFileSync(path.resolve(config.reposLocation, "scarlet.json"), JSON.stringify(scarletRepo, null, spacing));