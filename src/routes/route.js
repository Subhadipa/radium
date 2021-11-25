const express = require('express');
const router = express.Router();
const cowinController=require('../controllers/cowinContoller')

const weatherController=require('../controllers/weatherController')

router.get('/cowin/states',cowinController.getStateList)
router.get('/cowin/districts/:stateId',cowinController.getDistrictList)
router.get('/cowin/centers',cowinController.getDistrictListByPin)
router.post('/cowin/Otp',cowinController.getOtp)
//router.post('/cowin/ConfirmOtp',cowinController.getConfirmOtp)
router.get('/weather',weatherController.getWeather)
router.get('/temperature',weatherController.getTemp)
router.get('/countryTemp',weatherController.getTempSort)
module.exports = router;