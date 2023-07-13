var login = require('./login')

module.exports = {
    configure : (app) => {
        app.post('/login', (req, res) => {
            console.log("logdts"+JSON.stringify(req.body))
            login.login(req , res)
        })
    }
}