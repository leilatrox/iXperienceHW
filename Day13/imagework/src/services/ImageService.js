import { collection, query, getDocs, addDoc } from "firebase/firestore";

import { db } from "../firebase/firebase";
import { Image } from "../model/Image";

class ImageService {
  constructor() {
    this.collection = "images";
  }

  async createImage(image) {
    const collRef = collection(db, this.collection);

    const docRef = await addDoc(collRef, image.toJson());

    image.id = docRef.id;
    return image;
  }

  async fetchImages() {
    const collRef = collection(db, this.collection);

    const querySnapshot = await getDocs(query(collRef));
    const images = [];

    querySnapshot.forEach((doc) => {
      images.push(Image.fromFirebase(doc));
    });

    return images;
  }
}

const service = new ImageService();
export default service;
