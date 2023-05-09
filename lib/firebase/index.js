import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyASzsqOsMjwYBAh8xZNGmQng7v_LnYHe3Q",
  authDomain: "share-11cce.firebaseapp.com",
  projectId: "share-11cce",
  storageBucket: "share-11cce.appspot.com",
  messagingSenderId: "933914906347",
  appId: "1:933914906347:web:082dfcb6c2501304cfb8ae",
  measurementId: "G-FRPM30XQXX",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { app, auth, db };
