const express = require("express")
const { index, getUserList } = require("../../controller/userInfo")

const router = express.Router()

router.get("/api/user", index)
.get("/api/user/getUserList",getUserList)

module.exports = router