const mongoose=require('mongoose')

const BookSchema_16_11_21=new mongoose.Schema
 (
     { 
        name:
                  {
                      type:String,
                      required:true,
                      
                  },

        author_id:
                {
                    type:Number,
                    required:true,
                    
                },

        price:
                    {
                        type:Number,
                        required:true,
                        
                    },

        ratings:Number
    },

    {timestamps: true} 
 )
 module.exports=mongoose.model('Assignment_16.11.2021_book',BookSchema_16_11_21)