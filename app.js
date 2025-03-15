const express = require('express')
const cors = require('cors')
// const path = require('path')

const app = express();

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true
    })
)


// Common Middlewares

app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use(express.static("public"));



// const publicPath = path.join(__dirname, "..", "public");


// app.use(express.static(publicPath));

// // Serve homepage.html from "public/templates" when visiting "/"
// app.get("/", (req, res) => {
//   res.sendFile(path.join(publicPath, "templates", "homepage.html"));
// });

// app.get("/loginpage.html", (req, res) => {
//     res.sendFile(path.join(publicPath, "templates", "Loginpage.html"));
//   });

module.exports = app