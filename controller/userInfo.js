const { getUserList } = require("../service/userInfo.js")
exports.index = async (req, res) => {
    res.send("hehehe")
}
exports.getUserList = async (req, res) => {
    res.send(await getUserList())
}