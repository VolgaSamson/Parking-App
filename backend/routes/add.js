var mysql = require('../db_connection')


function add() {
    this.add = (req, res) => {
        let data = req.body;
        var location = {
            
            
            "locationid": data.locationid,
            "location_name": data.location_name,
            "area": data.area,
            
            
        }
        mysql.acquire((err, con) => {
            if (err) {
                console.log(err);
                
            } else {
                con.query('INSERT INTO location SET ?', location, function(error, results, fields) {
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
                            "message": "location added sucessfully"
                        });
                    }
                });
            }
        });
    }
}

module.exports = new add();