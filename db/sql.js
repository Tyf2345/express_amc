const Sequelize = require("sequelize")
const yaml = require("yamljs")
const fs = require("fs")
const path = require("path")
const { dataBaseCfg } = yaml.parse(fs.readFileSync(path.resolve(__dirname, "../config/index.yml")).toString())
const { host, username, password, dataBase, dialect } = dataBaseCfg

const sql = new Sequelize(dataBase, username, password, {
    host,
    dialect
})

module.exports = sql