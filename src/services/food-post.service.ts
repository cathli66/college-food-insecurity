import firebase from "../firebase";
import FoodPostData from "../types/post.type"

const db = firebase.collection("/foodposts");

class PostDataService {
  getAll() {
    return db;
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
