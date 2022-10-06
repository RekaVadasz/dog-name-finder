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
        //console.log(dogList)
       
        const size = req.query.size; // kicsi / közepes /nagy 
        const gender = req.query.gender; // lány / fiú
        const breed = req.query.breed; // mindegy / keverék / ...stb 
                
        //-- if no traits are defined: search all dogs of given gender, size and breed ---

        if (req.query.traits == undefined) {
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
            res.send(newDogList)
        } else {
            const traits = req.query.traits;
            res.send("under construction")
        }

        //console.log(newDogList)
        
        
    });
});









app.listen(port, () => {
    console.log(`Example app listening on port http://127.0.0.1:${port}`)
})