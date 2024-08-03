const express =require('express');
const router = express.Router();
const room = require('../models/room');


// get all rooms
router.get('/getallrooms', async(req,res)=>{
    const rooms = await room.find({});
    return res.json({rooms});
});


router.post('/getroombyid', async(req,res)=>{

  const roomid =req.body.roomid;

  try{
    const room = await Room.findOne({_id:roomid});
    return res.json({room});
  }
  catch(error){
    return res.status(400).json({message:error});
  }


});

module.exports = router;