var express=require("express");
var a=express();
var PORT=1080;




a.get("/",function(req,res)
{
res.send("welcome");
});




a.listen(PORT,process.env.ip,function()
{
console.log("Server is Started");
}); 