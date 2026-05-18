import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAgq_xP39H6a9EGoP_ZAiuJTj_7u0VTjYQ",
  authDomain: "le-site-de-flow-v2.firebaseapp.com",
  projectId: "le-site-de-flow-v2",
  storageBucket: "le-site-de-flow-v2.firebasestorage.app",
  messagingSenderId: "1009860410386",
  appId: "1:1009860410386:web:223a54611389253b8faccb",
  measurementId: "G-C6PRZG8C6F"
};

const app = initializeApp(firebaseConfig);

let analytics = null;

if (typeof window !== "undefined") {
  isSupported().then((ok) => {
    if (ok) analytics = getAnalytics(app);
  });
}

export { app, analytics };