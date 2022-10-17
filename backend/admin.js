var admin = require("firebase-admin");

var serviceAccount = require("./doggobase-development-firebase-adminsdk-lava6-a9a96e0b14.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
module.exports = { admin, db }; 

