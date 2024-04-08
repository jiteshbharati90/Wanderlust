const mongoose = require("mongoose");
const initData =require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL  = "mongodb://127.0.0.1:27017/wanderlust";

// console.log(data);

main()
.then(() => {
    console.log("connected to DB");
})
.catch(() => {
    console.log(err);
});


async function main (){
    await mongoose.connect(MONGO_URL);
} 





Listing.insertMany(initData).then(
    (dta)=>{
        console.log(dta)
    }
).catch(
    (err)=>{
        console.log(err)
    }
);
