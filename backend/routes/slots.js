var mysql = require('../db_connection')
function slots(){
this.slots = (req,res) => {
    let data = req.body;
    var slots = {

"locationid" : data.locationid,
"slotid" : data.slotid,
"slotno" : data.slotno,

    }

    mysql.acquire((err, con) => {
        if(err){
                console.log(err);
        }
        else{
        con.query('INSERT INTO slots SET ?', slots , function(error, results, fields){
            if(error){
                console.log("error occurred",error);
                res.send({
                    "code": 400,
                    "message":"error occurred"
                })
                        }
                        else{
                            console.log('The solution is: ', results);
                res.send({
                    "code": 200,
                    "message":"Slots added successfully"
                })

                        }

        });
    }
    });
}
}
module.exports = new slots();