import { QuerySnapshot, DocumentData } from "firebase/firestore";
// import { itemClassName } from "react-horizontal-scrolling-menu/dist/types/constants";
import firebase from "../firebase";
import FoodPostData from "../types/post.type"

const db = firebase.collection("/foodposts");

class PostDataService {
  async getAll() {
    var items: Array<FoodPostData> = [];
    const snapshot = await db.get();
    snapshot.forEach((doc) => {
        items.push({
          id: doc.id,
          name: doc.data().name,
          location: doc.data().location,
          date: doc.data().data,
          time: doc.data().time,
          restrict: doc.data().restrict,
          person: doc.data().person,
          contact: doc.data().contact,
          category: doc.data().category
        });
      });
    return items;
  }

  create(post: FoodPostData) {
    return db.add(post);
  }

  update(id: string, value: any) {
    return db.doc(id).update(value);
  }

  delete(id: string) {
    return db.doc(id).delete();
  }
}

export default new PostDataService();
