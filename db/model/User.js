const seq = require("../sql")
const { STRING, INTEGER } = require("../types")

const UserInfo = seq.define("userInfo", {
    userName: {
        type: STRING,
        allowNull: false,
        unique: true,
        comment: '用户名， 唯一'
    },
    password: {
        type: STRING,
        allowNull: false,
        comment: '密码'
    },
    remark: {
        type: STRING,
        allowNull: false,
        comment: '备注'
    },
    delFlag: {
        type: INTEGER,
        allowNull: false,
        comment: '删除状态0正常， 1删除'
    }
}, {
    freezeTableName: true
})

module.exports = UserInfo