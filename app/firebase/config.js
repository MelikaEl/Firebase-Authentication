// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig): getApp();
/*
This line of code is related to Firebase initialization in a Next.js application, particularly in the context of server-side rendering (SSR). Let's break it down:
This line uses a ternary operator to determine whether to initialize a new Firebase app or use an existing one. Here's what it does:
getApps().length: This checks if there are any existing Firebase app instances.
If !getApps().length is true (meaning there are no existing apps):
It calls initializeApp(firebaseConfig) to create a new Firebase app instance.
If !getApps().length is false (meaning there's at least one existing app):
It calls getApp() to retrieve the existing Firebase app instance.
The reason this is important for server-side rendering in Next.js is:
1. Avoiding Multiple Initializations: In a server-side rendered Next.js app, your code might be executed multiple times on the server. Without this check, you might accidentally initialize Firebase multiple times, which can lead to errors.
*/

const auth = getAuth(app)

export {app,auth}