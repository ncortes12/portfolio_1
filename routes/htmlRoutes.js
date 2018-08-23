var path = require("path");
module.exports = function (app){
    app.get("/", function(req,res){
        res.sendFile(path.join(__dirname, "/../views/index.html"))
    });
    app.get("/contact", function(req,res){
        res.sendFile(path.join(__dirname, "/../views/contact.html"))
    });
    app.get("/portfolio", function(req,res){
        res.sendFile(path.join(__dirname, "/../views/portfolio.html"))
    });
    app.get("/resume", function(req,res){
        res.sendFile(path.join(__dirname, "/../views/resume.html"))
    })
}