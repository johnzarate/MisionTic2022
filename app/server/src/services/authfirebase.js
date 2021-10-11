const admin = require("firebase-admin");
//este archivo json no se debe subir nunca
const serviceAccount = require("../../thunderdevs-firebase-sdk.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = db;