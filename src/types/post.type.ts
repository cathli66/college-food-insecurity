

export default interface FoodPostData {
  id?: string | null,
  name: string,
  location: string,
  date: string,
  time: string,
  restrict: string[],
  person: string,
  contact: string,
  category: string
  // opento: string[],
  // duration: string
}
