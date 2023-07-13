var mysql = require('../db_connection')


function bookdetails() {
    this.bookdetails = (req, res) => {
        let data = req.body;
        var location = {
            
            
            "locationid": data.locationid,
            "vehicle_type": data.vehicle_type,
            "vehicle_no": data.vehicle_no,
            "time": data.time,
            "duration": data.duration,
            "slotid": data.slotid,
            "date": data.date,
            "email": data.email,
            
            
        }
        mysql.acquire((err, con) => {
            if (err) {
                console.log(err);
                
            } else {
                con.query('INSERT INTO bookingdetails SET ?', location, function(error, results, fields) {
                    if (error) {
                        console.log("error ocurred", error);
                        res.send({
                            "code": 400,
                            "message": "error ocurred"
                        })
                    } else {
                        console.log('The solution is: ', results);
                        res.send({
                            "code": 200,
                            "message": "Bookdetails added sucessfully"
                        });
                    }
                });
            }
        });
    }
}

module.exports = new bookdetails();