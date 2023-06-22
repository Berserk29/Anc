import { initializeApp } from 'firebase/app';
import { getFirestore, collection, writeBatch, doc, query, getDocs, getDoc, setDoc } from "firebase/firestore";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateProfile,

} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCL1KdEeooIvtb2Co13jBZaSVq0zURRglk",
    authDomain: "anc-db.firebaseapp.com",
    projectId: "anc-db",
    storageBucket: "anc-db.appspot.com",
    messagingSenderId: "1034991469321",
    appId: "1:1034991469321:web:f01e7be8240369276c09d8"
};

initializeApp(firebaseConfig);

export const db = getFirestore();

/// DB --> dataBase
// Product

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach(object => {
      const docRef = doc(collectionRef, object.title.toLowerCase());
      batch.set(docRef, object);
    });
  
    await batch.commit();
    console.log('done');
}

export const getProductsAndDocuments = async (firebaseDocumentTitle) => {
    const collectionRef = collection(db, firebaseDocumentTitle);
    const q = query(collectionRef);

    // getDocs ==> fletch method of Firebase
    const querySnapshot = await getDocs(q);
    const productMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const { title, items } = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    }, {})

    return productMap;
}

// Authentication
    const googleProvider = new GoogleAuthProvider();

    googleProvider.setCustomParameters({
        prompt: 'select_account'
    });

    export const auth = getAuth();

    export const signInWithGooglePopup = () => {
        return signInWithPopup(auth, googleProvider);  
    };

    export const signInWithGoogleRedirect = () => {
        return signInWithRedirect(auth, googleProvider);
    };

    export const createUserDocumentFromAuth = async (userAuth, additionalDetails = {}) => {
        if(!userAuth) return;
      
        const userDocRef = doc(db, 'users', userAuth.uid);
      
        const userSnapshot = await getDoc(userDocRef);
      
        if(!userSnapshot.exists()) {
          const { email, displayName } = userAuth;
          const createdAt = new Date();
            
            await updateProfile(auth.currentUser, {
                displayName: displayName,
            }) .catch((err) => console.log('error created', err))

          try {
            await setDoc(userDocRef, {
              displayName,  
              email,
              createdAt,
              ...additionalDetails,
            })
      
          } catch(error) {
              console.error("error creating the user", error.message);
          }
        }
      
        return userSnapshot;
    };
      
    export const createAuthUserWithEmailAndPassword = async (email, password) => {
        if(!email || !password) return;
      
        return await createUserWithEmailAndPassword(auth, email, password);
    };
      
    export const signInAuthUserWithEmailAndPassword = async (email, password) => {
        if(!email || !password) return;
      
        return await signInWithEmailAndPassword(auth, email, password);
    };
      
    export const signOutUser = async () => signOut(auth);
      
    export const onAuthStateChangedListener = (callback) => {
        // if(!callback) return;
        onAuthStateChanged(auth, callback); 
    }
      
    export const getCurrentUser = () => {
      
        return new Promise((resolve, reject) => {
          const unsubscribe = onAuthStateChanged(
            auth,
            (userAuth) => {
              unsubscribe();
              resolve(userAuth);
            },
            reject
          )
        })
    };    


