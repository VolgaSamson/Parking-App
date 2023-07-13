var bookdetails = require('./bookdetails')

module.exports = {
    configure : (app) => {
        app.post('/bookdetails', (req, res) => {
            console.log("bookdetails"+JSON.stringify(req.body))
            bookdetails.bookdetails(req , res)
        })
    }
}