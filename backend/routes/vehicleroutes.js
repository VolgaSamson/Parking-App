var vehicle = require('./vehicle');
module.exports = {
    configure:(app)=>{
app.post('/vehicle',(req,res)=>{
    console.log("vehicledts"+JSON.stringify(req.body))
vehicle.vehicle(req,res)
})
    }
}