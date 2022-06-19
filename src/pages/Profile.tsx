import { auth, db } from "../firebase";
import { useEffect, useState } from "react";
import UserData from "../types/user.type";
import firebase from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import '../styles/Home.scss';

const UserProfile = () => {
  const [userInfo, setUserInfo] = useState<UserData | null>(null);
  const [user, loading, error] = useAuthState(auth);
  const db = firebase.collection("/users");
  const fetchUserInfo = async () => {
    const { uid }: any = auth.currentUser;
    // Discard fetch when user ID not defined
    if (!uid) return;
    const userRef = db.doc(uid);
    const doc = await userRef.get();
    const userData = doc.data() as UserData;
    console.log(userData);
    setUserInfo(userData);
  };

  // Get user on mount
  useEffect(() => {
    fetchUserInfo();
    console.log("after fetched")
  }, []);

  if (!user) return null;
  return (
    <div className='nav-item'>
      <p className='helper'>Hello</p>
      <p className='help'>{userInfo?.name}</p>
    </div>
  )
}
export default UserProfile;