var add = require('./add')

module.exports = {
    configure : (app) => {
        app.post('/add', (req, res) => {
            console.log("locationdts"+JSON.stringify(req.body))
            add.add(req , res)
        })
    }
}