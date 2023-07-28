// Gets all of the services we need from firebase
// The /app Library abstracts some of the functionality (CRUD) we need to use in our Firebase.
import { initializeApp } from "firebase/app";

//Importing all of the authentication services we're gonna be using.
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

//A Document is basically the Data, we have to create an instance of it retrieve and update the data inside of our database.
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from "firebase/firestore";

// Your web app's Firebase configuration
// This config identifies the app we want to connect to the firebase (clothing-app)
const firebaseConfig = {
  apiKey: "AIzaSyBvBOXqwCwnHPiMWycQQ_9awRmXvl40d1E",
  authDomain: "souq-car-8d715.firebaseapp.com",
  projectId: "souq-car-8d715",
  storageBucket: "souq-car-8d715.appspot.com",
  messagingSenderId: "917307360315",
  appId: "1:917307360315:web:60ca90bf11b3816ea4c81e",
};

// Initialize Firebase and create an instance of it and connecting it to our website.
const firebaseApp = initializeApp(firebaseConfig);

//GoogleAuthProvider is a class that we get from firebase authentication.
//We are creating an instance of it because we could use multiple different providers later on, like one for pop and one for redirect.
const googleProvider = new GoogleAuthProvider();

//Everytime someone interacts with the provider, they must select an account.
googleProvider.setCustomParameters({
  prompt: "select_account",
});

//When doing authentication, we don't use the "New" keyword because there can only be one instance.
//Authentication is a Singleton, it keeps track of the authentication state of the entire app. The user will log in only once.
export const auth = getAuth();

//A reference to our firestore (database).
export const db = getFirestore();

export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, googleProvider);
};

export const signInWithGoogleRedirect = async() => {
  return await signInWithRedirect(auth, googleProvider);
};

export const signInAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  //Calling the imported createUserWithEmailAndPassword.
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => {
  await signOut(auth);
};

//The OnAuthStateChanged functions as a Listener/Observer for all the changes made to the auth.
//Without it, we'll have to call "setCurrentUser" in the signIn, signUp and NavBar Components to update the "currentUser" value.
//The Auth Signleton that we instantiated is keeping track of the "user" value, and it even persists between refreshes of the page and onAuthStateChanged keeps track of it.
export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
};

//This creates the user that we signed in with above, in the actual Firestore database.
//the signInWithGooglePopup func above handles the sign in only without adding the signed user to the database.
export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {
  if (!userAuth) return;

  //The document reference (the firestore reference, the table, the user id)
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  //Getting a snapshot "data" of the document reference. This gives the same data that the doc reference returns,
  //but it creates the data in a special object which we can perform operations on like "exists();" to check if the user is already in the database.
  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot);

  //Adding the user to the database
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        //when the user is created using the GoogleProvider Method "SignInWithGoogle", the displayName is added automatically.
        //but when it's created using the "createUserWithEmailAndPassword", this displayedName is Null, so we have to added by passing it as AdditionalInformation.
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

// Firebase function to get the list of cars for sale from the firestore
export const getCars = async () => {
  const collectionRef = collection(db, "cars");
  const q = query(collectionRef);

  // get a snapshot of the data.
  const querySnapshot = await getDocs(q);
  // returns an array of the data
  const carsMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, data } = docSnapshot.data();
    acc[title.toLowerCase()] = data;
    return acc;
  }, {});

  return carsMap;
};

// Function for handling the cars data and adding it to the firebase.
export const addCollectionAndDocuments = async (
  // Key is database Name
  collectionKey,
  objectsToAdd
) => {
  // collection is the table we want to add, collectionKey is its name.
  const collectionRef = collection(db, collectionKey);

  // writeBatch is used for performing multiple writes in one single operation, in our case we are adding multiple objects to the collection.
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    // making a reference to the document and giving it the collection we want to add.
    const docRef = doc(collectionRef, object.title.toLowerCase());
    // writes to the document.
    batch.set(docRef, object);
  });

  // commits the batch.
  await batch.commit();
  console.log("done");
};
