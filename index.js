const express =require('express');
const bodyParser = require('body-parser')
const app =express();
app.use(express.bodyParser());
app.get('/',function(req,res){
res.send('ok');
});
app.post('/getToken',async function(req,res){
    try{
    // make payment request
    const requestBody = {
       username=req.body.username,
       password=req.body.password,
       grant_type='password'
    };
    const tigoBaseUrl = "https://10.222.130.104:9101/token";
    const requestOptions = {
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cache-Control': 'no-cache',
          
         }
    };
    // make payment
    const ussdResponse = await axios.post(
        tigoBaseUrl,
        requestBody,
        requestOptions
    );
    console.log('ussd',ussdResponse)
}catch(e){
console.log(e);
res.status(500).json();
}
 
});

const port = process.env.PORT || 5000;
app.listen(port,() =>
console.log("TigoPesa ussd push is running on port " + port + "...")
);