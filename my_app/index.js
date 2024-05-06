import express from 'express';
import path from 'path';
import nunjucks from 'nunjucks';

const __dirname = path.resolve();

const app = express();

// view engine set
app.set("view engine", "html");

// nunjucks
nunjucks.configure('views', {
    watch: true,
    express: app
})

// middleware
app.get("/", (req, res) => {
    // res.send("Main page GET request");
    // res.send("<h1>Hello main page</h1>");
    res.sendFile(__dirname + "/public/main.html");
})

app.get("/write", (req, res) => {
    res.render("write");
})

app.listen(3000, () => {
    console.log("Server is running");
});