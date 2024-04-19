const express = require("express");
const router = express.Router();

router.post('/foodData',(req,resp)=>{
    try {
        resp.send([global.food_items,global.foodCategory]);
        // console.log(global.food_items);
        // console.log(global.foodCategory);
    } catch (error) {
        console.error(error.message);
        resp.send("server error")
    }
})

module.exports=router;