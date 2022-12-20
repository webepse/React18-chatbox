import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const firebaseApp = initializeApp({
    apiKey: "AIzaSyB2JK_MRLPu5MfavbCXDvYOr_O_PxWbg4U",
    authDomain: "chatbox22-2dc0c.firebaseapp.com",
    databaseURL: "https://chatbox22-2dc0c-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "chatbox22-2dc0c",
    storageBucket: "chatbox22-2dc0c.appspot.com",
})

const database = getDatabase(firebaseApp)

export default database