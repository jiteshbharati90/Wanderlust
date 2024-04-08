const mongoose = require("mongoose");


const listingSchema = new mongoose.Schema({
    title:{
      type:  String,
      requred:true,     
    },
    description: String,
   
    image: {
        type: String
       
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;


