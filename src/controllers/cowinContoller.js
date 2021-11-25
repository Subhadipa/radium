const axios=require('axios');
//1
const getStateList=async function(req,res)
{
//axios.get('https://cdn-api.co-vin.in/api/v2/admin/location/states')

//   .then(function (response) 
//   {
//     // handle success
//     console.log("State list:",response.data);
//     res.send({msg:"Successfully fetched data",data:response.data});
//   })
//   .catch(function (error) 
//   {
//     // handle error
//     console.log(error);
//   })
//   .then(function () 
//   {
//     // always executed
//   });
try
{
let options=
{
    method:"get",
    url:"https://cdn-api.co-vin.in/api/v2/admin/location/states"
}
const cowinStates=await axios(options);
//const cowinStates=await axios.get('https://cdn-api.co-vin.in/api/v2/admin/location/states')
console.log("Working fine!")
res.status(200).send({msg:"Successfully fetched data",data:cowinStates.data});
}
catch(err)
{
    console.log(err.message)
    res.status(500).send({msg:"Some error occured"});
}
}
//2
const getDistrictList=async function(req,res)
{
    let stateId=req.params.stateId;
    //console.log("state:",stateId);
try
{
let options=
{
    method:"get",
    //url:"https://cdn-api.co-vin.in/api/v2/admin/location/districts/" +id
    url:`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${stateId}`
    //template litrals
}
const cowinDistrict=await axios(options);

console.log("Working fine!")
res.status(200).send({msg:"Successfully fetched data",data:cowinDistrict.data});
}
catch(err)
{
    console.log(err.message)
    res.status(500).send({msg:"Some went wrong"});
}
}
//3
const getDistrictListByPin=async function(req,res)
{
   
try
{
    let pin=req.query.pincode
    let date=req.query.date
let options=
{
    method:"get",
    url:`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
};
    

const cowinPin=await axios(options);
let centers=cowinPin.data
console.log("Working fine!")
res.status(200).send({msg:"Successfully fetched data",data: centers});
}
catch(err)
{
    console.log(err.message)
    res.status(500).send({msg:"Some went wrong"});
}
}
//4
const getOtp=async function(req,res)
{
   
try
{
   
let options=
{
    method:"post",
    url:`https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
    data:
        {
            "mobile":req.body.mobile
        }
};
    

const cowinOtp=await axios(options);

let Otp=cowinOtp.data

console.log("Working fine!")

res.status(200).send({msg:"Success",data:Otp});

}
catch(err)
{
    console.log(err.message)
    res.status(500).send({msg:"Some went wrong"});
}
}
//5
// const getConfirmOtp=async function(req,res)
// {
   
// try
// {
   
// let options=
// {
//     method:"post",
//     url:`https://cdn-api.co-vin.in/api//v2/auth/public/confirmOTP`,
//     data:
//         {
//             "token": res.body.otp
//         }
// };
    

// const cowinConfirmOtp=await axios(options);

// let ConfirmOtp=cowinConfirmOtp.data

// console.log("Working fine!")

// res.status(200).send({msg:"Success",data:ConfirmOtp});

// }
// catch(err)
// {
//     console.log(err.message)
//     res.status(500).send({msg:"Some went wrong"});
// }
// }
//Assignment

// const getWeather=async function(req,res)
// {
    
// try
// {
//     let place=req.query.q
//     let appid=req.query.appid
// let options=
// {
//     method:"get",
//     url:`http://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${appid}`
// };
    

// const getresWeather=await axios(options);
// let weather=getresWeather.data
// //console.log("Working fine!")
// res.status(200).send({msg:"Successfully fetched data",data: weather});
// }
// catch(err)
// {
//     console.log(err.message)
//     res.status(500).send({msg:"Some went wrong"});
// }
// }
module.exports.getStateList=getStateList
module.exports.getDistrictList=getDistrictList
module.exports.getDistrictListByPin=getDistrictListByPin
module.exports.getOtp=getOtp
//module.exports.getConfirmOtp=getConfirmOtp
//module.exports.getWeather=getWeather