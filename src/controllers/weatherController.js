const axios=require('axios');
//Assignment
//1.
const getWeather=async function(req,res)
{
    
try
{
    let place=req.query.q
    let appid=req.query.appid
let options=
{
    method:"get",
    url:`http://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${appid}`
};
    

const getresWeather=await axios(options);
let weather=getresWeather.data
//console.log("Working fine!")
res.status(200).send({msg:"Successfully fetched data",data: weather});
}
catch(err)
{
    console.log(err.message)
    res.status(500).send({msg:"Some went wrong"});
}
}
//2.
const getTemp=async function(req,res)
{
    
try
{
    let place=req.query.q
    let appid=req.query.appid
let options=
{
    method:"get",
    url:`http://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${appid}`
};
    

const getresWeather=await axios(options);
let weather=getresWeather.data.main.temp
//console.log("Working fine!")
res.status(200).send({msg:"Successfully fetched data",Temperature: weather});
}
catch(err)
{
    console.log(err.message)
    res.status(500).send({msg:"Some went wrong"});
}
}
//3.
const getTempSort=async function(req,res)
{
    
try
{
   
    let appid=req.query.appid
    let arrCities=["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
    let arrCities1=[]
for(let i=0;i<arrCities.length;i++)
{
   
 let options=
{
     method:"get",
   url:`http://api.openweathermap.org/data/2.5/weather?q=${arrCities[i]}&appid=${appid}`
    
 };

const getresWeather=await axios(options);
temp= getresWeather.data.main.temp
    arrCities1.push({city:arrCities[i],temp:temp})
}

res.status(200).send({msg:"Before sorting",data:arrCities1});
function compare(a,b)
{
    return a.temp-b.temp
}
const sorted=arrCities1.sort(compare)
 //res.status(200).send({msg:"After sorting",data:sorted});
}
  catch(err)
  {
      console.log(err.message)
     res.status(500).send({msg:"Something went wrong"}); 
 }
}

module.exports.getWeather=getWeather
module.exports.getTemp=getTemp
module.exports.getTempSort=getTempSort
