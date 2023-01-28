import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {initializeApp} from "firebase/app";

import App from './App.vue'
import router from './router'

import './assets/main.css'


const firebaseConfig = {
  apiKey: "AIzaSyBWZ98CoWdslmFLb50WsbBs-pWdtaooKM4",
  authDomain: "applecart-fc2c5.firebaseapp.com",
  projectId: "applecart-fc2c5",
  storageBucket: "applecart-fc2c5.appspot.com",
  messagingSenderId: "1072938656132",
  appId: "1:1072938656132:web:885ed0af5d26066de17dd1"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
