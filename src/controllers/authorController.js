const AuthorModel= require("../models/authorModel.js")
const BookModel= require("../models/bookModel.js")
const mongoose=require('mongoose')

//1.
const createAuthor= async function (req, res) 
{
    let data= req.body;
    let dataAuthor=req.body.author_id;
    if(dataAuthor)
    {
    let savedData= await AuthorModel.create(data)
    res.send({msg: savedData}) 
    }
    else
    {
        res.send({msg:"Author id is required!"});
    }   
}
//2.
const getBook= async function (req, res) 
{
    let authorId= await AuthorModel.find({author_name:req.body.author_name}).select({author_id:1});

    let authorId1= authorId[0].author_id;
  
    let authorBook= await BookModel.find({author_id:authorId1}).select({name:1,_id:0});
    res.send(authorBook);
}
//3.
const updateBook= async function (req, res) 
{
    
    let authorId= await BookModel.find({name:req.body.name}).select({author_id:1,_id:0});
    let authorId1= authorId[0].author_id;
    let authorName= await AuthorModel.find({author_id:authorId1}).select({author_name:1,_id:0});
   let updatedPrice= await BookModel.findOneAndUpdate({name:req.body.name},{price:100});
    
    res.send({Author:authorName[0],Price:updatedPrice.price});
}
//4.
const getBookCost= async function (req, res) 
{
  let authorId= await BookModel.find({"price":{"$gte":"50","$lte":"100"}}).select({author_id:1});
    let authorIdBook=authorId.map(x=>x.author_id)
    let authorId1= await AuthorModel.find({"author_id":authorIdBook}).select({author_name:1,_id:0})
   res.send({msg:authorId1});
}    


/*module.exports.createAuthor= createAuthor
module.exports. getBook= getBook
module.exports.updateBook=updateBook
module.exports.getBookCost=getBookCost*/
module.exports={createAuthor,getBook,updateBook,getBookCost}
