import app from 'firebase/app';//The app variable represents the firebase application.
//We have to import auth and firestore to use the features.
import 'firebase/auth';
import 'firebase/firebase-firestore';

//For firebase config setting, you should use your own application's information.
var config = {
  apiKey: "AIzaSyDTvq9mOJyQuKlC8zfClo35-xdjFFdiHiE",
  authDomain: "habi-38b8c.firebaseapp.com",
  databaseURL: "https://habi-38b8c.firebaseio.com",
  projectId: "habi-38b8c",
  storageBucket: "",
  messagingSenderId: "66078401214",
  appId: "1:66078401214:web:914e33a2a3ee8f13"
};

class Firebase{

    constructor(){

        app.initializeApp(config)//Let config information initialize firebase
        //With this.auth and this.db variables we can access auth and firestore
        this.auth=app.auth()
        this.db=app.firestore()
    }
    login(email,pass){
      //firebase login function
      return this.auth.signInWithEmailAndPassword(email,pass)
  }
  logout(){
    //firebase logout function
    return this.auth.signOut()
}
async register(name,email,pass){
  //firebase register function
  await this.auth.createUserWithEmailAndPassword(email,pass)
  //We've updated the username of the register result.
  return this.auth.currentUser.updateProfile({
      displayName:name
  })}
// addFruit(fruit){
//   //user presence control
//   if(!this.auth.currentUser){
//       return alert('Not authorized')
//   }

//   //Adding documents to the collection of pckurdu
//   return this.db.doc(`pckurdu/${this.auth.currentUser.uid}`).set({
//       fruit:fruit
//   })
// }
}

export default new Firebase()