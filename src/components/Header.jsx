import React, { useContext } from "react";
import { SiFirebase } from "react-icons/si";
import { AppContext } from "../App";
import { getAuth, signOut } from "firebase/auth";
import { toast } from "react-hot-toast";



const Header = () => {
  const auth = getAuth();
  const { setRoute, user, setUser } = useContext(AppContext);
  const hazLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setRoute("login");
        setUser(null)
        toast(`Hasta la proxima!`)
      })
      .catch((error) => {
        // An error happened.
        console.error(error)
      });
  }
  return (
    <header className="h-20 w-full bg-gray-100 shadow-lg flex items-center justify-between px-8 fixed top-0">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setRoute("home")}
      >
        <SiFirebase className="text-2xl text-pink-600" />
        <span className="text-xl font-semibold text-pink-600">Fire-Shop V2</span>
      </div>
      <div className="flex gap-2">
        {user ? (
          <>
            <button onClick={hazLogout}>Logout</button>
          </>
        ) : (
          <>
            {" "}
            <button
              onClick={() => setRoute("login")}
              className="bg-sky-400 text-white py-1 px-3 rounded-2xl hover:bg-sky-700 transition shadow-md"
            >
              Login
            </button>
            <button
              onClick={() => setRoute("register")}
              className="bg-sky-400 text-white py-1 px-3 rounded-2xl hover:bg-sky-700 transition shadow-md"
            >
              Registrate
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
