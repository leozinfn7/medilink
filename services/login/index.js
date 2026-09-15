const express=require('express'); const jwt=require('jsonwebtoken'); const db=require('../../db'); const r=express.Router(); const SECRET='medilink-faculdade';
r.post('/login',(req,res)=>{const {email,senha}=req.body; const u=db.users.find(x=>x.email===email&&x.senha===senha); if(!u)return res.status(401).json({erro:'E-mail ou senha inválidos'}); res.json({token:jwt.sign({id:u.id,nome:u.nome},SECRET,{expiresIn:'2h'}),usuario:{id:u.id,nome:u.nome,email:u.email}})});
module.exports=r;
