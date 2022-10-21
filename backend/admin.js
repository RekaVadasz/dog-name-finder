var admin = require("firebase-admin");

var serviceAccount = require("./doggobase-development-6ff8f0a63a66.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
module.exports = { admin, db }; 

