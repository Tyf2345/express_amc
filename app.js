const express = require("express")
const path = require("path")
const fs = require("fs")
const yaml = require("yamljs")
const router = require("./routes")

const { server } = yaml.parse(fs.readFileSync(path.resolve(__dirname, "./config/index.yml")).toString())
const { ip, port } = server

const app = new express()

app.use("/", express.static(path.resolve(__dirname, "./public")))

router(app)

app.listen(port, ip, () => {
    console.log("server-running , ip: " + ip + " prot:" + port);
})