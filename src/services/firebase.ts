import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDr-TO6eLf94yPrvApaSuCvUVlkvDrcZCs",
  authDomain: "expense-tracker-app-1ecc6.firebaseapp.com",
  projectId: "expense-tracker-app-1ecc6",
  storageBucket: "expense-tracker-app-1ecc6.firebasestorage.app",
  messagingSenderId: "886520872335",
  appId: "1:886520872335:web:301fc326f0ff6de4805ffa",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);