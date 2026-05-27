const dotenv=require("dotenv");
dotenv.config({path:'./config.env'});
const express=require('express');
require('./db/conn');

const mongoose=require('mongoose');

const User=require('./model/userSchema');
const Router=require('./router/auth');
const cookieParser=require("cookie-parser");

const app=express();
app.use(cookieParser());
app.use(express.json());
app.use(Router);


require('./middleware/authenticate');

const port=process.env.PORT;
app.use(express.urlencoded({ extended: false }));

app.listen(port,()=>{
    console.log(`Connection setup at ${port}`)
})