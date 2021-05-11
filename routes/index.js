const fs = require("fs")
const path = require("path")
const router = async (app) => {
    const _path = path.resolve(__dirname, './modules')
    const folderList = fs.readdirSync(_path)
    for (let i = 0; i < folderList.length; i++) {
        app.use(require(path.resolve(_path, folderList[i])))
    }
}
module.exports = router

