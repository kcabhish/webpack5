const express = require('express');
const app =  express();
const path = require('path');
const fs=require('fs');

const port = 9001;
app.use('/', express.static(path.resolve(__dirname, '../dist')));

// app.get('/dbz', function (req, res) {
//     const pathToHtmlFile = path.resolve(__dirname, '../dist/dbz.html');
//     const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile,'utf-8');
//     res.send(contentFromHtmlFile);
// });

app.get('/', function (req, res) {
    const pathToHtmlFile = path.resolve(__dirname, '../dist/hello-world.html');
    const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile,'utf-8');
    res.send(contentFromHtmlFile);
});
app.listen(port, function() {
    console.log(`Running on http//localhost:${port}`);
});