import app from "firebase/app"; //The app variable represents the firebase application.
//We have to import auth and firestore to use the features.
import "firebase/auth";
import "firebase/firebase-firestore";
import "firebase/firebase-storage";

//For firebase config setting, you should use your own application's information.
var config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "habi-38b8c.firebaseapp.com",
  databaseURL: "https://habi-38b8c.firebaseio.com",
  projectId: "habi-38b8c",
  storageBucket: "habi-38b8c.appspot.com",
  messagingSenderId: "66078401214",
  appId: "1:66078401214:web:914e33a2a3ee8f13"
};

class Firebase {
 constructor() {
    app.initializeApp(config); //Let config information initialize firebase
    //With this.auth and this.db variables we can access auth and firestore
    this.auth = app.auth();
    this.db =  app.firestore();
    this.auth.setPersistence(app.auth.Auth.Persistence.LOCAL)
    this.storage = app.storage();
  }
  currentUser() {
    const user = this.auth;
    return user
  }
  login(email, pass) {
    //firebase login function
    return this.auth.signInWithEmailAndPassword(email, pass);
  }
  logout() {
    //firebase logout function
    return this.auth.signOut();
  }
  async register(name, email, pass, photoUrl = "") {
    //firebase register function
    await this.auth.createUserWithEmailAndPassword(email, pass);
    //We've updated the username of the register result.
    return this.auth.currentUser.updateProfile({
      displayName: name,
      photoURL:photoUrl,
    });
  }

  async uploadProfilePicture(file){
    const uploadImage = this.storage.ref().child('avatar.'+this.auth.currentUser.uid);
    return await uploadImage.put(file).then((snapshot)=>{
     return snapshot.ref.getDownloadURL();
    })
  }

  async updatePhotoUrl(photoUrl){
    return await this.auth.currentUser.updateProfile({
      photoURL:photoUrl,
    });
  }

  addFruit(fruit){
    //user presence control
    if(!this.auth.currentUser){
        return alert('Not authorized');
    }

    //Adding documents to the collection of pckurdu
    return this.db.doc(`pckurdu/${this.auth.currentUser.uid}`).set({
        fruit:fruit
    })
  }
}

export default new Firebase();
