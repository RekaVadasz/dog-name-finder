const express = require('express');
const app =express();
const fs = require('fs');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
// const path = require('path'); ??



app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(fileUpload());
app.use(express.static('../frontend'));


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
        const gender = req.query.gender; // lány / fiú
        const size = req.query.size; // kicsi / közepes /nagy 
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
        
        if (req.query.traits == undefined) {
            //if no personality traits are defined: search all dogs based on physical appearance
            newDogList = dogList.filter(filterPhysicalAppearance) 

            } else {
            //if at least one trait is defined, search also in those

            if (typeof traits === "string") {
                //if only 1 trait is defined (query parameter is treated as string)
                newDogList = dogList
                    .filter(filterPhysicalAppearance)
                    .filter(dog => {
                        return dog.traits.includes(traits)
                    })
                console.log("only one trait was given")
                console.log(newDogList)
        
            } else {
                // if more than 1 traits are given
                console.log("more traits were given")
                console.log(traits)

                newDogList = dogList
                    .filter(filterPhysicalAppearance)
                    .filter(dog => {
                        return (traits.every(trait => {
                            return dog.traits.includes(trait)
                        }))
                    })

                /* filteredDogList = dogList.filter(filterPhysicalAppearance)
                filteredDogList.forEach(dog => {
                    if (traits.every(trait => {
                        return dog.traits.includes(trait)
                    })) {
                        newDogList.push(dog)
                    }

                }); */

                /*
                for (const trait of traits) {
                    // iterate through all traits given
                    if (newDogList.length === 0) {
                        //1st iteration
                        newDogList = dogList
                            .filter(dog => {
                                return dog.traits.includes(trait)
                            })
                            .filter(filterPhysicalAppearance)
                            
                        console.log("at least 2 traits were given, 1st iteration")
                        console.log(newDogList)
                        
                    } else {
                        // 2nd or more iteration
                        newDogList = newDogList
                            .filter(dog => {
                                return dog.traits.includes(trait)
                            })
                        console.log("second (or more) iteration")
                        console.log(newDogList)
                    }
                }
                */

            }
        }
        res.send(newDogList)
    });
});


// - - - - POST to save a new dog - - - - 

app.post('/addnewdog', (req, res) => {
    const newDog = JSON.parse(req.body.object)
    console.log(newDog.name)
    console.log(req.files.file)

    fs.readFile('dog-names-data.json', 'utf8', function (err, data) {
        let dogs = JSON.parse(data);

        newDog.id = (dogs[dogs.length - 1].id) + 1;
        newDog.imageSrc = `/dog-images/${req.files.file.name}`;
        newDog.uploader = 'Réka';

        dogs.push(newDog)

        fs.writeFile('dog-names-data.json', JSON.stringify(dogs, null, 4), function (err) {
            if (err) throw err;
        });

    })

    const uploadPath = '../frontend/public/dog-images/' + req.files.file.name; //feltöltött fájlok helye

    req.files.file.mv(uploadPath, function (err) {
        if (err)
            return res.status(500).send(err);
        res.send('File uploaded and new pizza added!');
    })


    //res.send("dog received")

})





// - - - - PORT - - - - 

app.listen(port, () => {
    console.log(`Example app listening on port http://127.0.0.1:${port}`)
})