import { doc, getDocs, setDoc } from "firebase/firestore";

import { db } from "../firebase/firebase";
import { Profile } from "../models/profile";

class ProfileService {
  constructor() {
    this.collection = "profiles";
  }
  async saveProfile(profile) {
    const docRef = doc(db, this.collection, profile.id);

    await setDoc(docRef, profile.toJson());
  }

  async fetchProfiles(user) {
    const docRef = doc(db, this.collection, user.uid);
    const docSnap = await getDocs(docRef);

    if (docSnap.exists()) {
      return Profile.fromFirebase(docSnap);
    } else {
      return new Profile(user.uid);
    }
  }
}

const service = new ProfileService();

export default service;
