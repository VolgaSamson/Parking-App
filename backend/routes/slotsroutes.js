var slots = require('./slots');

module.exports={
    configure:(app) => {
        app.post('/slots',(req,res) => {
            console.log("slotdts"+JSON.stringify(req.body))
             slots.slots(req,res)
        })
    }
}