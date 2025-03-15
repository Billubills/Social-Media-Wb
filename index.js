const app = require('./app.js')
const dotenv = require('dotenv')
const connectDB = require('./db/db.js')



dotenv.config({
    path: "./.env"
});

const PORT = process.env.PORT || 8001;
// console.log("PORT: " , process.env.PORT);

connectDB()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at port ${PORT}`);
    })
}).catch((err) => {
    console.log("Mongo DB connection error !", err)
})



// app.use('/',(req,res)=>{
//     res.send("hey");
// })