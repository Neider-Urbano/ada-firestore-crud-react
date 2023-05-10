import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import db from "../firebase/config";

const useData = (nameCollection) => {
  const [data, setData] = useState([]);

  const getData = async (nameCollection) => {
    await getDocs(collection(db, nameCollection)).then((querySnapshot) => {
      let newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(newData);
    });
  };

  const postData = async (nameCollection, newData) => {
    const docRef = await addDoc(collection(db, nameCollection), newData);
    return docRef.id;
  };

  const deleteData = async (nameCollection, id) => {
    await deleteDoc(doc(db, nameCollection, id));
    return "Deleted Patient";
  };

  const updateData = async (id, newdata) => {
    const washingtonRef = doc(db, "patients", id);
    try {
      await updateDoc(washingtonRef, newdata);
      getData("patients");
      return "Updated Patient";
    } catch (error) {
      throw new Error(error.message);
    }
  };

  useEffect(() => {
    getData(nameCollection);
  }, []);

  return {
    data,
    getData,
    postData,
    deleteData,
    updateData,
  };
};

export default useData;
