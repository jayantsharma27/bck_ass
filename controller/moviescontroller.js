const mongoose=require("mongoose")
const MoviesCollection=require("../models/MoviesSchema")

const moviescontroller=async(req,res)=>{
    try{
        const {id,title}=req.params;
        let movies
        

     
        if(id){

            movies=await MoviesCollection.find({
               _id:id})

        }
        else if(title){

            const searchtitle=title.toLowerCase();
            movies=await MoviesCollection.find({
                title:{$regex:new RegExp(searchtitle,'i')}})

        } 
      
     
        else{
             movies = await MoviesCollection.find()
            console.log('Product fetched successfully')
        }
         if(!movies || movies.length==0){
            return res.status(404).send({message:"Product not found"})
         }
         
         
         res.status(200).send(movies)
    }
    catch(error){
        res.status(504).send({
            message:"error fetching movies"
        })
        console.log(`Error occured :${error}`)

    }

}
module.exports=moviescontroller