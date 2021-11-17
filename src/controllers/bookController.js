const BookModel= require("../models/bookModel.js")
const mongoose=require('mongoose')


const createBook= async function (req, res) 
{
    let data= req.body;
    let dataAuthor=req.body.author_id;
    if(dataAuthor)
    {
    let savedData= await BookModel.create(data)
    res.send({msg: savedData}) 
    }
    else
    {
        res.send({msg:"Author id is required!"});
    }     
}

module.exports.createBook= createBook
