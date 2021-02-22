var express = require("express"),
    app = express();


app.get("/", function(req,res){
    res.render("home.ejs");
});

var server = app.listen(3000, function(){
    console.log("Http://localhost:%d", server.address().port);
});
