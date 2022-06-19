import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import '../styles/Logout.scss'

const Logout = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {

    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user == null)
      navigate("/");
  }, [user, loading]);
  return (

    <button
      className="logout__btn"
      onClick={() => signOut(auth)}
    >
      Logout
    </button>


  );
}
export default Logout;