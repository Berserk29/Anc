import { initializeApp } from 'firebase/app';
import { getFirestore, collection, writeBatch, doc, query, getDocs } from "firebase/firestore";


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



