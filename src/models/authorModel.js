const mongoose=require('mongoose')
const authorSchema_16_11_21=new mongoose.Schema
 (
     { 
         author_id:
                  {
                      type:Number,
                      required:true,
                     
                  },

        author_name:
                    {
                        type:String,
                        required:true,
                        
                    },

        age:
                    {
                        type:Number,
                        required:true,
                        
                    },

        address:
                    {
                        type:String,
                        required:true,
                       
                    }
     },
     {timestamps: true} 
 )
 module.exports=mongoose.model('Assignment_16.11.2021_author',authorSchema_16_11_21)