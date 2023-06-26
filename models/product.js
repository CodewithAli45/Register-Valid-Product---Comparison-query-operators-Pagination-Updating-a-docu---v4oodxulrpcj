var mongoose = require("mongoose");

//Complete Schema so that while ading new product it should be valid.
// No two products can have same name in Document .
var productSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
        validate: {
            async validate(value){
                const nameExists = await checkName(User, value);
                return !nameExists;
            },
            message: 'Product Name already exists',
        }
    },
    description : {
        type : String, 
        required: true,
    },
    Price: {
        type : Number, 
        required: true
    }
  });

  async function checkName(User, name){
    const count = await User.countDocuments({name});
    return count !== 0;
  }
  
  
  
  module.exports = mongoose.model("User", productSchema);;
