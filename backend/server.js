const express = require('express');
const app =express();
const fs = require('fs');
//const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');

const port = 5000;



// - - - - - GET to have all dogs - - - - - 

app.get('/api', (req, res) => {
    fs.readFile('dog-names-data.json', 'utf8', function (err, data) {
        const dogData = JSON.parse(data);
        res.send(dogData)
    });
});


// - - - - - GET to search dogs - - - - - 

app.get('/api/search', (req, res) => {
    fs.readFile('dog-names-data.json', 'utf8', function (err, data) { 
        const dogList = JSON.parse(data);
        // console.log(dogList)
       
        const size = req.query.size; // kicsi / közepes /nagy 
        const gender = req.query.gender; // lány / fiú
        const breed = req.query.breed; // mindegy / keverék / ...stb 



        const newDogList = dogList.filter((dog) => {
            if (breed === "mindegy") {
                return (
                    dog.size === size 
                    && dog.gender === gender  
                )
            } else {
                return (
                    dog.size === size 
                    && dog.gender === gender 
                    && dog.breed === breed
                )
            }

        }) 

        //console.log(newDogList)
        
        
        res.send(newDogList)
    });
});









app.listen(port, () => {
    console.log(`Example app listening on port http://127.0.0.1:${port}`)
})