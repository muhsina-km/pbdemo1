const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://bloomingbuds245:bloomingbuds245@cluster0.antw3nd.mongodb.net/bloom?retryWrites=true&w=majority",
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() =>{console.log("DB connected")
})
.catch(err=>console.log(err));

const loginSchema = new mongoose.Schema({
    username : String,
    password : String,
});

const loginModel = mongoose.model('login',loginSchema);

module.exports = loginModel;