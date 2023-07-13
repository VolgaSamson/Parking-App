var mysql = require('../db_connection')


function register() {
    this.register = (req, res) => {
        let data = req.body;
        var users = {
            
            "email": data.email,
            "fullname": data.fullname,
            "mobno": data.mobno,
            "password": data.password,
            
        }
        mysql.acquire((err, con) => {
            if (err) {
                console.log(err);
            } else {
                con.query('INSERT INTO users SET ?', users, function(error, results, fields) {
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
                            "message": "user registered sucessfully"
                        });
                    }
                });
            }
        });
    }
}

module.exports = new register();