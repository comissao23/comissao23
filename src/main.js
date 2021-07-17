import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import firebase from "firebase";
import 'firebase/firestore';

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyAtjaH2erg8nznAYauhsRRijVzo58wJEmI",
  authDomain: "comissao23-58b23.firebaseapp.com",
  projectId: "comissao23-58b23",
  storageBucket: "comissao23-58b23.appspot.com",
  messagingSenderId: "560742645346",
  appId: "1:560742645346:web:24d94098dd8ca5caf05b3b",
  measurementId: "G-KXLBNLDV2T"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
export const db = firebase.firestore();


new Vue({
  vuetify,
  db,
  render: h => h(App)
}).$mount('#app')


