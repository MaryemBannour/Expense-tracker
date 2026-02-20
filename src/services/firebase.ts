import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyDr-TO6eLf94yPrvApaSuCvUVlkvDrcZCs",
  authDomain: "expense-tracker-app-1ecc6.firebaseapp.com",
  projectId: "expense-tracker-app-1ecc6",
  storageBucket: "expense-tracker-app-1ecc6.firebasestorage.app",
  messagingSenderId: "886520872335",
  appId: "1:886520872335:web:301fc326f0ff6de4805ffa",
  measurementId: "G-0837Z2EEMN",
};

const app = initializeApp(firebaseConfig);
//export services
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const db = getFirestore(app);
export const storage = getStorage(app);
