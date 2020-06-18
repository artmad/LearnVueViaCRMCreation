import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'


import router from './router'
import store from './store'
import dateFilter from './filters/date.filter.js'
import MessagePlugin from './utils/message.plugin';


import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min.js'



Vue.config.productionTip = false

Vue.use(Vuelidate);
Vue.use(MessagePlugin); 

Vue.filter('date', dateFilter);


firebase.initializeApp({
  apiKey: "AIzaSyC0M5dr0HHvzq4Xv2c3MRhHXT6KK23Mx3g",
  authDomain: "artma-vue-crm.firebaseapp.com",
  databaseURL: "https://artma-vue-crm.firebaseio.com",
  projectId: "artma-vue-crm",
  storageBucket: "artma-vue-crm.appspot.com",
  messagingSenderId: "681926428782",
  appId: "1:681926428782:web:badf31f43e670d82327e7f",
  measurementId: "G-8BDNY88QBG"
});


let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
});


