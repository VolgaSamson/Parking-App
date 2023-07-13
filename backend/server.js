const mysql = require('mysql');
const bodyParser = require('body-parser');
let jwt = require('jsonwebtoken');
const express = require('express');
var cookieParser = require('cookie-parser')
var path = require('path');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const cors = require('cors')
// app.use(cors())
app.use(cors({origin: "http://localhost:4200",credentials: true }));

var router = express.Router();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(cookieParser());
// app.use(express.static((path.join(__dirname, '../Carparking/dist'))))
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../Carparking/dist/carparking/index.html'))
// });
var login_routes = require('./routes/loginroutes');
var register_routes = require('./routes/registerroutes');
var add_routes = require('./routes/addroutes');
var slot_routes = require('./routes/slotsroutes');
var vehicle_routes = require('./routes/vehicleroutes');
var bookdetails_routes = require('./routes/bookdetailsroutes');


app.use('/api', router);
login_routes.configure(router);
register_routes.configure(router);
add_routes.configure(router);
slot_routes.configure(router);
vehicle_routes.configure(router);
bookdetails_routes.configure(router);


var db = require('./db_connection');

app.get('/api/locations', (req, res) => {
    var sql = "SELECT * FROM location";
    db.acquire((err, con) => {
        con.query(sql,function(error, result) {
            if (error) {
                console.log("error ocurred",error);
                res.send({
                    "code": 400,
                    "message": "error ocurred"
                })
            }
            else
            {
                console.log("2");
                
                res.send({
                    status: true,
                    data: result
                })  
            }
        })
    })

});

app.get('/api/slots',(req,res) => {
    var sql = "SELECT * FROM slots";
    db.acquire((err,con) => {

    con.query(sql, function(error,result){
if(error){
console.log("error occured",error);
res.send({
    "code" : 400,
    "message" : "Error"
})
}
else{
    console.log("5");
    res.send({
        status : true,
        data : result
    })
}
    })
}
    )
});


app.get('/api/vehicle',(req,res) =>{
var sql = "select *from vehicle";
db.acquire((err,con) =>{
    if(err){
        console.log(err);
    }
    else{
        con.query(sql, function(error,result,fields){
            if(error){
                console.log("Error");
                res.send({
                    "code" : 400,
                    "message" : "Error ocuurred"
                })
            }
            else{
                console.log("vehicle display successfull");
                res.send({
                    status : true,
                    data : result
                })  
            }
        })
    }
})
});

app.get('/api/slots/getbyid/:locationid', (req, res) => {
    
    
    db.acquire((err, con) => {
        con.query('SELECT * FROM slots WHERE locationid = ?', [req.params.locationid],function(error, result,fields) {
            if (error) {
                console.log("error ocurred",error);
                res.send({
                    "code": 400,
                    "message": "error ocurred"
                })
            }
            else
            {
                console.log("slots selected by id  display successfull");
                
                res.send({
                    status: true,
                    data: result
                })  
            }
        })
    })

});

app.get('/api/bookdetails',(req,res) =>{
    var sql = "select *from bookingdetails";
    db.acquire((err,con) =>{
        if(err){
            console.log(err);
        }
        else{
            con.query(sql, function(error,result,fields){
                if(error){
                    console.log("Error");
                    res.send({
                        "code" : 400,
                        "message" : "Error ocuurred"
                    })
                }
                else{
                    console.log("bookingdetails display successfull");
                    res.send({
                        status : true,
                        data : result
                    })  
                }
            })
        }
    })
    });

    app.get('/api/bookdetails/getByUser/:email', (req, res) => {

    
    

    let data = req.params;
     var email = data.email;
     console.log("Email"+email+":");
        
        db.acquire((err, con) => {
            if(err){
                console.log(err);
            }
            else{
            con.query('select *from bookingdetails WHERE email = ?', [email], function(error, result,fields) {
                if (error) {
                    console.log("error ocurred",error);
                    res.send({
                        "code": 400,
                        "message": "error ocurred"
                    })
                }
                else{
                if (result.length > 0) {
                
                    console.log("Bookigdetais selected by email  display successfull");
                    
                    res.send({
                        status: true,
                        data: result
                    })  
                }
                else {
                    console.log("Email does not exists");
                    res.send({
                        "code": 204,
                        "message": "Email does not exits"
                    });
                }
            }
            })
        }
        })
    
    
    
    });


    app.get('/api/bookings/endBooking/:bookingid', (req, res) => {

    
    

        let data = req.params;
         var bookingid = data.bookingid;
         console.log("bookingid"+bookingid+":");
            
            db.acquire((err, con) => {
                if(err){
                    console.log(err);
                }
                else{
                con.query('DELETE FROM bookingdetails WHERE bookingid = ?', [bookingid], function(error, result,fields) {
                    if (error) {
                        console.log("error ocurred",error);
                        res.send({
                            "code": 400,
                            "message": "error ocurred"
                        })
                    }
                    else{
                    
                    
                        console.log("Booking ended!!!!");
                        
                        res.send({
                            "code": 200,
                            "message": "Booking ended"
                        }); 
                    
                    
                }
                })
            }
            })
        
        
        
        });
    

app.listen(3300, () => console.log('Express server is runing at port numner 3300'));