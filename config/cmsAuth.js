import { collection, addDoc, setDoc, doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";
const USERJWT_COLLECTION = "userJwts";
// const authToken =   "a26fdfaef594b4ec7f9bed76d2ed4f1eb0c2e82eab08403a8aa3c5ad520fd6dc382cadc2981bac12683f4eb7cc16b7feee85f7101e33bef37a92160a91543fe3b49a427bf9816e271cbd5ff9ffea22861e0e4170ef079cf79ab5f59e3838bcdadce7f240f1870bbc0368b23980e717d21de0cc86bbf87eb3476807a19e6ce2e4";

export async function registerCMS(username, email, password) {
  const data = { username: username, email: email, password: password };
  console.log("reg: ", data);
  // AuthToken in testcms -> API token -> Don't Delete

  const response = await fetch(
    "http://localhost:1337/api/auth/local/register",
    {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      // mode: "no-cors",
      // credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        // Authentication: `Bearer ${authToken}`,
      },

      body: JSON.stringify(data), // body data type must match "Content-Type" header
    }
  );

  return response.json();
}

export async function loginCMS(email, password) {
  const data = { identifier: email, password };
  // AuthToken in testcms -> API token -> Don't Delete

  const response = await fetch("http://localhost:1337/api/auth/local", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    // mode: "no-cors",
    // credentials: "omit",
    headers: {
      "Content-Type": "application/json",
      // Authentication: `Bearer ${authToken}`,
    },
    // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });

  return response.json();
}

export async function firestoreAddJWT(uid, jwt, user) {
  const payload = {
    jwt,
    user,
  };
  console.log(payload);

  // const usersCollectionRef = collection(db, "userJwts");
  // const r = await addDoc(usersCollectionRef, payload);
  // const r = await db.collection("userJwts").doc(uid).set(payload);
  const r = await setDoc(doc(db, USERJWT_COLLECTION, uid), payload);
  console.log(
    "userJWT: ",
    !r ? "Added Succesfully" : "Error",
    r ? r : "No Errors"
  );
}

export async function firestoreGetJWT(uid) {
  const docRef = doc(db, "userJwts", uid);
  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("docsnap data: ", docSnap.data());
      return docSnap.data();
    } else {
      console.log("Document does not exist");
    }
  } catch (error) {
    console.log("docsnap error: ", error);
  }
}
