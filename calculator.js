const express = require("express");
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function (req, res) {
  res.sendFile(__dirname +"/bmiCalculator.html");
});

app.post("/",function (req,res) {
  
    var num1 = Number(req.body.weight);
    var num2 = Number(req.body.height);

    var result = num1/Math.pow(num2,2);

   res.send("Your body mass index is "+result)
})

app.listen(3000,function () {
   console.log("Server running on port 3000");
});
