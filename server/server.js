var express = require('express');
//var session = require('express-session');
var app = express();
var bodyParser = require('body-parser');
const router = express.Router(); 
const mysql = require('mysql');
var nodemailer = require('nodemailer');
var order_number;

var app = express();

app.use(function(req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS,DELETE,PUT")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  next();

});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


// set port
app.listen(3000, function () {
    console.log('Node app is running on port 3000');
});
module.exports = app;


// connection configurations
var dbConn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'credit'
});
// connect to database
dbConn.connect(); 



app.post('/sign', function (req, res) {
  var postData  = req.body;
  var email= postData.Email;

  console.log(postData);
  dbConn.query('INSERT INTO user SET ?', postData, function (error, results, fields) {
   if (error) {
     throw error;
   }
   else{
        res.end(JSON.stringify(results));
   }
 });
});
app.post('/newinvoice', function (req, res) {
  var postData  = req.body;
  var email= postData.Email;

  console.log(postData);
  dbConn.query('INSERT INTO data SET ?', postData, function (error, results, fields) {
   if (error) {
     throw error;
   }
   else{
     console.log(results);
        res.end(JSON.stringify(results));
   }
 });
});
app.post('/dinvoice', function (req, res) {
  var postData  = req.body;
  var invoice= postData.InvoiceNumber;
  var claim =postData.Claim;
  var damount=postData.Amount;

  console.log(postData);
  dbConn.query('UPDATE data SET Claim="'+claim+'",DAmount="'+damount+'" WHERE InvoiceNumber="'+invoice+'" ', function (error, results, fields) {
    if (error) throw error;
    console.log(results);
    res.end(JSON.stringify(results));
  });
});
app.post('/changePassword', function (req, res) {
  var postData  = req.body;
  var cpass=postData.CPassword;
  var npass=postData.NPassword;
  var email=postData.Email;
  console.log(cpass);
  console.log(npass);
  console.log(email);

  dbConn.query('UPDATE user SET Password="'+npass+'" WHERE Email="'+email+'" AND Password="'+cpass+'"', function (error, results, fields) {
   if (error) throw error;
   res.end(JSON.stringify(results));
 });
});
app.post('/TchangePassword', function (req, res) {
  var postData  = req.body;
  var cpass=postData.CPassword;
  var npass=postData.NPassword;
  var email=postData.Email;
  console.log(cpass);
  console.log(npass);
  console.log(email);

  dbConn.query('UPDATE user SET Password="'+npass+'" WHERE Email="'+email+'" ', function (error, results, fields) {
   if (error) throw error;
   res.end(JSON.stringify(results));
 });
});
app.post('/assID', function (req, res) {
  var postData  = req.body;
  var idnumber=postData.ID;
  var Name=postData.Email;
  console.log(idnumber);
  console.log(Name);

  dbConn.query('UPDATE data SET Assigned="'+Name+'" WHERE ID="'+idnumber+'" ', function (error, results, fields) {
   if (error){
     throw error;
   } 
   else{
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'richardchifamba4@gmail.com',
        pass: 'richarD*1997'
      }
    });
    var mailOptions = {
      from: 'richardchifamba4@gmail.com',
      to: Name,
      subject: 'NEW TASK ASSIGNED TO YOU.',
      text: 'Good day, You have a new task, please check on Credit Control System.'
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
        res.end(JSON.stringify("succesfull"));
      }
    });
   }
   var r="assignsucc";
   res.end(JSON.stringify(r));
 });
});

// Retrieve all Data
app.get('/invoices', function (req, res) {
  dbConn.query('SELECT * FROM data  WHERE Assigned="none" AND Paid=0 ', function (error, results, fields) {
      if (error){
        throw error;
      } 
      else{
        return res.send( results);

      }
      
  });
});
// Retrieve all Data
app.get('/alldinvoices', function (req, res) {
  dbConn.query('SELECT * FROM data  ', function (error, results, fields) {
      if (error){
        throw error;
      } 
      else{
        return res.send( results);

      }
      
  });
});
// Retrieve all Data
app.get('/Tinvoices/:Email', function (req, res) {
  var postData=req.body;
  var v=req.params.Email;
  var email=postData.Email;
  console.log(v);
  dbConn.query('SELECT * FROM data  WHERE Assigned="'+v+'" AND Paid=0 ', function (error, results, fields) {
      if (error){
        throw error;
      } 
      else{
        return res.send( results);

      }
      
  });
});
app.get('/Sinvoices/:Email', function (req, res) {
  var postData=req.body;
  var v=req.params.Email;
  var email=postData.Email;
  console.log(v);
  dbConn.query('SELECT * FROM data  WHERE Assigned="'+v+'" AND Paid=1 ', function (error, results, fields) {
      if (error){
        throw error;
      } 
      else{
        return res.send( results);

      }
      
  });
});
// Retrieve all Data
app.get('/ainvoices', function (req, res) {
  dbConn.query('SELECT * FROM data  WHERE Assigned !="none" ', function (error, results, fields) {
      if (error){
        throw error;
      } 
      else{
        return res.send( results);

      }
      
  });
});
// Retrieve all Data
app.get('/pinvoices', function (req, res) {
  dbConn.query('SELECT * FROM data  WHERE Paid !=0 ', function (error, results, fields) {
      if (error){
        throw error;
      } 
      else{
        return res.send( results);

      }
      
  });
});


app.post('/logins', function (req, res) {
  var postData  = req.body;
  var pass= postData.Password;
  var username= postData.Email;
  console.log(pass +"      "+username);
  dbConn.query('SELECT * FROM user WHERE Email="'+username+'" and Password="'+pass+'" ', function (error, results, fields) {
   if (error) {
     throw error;
       var r="login";
       res.end(JSON.stringify(r));
}
else if (results.length>0  && results[0].Type =="General") {
  
  console.log(results[0].Type);
    var r="trackers";
  res.end(JSON.stringify(r));
  console.log(r)
}
else if (results.length>0  && results[0].Type =="Admin") {
  
  console.log(results[0].Type);
    var r="ahome";
  res.end(JSON.stringify(r));
}
else{
  console.log("Wrong Password");
  var r="logina";
  res.end(JSON.stringify(r));
}
 });
});





/////////////////////////////Data to issue
app.get('/issueR/:ID_Key', function (req, res) {
  console.log("am here");
  var ID_K=req.params.ID_Key;
  console.log(ID_K);



 dbConn.query('UPDATE  internalorder_items SET Collected=1 WHERE ID_Key="'+ID_K+'" ', function (error, results, fields) {
   if (error) throw error;
   var a="issue";
   res.end(JSON.stringify(a));
 });
});/////////////////////////////Data to issue
app.get('/rejectR/:ID_Key', function (req, res) {
  console.log("am here");
  var ID_K=req.params.ID_Key;
  console.log(ID_K);



 dbConn.query('UPDATE  internalorder_items SET Collected=2 WHERE ID_Key="'+ID_K+'" ', function (error, results, fields) {
   if (error) throw error;
   res.end(JSON.stringify(results));
 });
});
app.get('/approveR/:ID', function (req, res) {
  console.log("am here");
  var ID=req.params.ID;
  console.log(ID);



 dbConn.query('UPDATE data  SET Paid=1 WHERE ID="'+ID+'" ', function (error, results, fields) {
   if (error) {
     throw error;
   }
   else{
      res.end(JSON.stringify(results));
   }
  
 });
});