//Main Modules
const express = require("express");
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer');
const path = require("path");

//
const app = express();
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
                user: "outandup27@gmail.com", // Your email id
                pass: "BarackPutin" // Your password
        }
});

//Routes
app.get("/", function(request, response) {
  response.sendFile(path.join(__dirname+"/home.html"));
});
app.get("/activities", function(request, response) {
  response.sendFile(path.join(__dirname+"/activities.html"));
});
app.get("/bookings", function(request, response) {
  response.sendFile(path.join(__dirname+"/bookings.html"));
});
app.get("/cafe", function(request, response) {
  response.sendFile(path.join(__dirname+"/cafe.html"));
});
app.get("/map", function(request, response) {
  response.sendFile(path.join(__dirname+"/map.html"));
});
app.get("/quiz", function(request, response) {
  response.sendFile(path.join(__dirname+"/quiz.html"));
});
app.get("/quiz.swf", function(request, response) {
  response.sendFile(path.join(__dirname+"/quiz.swf"));
});
app.get("/contact", function(request, response) {
  response.sendFile(path.join(__dirname+"/contact.html"));
});
app.post("/contact", urlencodedParser, function(request, response) {
  let mailOptions = {
    from: "outandup27@gmail.com", // sender address
    to: "outandup27@gmail.com", // list of receivers
    subject: "Out and Up: Contact Form", // Subject line
    text: "Name: " + request.body.name + "\nEmail: " + request.body.email + "\nDescription: " + request.body.description
  };
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('Message sent: ' + info.response);
    };
});
  response.sendFile(path.join(__dirname+"/contact.html"));
});
app.get("/style.css", function(request, response) {
  response.sendFile(path.join(__dirname+"/style.css"));
});
app.get("/Fonts/Lato.css?family=Lato", function(request, response) {
  response.sendFile(path.join(__dirname+"/Fonts/Lato.css"));
});
app.get("/Fonts/Montserrat.css?family=Montserrat", function(request, response) {
  response.sendFile(path.join(__dirname+"/Fonts/Montserrat.css"));
});
app.get("/Fonts/font-awesome.min.css", function(request, response) {
  response.sendFile(path.join(__dirname+"/Fonts/font-awesome.min.css"));
});
app.get("/Fonts/fontawesome-webfont.woff2?v=4.7.0", function(request, response) {
  response.sendFile(path.join(__dirname+"/Fonts/fontawesome-webfont.woff2"));
});
app.get("/Fonts/fontawesome-webfont.woff?v=4.7.0", function(request, response) {
  response.sendFile(path.join(__dirname+"/Fonts/fontawesome-webfont.woff"));
});
app.get("/Fonts/fontawesome-webfont.ttf?v=4.7.0", function(request, response) {
  response.sendFile(path.join(__dirname+"/Fonts/fontawesome-webfont.ttf"));
});
app.get("/favicon.ico", function(request, response) {
  response.sendFile(path.join(__dirname+"/favicon.ico"));
});
app.get("/Images/Outdoor-Centre.jpg", function(request, response) {
  response.sendFile(path.join(__dirname+"/Images/Outdoor-Centre.jpg"));
});

//404
app.get("*", function(request, response) {
  response.sendFile(path.join(__dirname+"/404.html"));
});

//
app.listen(process.env.PORT || 8000, function() {
  console.log("Server running")
});
