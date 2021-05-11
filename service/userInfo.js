const { User } = require("../db/model/index")

async function getUserList() {
    return await User.findAll()
}

module.exports = {
    getUserList
}