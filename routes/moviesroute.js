const express=require("express")
const moviescontroller=require("../controller/moviescontroller")
const router=express.Router()
router.get('/',moviescontroller)

router.get('/id/:id',moviescontroller)
router.get('/title/:title',moviescontroller)
module.exports=router