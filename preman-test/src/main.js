import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from "firebase";

Vue.config.productionTip = false;

//firebase関連のものをindex.htmlではなくmain.jsのインスタンス作成前にコピペ
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMVxQf18iXkdCvzI17iS7x4o63fFbGScI",
  authDomain: "preman0531.firebaseapp.com",
  databaseURL: "https://preman0531.firebaseio.com",
  projectId: "preman0531",
  storageBucket: "preman0531.appspot.com",
  messagingSenderId: "178464898309",
  appId: "1:178464898309:web:d45853343f09dfc7560b6c",
  measurementId: "G-36RTCG6989",
};
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
