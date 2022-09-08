const mongoose=require('mongoose');

mongoose.connect("mongodb+srv://devajitgupta:9455858543@cluster0.rpmmn5h.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser:true,
useUnifiedTopology:true}).then(()=>{
    console.log("data connection successfully")
});
