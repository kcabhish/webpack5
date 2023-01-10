const express = require('express');
const app =  express();
const path = require('path');
const fs=require('fs');
const port = 9002;
app.use('/static', express.static(path.resolve(__dirname, '../dist')));

app.get('/', function (req, res) {
    const pathToHtmlFile = path.resolve(__dirname, '../dist/dbz.html');
    const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile,'utf-8');
    res.send(contentFromHtmlFile);
});

// app.get('/hello-world', function (req, res) {
//     const pathToHtmlFile = path.resolve(__dirname, '../dist/hello-world.html');
//     const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile,'utf-8');
//     res.send(contentFromHtmlFile);
// });
app.listen(port, function() {
    console.log(`Running on http//localhost:${port}`);
});