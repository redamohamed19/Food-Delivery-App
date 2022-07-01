const {verify,sign} =require("jsonwebtoken")
require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;
const createTokens=(user)=>{
    const accessToken=sign({id:user._id,FirstName:user.FirstName,SecondName:user.SecondName,Email:user.Email,PhoneNumber:user.PhoneNumber},JWT_SECRET)
    return accessToken

}
module.exports={createTokens}