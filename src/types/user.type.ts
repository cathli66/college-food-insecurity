import FoodPostData from "./post.type"
export default interface UserData {
  id?: string | null,
  name: string,
  email: string,
  myfood: FoodPostData[],
  attending: FoodPostData[]
  // opento: string[],
  // duration: string
}
