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
        const breed = req.query.breed; // OPTIONAL - (default: mindegy)  / keverék / tacskó ...stb 
        const traits = req.query.traits; // OPTIONAL - 0, 1 or more
        
        let newDogList = []


        const filterPhysicalAppearance = function (dog) {
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
        }

        
        //--- if no personality traits are defined: search all dogs based on physical appearance ---
        if (req.query.traits == undefined) {
            newDogList = dogList
                .filter(filterPhysicalAppearance) 
            


        //if at least one trait is defined, search only in those
        } else {
            console.log(traits)

            //if only 1 trait is defined (query parameter is treated as string)
            if (typeof traits === "string") {
                newDogList = dogList
                    .filter(dog => {
                        return dog.traits.includes(traits)
                        })
                    .filter(filterPhysicalAppearance)
                
                console.log(newDogList)
            
            // if more than 1 traits are defined
            } else {

                // iterate through all traits given
                for (const trait of traits) {
                    if (newDogList.length === 0) {
                        //1st iteration
                        console.log("newDogList was empty")

                            /*                         
                            dogList.forEach(dog => {
                            if (dog.traits.includes(trait)) {
                                newDogList.push(dog)
                            }
                            });
                            */
                        newDogList = dogList
                            .filter(dog => {
                                return dog.traits.includes(trait)
                            })
                            .filter(filterPhysicalAppearance)

                    } else {
                        // 2nd or more iteration
                        newDogList = newDogList
                            .filter(dog => {
                                return dog.traits.includes(trait)
                            })
                        console.log(newDogList)
                    }
    
                }
                



            }


            


        }

        res.send(newDogList)

        //console.log(newDogList)
     
        




        
    });
});









app.listen(port, () => {
    console.log(`Example app listening on port http://127.0.0.1:${port}`)
})