const express= require ('express');
const app =express();
const connectdb= require('./configuration/config');
const userSchema = require('./moduls/model');
const userRouter = require('./routes/userRoute');

require('dotenv').config();

const port=process.env.PORT;
connectdb();
app.use (express.json())
app.use('/api', userRouter)
// let user1= {
//     name:"user1",
//     email:"user1@gmail.com",
//     password:"hana1999"
// }
// userSchema.insertMany({user1})
// .then((doc)=>{
//     console.log(doc);
// })

// const student = new userSchema({
//     name: "user",
    
    
//     age: 20,
//     email:"user@gmail.com",
//     })
//     student.save()
//     .then((student) => console.log(student));

    
    

app.listen(port,(err)=>{
if (err){
    console.error(err)
}
console.log('server run with success');
}
)
