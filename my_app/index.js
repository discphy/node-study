import express from 'express';
import path from 'path';

const __dirname = path.resolve();

const app = express();

// middleware
app.get("/", (req, res) => {
    // res.send("Main page GET request");
    // res.send("<h1>Hello main page</h1>");
    res.sendFile(__dirname + "/public/main.html");
})

app.listen(3000, () => {
    console.log("Server is running");
});