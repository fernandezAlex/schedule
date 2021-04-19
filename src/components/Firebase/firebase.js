import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var config = {
    apiKey: "AIzaSyDFp-OkN8bOkxTkTlk_B6wXVFG3WqYbXk4",
    authDomain: "schedule-f8238.firebaseapp.com",
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
      // this.db = app.database(); Later add database
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
  }
  export default Firebase;
