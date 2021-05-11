const ENV = process.env.NODE_ENV
// cross-env
module.exports = {
    isDev: ENV === "dev",
    notDev: ENV !== "dev",
    isProd: ENV === "production",
    notProd: ENV !== "production",
    isTest: ENV === "test",
    notTest: ENV !== "test",
}