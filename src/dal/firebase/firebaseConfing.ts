// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref} from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export const firebaseConfig = {
	apiKey: "AIzaSyCCaaxCWWJxHS5bdLJdMhogOCvg_5NG9gw",
	authDomain: "warehouse-crm-react.firebaseapp.com",
	databaseURL: "https://warehouse-crm-react-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "warehouse-crm-react",
	storageBucket: "warehouse-crm-react.appspot.com",
	messagingSenderId: "134511544409",
	appId: "1:134511544409:web:32cc6fd48dfa7e3d2a0948",
	measurementId: "G-NZYKRTVWKH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getDatabase();
export const dbRef = ref(getDatabase());
export const auth = getAuth();

