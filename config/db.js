const mongoose = require("mongoose");

const connectDB =  async (req,res) => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Database is connected`.bgGreen.white);
    }
    catch (error)
    {
        console.log(`Error Occured ${error}`.bgRed.white)
    }
}
module.exports=connectDB;