"use client";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDMNvyYCapMmESrCB8y0qnnAnzLNcYcN-A",
  authDomain: "cinerate-eca8e.firebaseapp.com",
  projectId: "cinerate-eca8e",
  storageBucket: "cinerate-eca8e.appspot.com",
  messagingSenderId: "685332180536",
  appId: "1:685332180536:web:67bccb9262622986e7c0cd",
};

export const firebaseApp = initializeApp(firebaseConfig);
