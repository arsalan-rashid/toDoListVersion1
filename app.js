//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var items = ["Buy Food","Cook Food","Eat Food"];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/", function(req, res) {
  var today = new Date();
var options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
  var day = today.toLocaleDateString("en-GB",options);
  res.render("list", {kindOfDay: day, newListItem:items});
});

app.post("/",function(req,res){
item = req.body.newItem;
if (item.length==0){

console.log("no text found");
  // alert("no text found");
  res.redirect("/");
}
else{
  items.push(item);
  res.redirect("/");
}



});

app.listen(3000, function() {
  console.log("Server started on port 3000.");
});
