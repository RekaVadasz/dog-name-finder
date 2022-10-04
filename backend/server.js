const express = require('express');
const app =express();
const fs = require('fs');

const port = 3000;


app.get('/api', (req, res) => {
    fs.readFile('dog-names-data.json', 'utf8', function (err, data) { 
        res.send(data)
    });
});









app.listen(port, () => {
    console.log(`Example app listening on port http://127.0.0.1:${port}`)
})