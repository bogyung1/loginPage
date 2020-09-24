import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyDRjMQGpLxhq59Qdm4HocLV8PJVque35ls",
    authDomain: "evergreensound-770eb.firebaseapp.com",
    databaseURL: "https://evergreensound-770eb.firebaseio.com",
    projectId: "evergreensound-770eb",
    storageBucket: "evergreensound-770eb.appspot.com",
    messagingSenderId: "402125314128",
    appId: "1:402125314128:web:d220d8f1cdcfc243fbd955",
    measurementId: "G-G9R2SL9657"
};
const fire=firebase.initializeApp(firebaseConfig);
export default fire;