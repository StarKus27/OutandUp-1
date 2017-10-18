//Modules
const http = require("http");
const url = require('url');
const fs = require("fs");

//Webserver Code
function getStaticFileContent(response, filepath, contentType){
  fs.readFile(filepath, function(error, data){
    if(error){
      response.writeHead(500,{"Content-Type":"text/plain"});
      response.end("500 - Internal Server Error");
    }
    if(data){
      response.writeHead(200,{"Content-Type":contentType});
      response.end(data);
    }
  });
}

http.createServer(function(request, response){
  const url = request.url;
  switch(url){
    case "/":
      getStaticFileContent(response, "home.html","text/html");
      break;
    case "/activities":
      getStaticFileContent(response, "activities.html","text/html");
      break;
    case "/bookings":
      getStaticFileContent(response, "bookings.html","text/html");
      break;
    case "/cafe":
      getStaticFileContent(response, "cafe.html","text/html");
      break;
    case "/map":
      getStaticFileContent(response, "map.html","text/html");
      break;
    case "/quiz":
      getStaticFileContent(response, "quiz.html","text/html");
      break;
    case "/quiz.swf":
      getStaticFileContent(response, "quiz.swf","application/x-shockwave-flash");
      break;
    case "/about":
      getStaticFileContent(response, "about.html","text/html");
      break;
    case "/style.css":
      getStaticFileContent(response, "style.css","text/css");
      break;
    case "/Fonts/Lato.css?family=Lato":
      getStaticFileContent(response, "Fonts/Lato.css","text/css");
      break;
    case "/Fonts/Montserrat.css?family=Montserrat":
      getStaticFileContent(response, "Fonts/Montserrat.css","text/css");
      break;
    case "/Fonts/font-awesome.min.css":
      getStaticFileContent(response, "Fonts/font-awesome.min.css","text/css");
      break;
    case "/Fonts/fontawesome-webfont.woff2?v=4.7.0":
      getStaticFileContent(response, "Fonts/fontawesome-webfont.woff2","text/css");
      break;
    case "/Fonts/fontawesome-webfont.woff?v=4.7.0":
      getStaticFileContent(response, "Fonts/fontawesome-webfont.woff","text/css");
      break;
    case "/Fonts/fontawesome-webfont.ttf?v=4.7.0":
      getStaticFileContent(response, "Fonts/fontawesome-webfont.ttf","text/css");
      break;
    case "/favicon.ico":
      getStaticFileContent(response, "favicon.ico","image/x-icon");
      break;
    case "/Images/Outdoor-Centre.jpg":
      getStaticFileContent(response, "Images/Outdoor-Centre.jpg","image/jpeg");
      break;
    default:
      response.writeHead(404, {"Content-Type":"text/plain"});
      response.end("404 - Page Not Found");
  }
}).listen(process.env.PORT || 8000);

console.log("Server running");
