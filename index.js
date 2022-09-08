const express=require('express');
const app=express();
const cors=require('cors');
const bodyParser=require('body-parser');
const port = process.env.PORT || 8010;
const UserDetails= require('./model/user');
const db=require('./db/db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(cors())

app.get('/', (req,res)=>{
    console.log("server is running")
    res.send("hello")
})
// get 
app.post('/user',async(req,res)=>{
    try{
        const saveUser=new UserDetails(req.body);
        const saveUserDetails=await saveUser.save();
        console.log(saveUserDetails);
        res.send(saveUserDetails);       
    }
    catch(error){
        
        console.log(error);
        res.send(error);

    }
});

app.get('/user',async(req,res)=>{
    try{
    const getUser= await UserDetails.find({});
    res.send(getUser);
    }
    catch(e){
        console.log(e);

    }
});

app.get('/user/:id',async(req,res)=>{
    try{   
        const _id=req.params.id;
       const getUser =await UserDetails.findById({_id});
       res.send(getUser)
       console.log(getUser);

    }
    catch(e){
        console.log(e);
    }
})

app.delete('/user/:id',async(req,res)=>{
    try{   
       const getUser =await UserDetails.findByIdAndDelete(req.params.id);
       res.send(getUser)
       console.log(getUser);

    }
    catch(e){
        console.log(e);
    }
})
app.patch('/user/:id',async(req,res)=>{
    try{   
        const _id=req.params.id;
       const getUser =await UserDetails.findByIdAndUpdate(_id,req.body,{
        new:true
    });
       res.send(getUser)
       console.log(getUser);

    }
    catch(e){
        console.log(e);
    }
})



app.listen(port,()=>{
    console.log("server is listen on " +port);
})