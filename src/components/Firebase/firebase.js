import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var config = {
    apiKey: "AIzaSyDFp-OkN8bOkxTkTlk_B6wXVFG3WqYbXk4",
    authDomain: "schedule-f8238.firebaseapp.com",
    databaseURL: "https://schedule-f8238-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "schedule-f8238",
    storageBucket: "schedule-f8238.appspot.com",
    messagingSenderId: "431396759716",
    appId: "1:431396759716:web:6672b9f14db818fcda9e31",
    measurementId: "G-HSZCXLBR56"
  };

  class Firebase{

    constructor(){
      app.initializeApp(config);
      this.auth = app.auth();
      this.db = app.database();
    }

    /*** Authentication  ***/
    doCreateUserWithEmailAndPassword = (email, password) => 
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) => 
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => 
        this.auth.signOut();

    doPasswordReset = email => 
        this.auth.sendPasswordResetEmail(email);
    
    /*** Database ***/
    user = uid => this.db.ref(`users/${uid}`);
    users = () => this.db.ref('users');

  }
  export default Firebase;
