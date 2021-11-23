const jwt=require('jsonwebtoken');
let tokenCheck=function(req,res,next)
{
  let token = req.headers['x-auth-token']
  let validToken = jwt.verify(token,'Subha')
  if(validToken)
  {
     req.validToken1=validToken;
     next();
  }
  else 
      {
          res.send({status: false, message: 'Token not valid!'})
      }

}
module.exports.tokenCheck= tokenCheck