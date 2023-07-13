var mysql = require('../db_connection');
function vehicle(){
    this.vehicle = (req,res) =>{
        let data = req.body;
        var vehicles = {
            "vehicleid" : null,
            "vehicle_type" : data.vehicle_type,
            "cost" : data.cost
        }
        mysql.acquire((err,con)=>{
if(err){
    console.log(err);
}
else {
    con.query('INSERT INTO vehicle SET ?' , vehicles, function(error , result , fields){
if(error){
    console.log("Error occurred"+error);
    res.send({
        "code" : 400,
        "message" : "Error occurred"

    })
}
else{
    res.send({
        "code" : 200,
        "message" : "Vehicle added successfully"

    })
}
    })
}
        })
    }
}

module.exports = new vehicle();