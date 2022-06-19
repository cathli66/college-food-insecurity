import { QuerySnapshot, DocumentData } from "firebase/firestore";
// import { itemClassName } from "react-horizontal-scrolling-menu/dist/types/constants";
import firebase from "../firebase";
import FoodPostData from "../types/post.type"

const studentdb = firebase.collection("/studentposts");
const halldb = firebase.collection("/dininghallposts");
const restdb = firebase.collection("/restaurantposts");

class PostDataService {

  create(post: FoodPostData, type: string) {
    if(type == "dining hall") {
      return halldb.add(post);
    }
    else if(type == "restaurant") {
      return restdb.add(post);
    }
    else {
      return studentdb.add(post);
    }
  }

  async getAllStudent() {
    var items: Array<FoodPostData> = [];
    const snapshot = await studentdb.get();
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

  updateStudent(id: string, value: any) {
    return studentdb.doc(id).update(value);
  }

  deleteStudent(id: string) {
    return studentdb.doc(id).delete();
  }

  async getAllHall() {
    var items: Array<FoodPostData> = [];
    const snapshot = await halldb.get();
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

  updateHall(id: string, value: any) {
    return halldb.doc(id).update(value);
  }

  deleteHall(id: string) {
    return halldb.doc(id).delete();
  }

  async getAllRestaurant() {
    var items: Array<FoodPostData> = [];
    const snapshot = await restdb.get();
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

  updateRestaurant(id: string, value: any) {
    return restdb.doc(id).update(value);
  }

  deleteRestaurant(id: string) {
    return restdb.doc(id).delete();
  }
}

export default new PostDataService();
