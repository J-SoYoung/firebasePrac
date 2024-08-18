import { onValue, ref, set } from "firebase/database";
import { database } from "./firebase";

export const writeUserData = (userId: string, name: string, email: string) => {
  set(ref(database, "users/" + userId), {
    username: name,
    email: email,
  });
};

export const readUserData = (userId: string) => {
  const userRef = ref(database, "users/" + userId);

  return new Promise((resolve, reject) => {
    onValue(
      userRef,
      (snapshot) => {
        const data = snapshot.val();
        if (data) {
          resolve(data);
        } else {
          reject("No data available");
        }
      },
      (error) => {
        reject(error);
      }
    );
  });
};
