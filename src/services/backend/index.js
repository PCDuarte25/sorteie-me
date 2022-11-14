import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyDY6IWv7NC_bj3c_Sozqqo7MVm38kfQYLU",
  authDomain: "raffle-me-831b3.firebaseapp.com",
  projectId: "raffle-me-831b3",
  databaseURL: "https://raffle-me-831b3-default-rtdb.firebaseio.com/",
  storageBucket: "raffle-me-831b3.appspot.com",
  messagingSenderId: "740352037705",
  appId: "1:740352037705:web:5e13de07f03b7f114c8098"
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export {
  app,
  database
};
