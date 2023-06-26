var mongoose = require("mongoose");

//Complete Schema so that while ading new product it should be valid.
// No two products can have same name in Document .
var productSchema = mongoose.Schema({
    name: {
    type: String,
    required: true,
    unique: true,
    validate: {
      isAsync: true,
      validator: async function(value) {
        const product = await this.constructor.findOne({ name: value });
        return !product;
      },
      message: 'Product Name already exists',
    },
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  });

  // async function checkName(User, name){
  //   const count = await User.countDocuments({name});
  //   return count !== 0;
  // }
  
  
  
  module.exports = mongoose.model("User", productSchema);;
