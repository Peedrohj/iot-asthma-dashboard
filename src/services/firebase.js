import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

import firebaseConfig from "../config/firebase";

initializeApp(firebaseConfig);

const db = getDatabase();

export const fetchChildInformation = async (setValue = null) => {
  const chuldInformation = ref(db, "/");

  onValue(chuldInformation, (snapshot) => {
    const data = snapshot.val();

    try {
      localStorage.setItem("childInformation", JSON.stringify(data));
    } catch (error) {
      console.log("Error fetching child Information: ", error);
    }

    if (setValue != null) {
      setValue(data);
    }
  });
};
