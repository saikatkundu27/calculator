const express= require("express");

const app=express();
const bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req,res){
    res.sendFile(__dirname + "/index.html");

});
app.post("/",function (req, res)
{
    var n1=Number(req.body.num1);
    var n2=Number(req.body.num2);

    res.send("The result is "+ (n1+n2));

});
app.get("/bmicalculator", function (req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");

});
app.post("/bmicalculator",function (req, res)
{
    var ht=Number(req.body.h);
    var wt=Number(req.body.w);
    var bmi=wt/(ht*ht);
 
    res.send("The result is "+   Math.floor(bmi));

});
app.listen("3000");