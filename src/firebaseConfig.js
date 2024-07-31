const admin = require('firebase-admin');
const base64 = require('base-64');
const serviceAccount = JSON.parse(base64.decode(process.env.FIREBASE_SERVICE_ACCOUNT_BASE64));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://proyectointegrador-e93e3-default-rtdb.firebaseio.com"
});

const db = admin.database();

module.exports = db;
