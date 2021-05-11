const seq = require("./sql")
require("./model")

seq.authenticate().then(() => {
    console.log("初始化成功");
}).catch(err => {
    console.log(err, "数据初始化失败")
})

seq.sync({ force: true }).then(() => {
    console.log("数据同步成功");
    process.exit()
}).catch(err => {
    console.log("数据同步失败")
    process.exit()
})
