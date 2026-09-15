const express=require('express'); const db=require('../../db'); const r=express.Router(); r.get('/',(_,res)=>res.json(db.notifications)); module.exports=r;
