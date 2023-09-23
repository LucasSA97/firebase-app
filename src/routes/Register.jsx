import React, { useState, useContext } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-hot-toast";
import { AppContext } from "../App";

const auth = getAuth();

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { setRoute, setUser } = useContext(AppContext)
    const crearUsuario = () => {
     createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
          toast(`Usuario ${email} registrado correctamente`)
        //   setEmail("")
        //   setPassword("")
          setUser(user)
          setRoute("home")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
    }

    const handleSubmit = e => {
        e.preventDefault();
        crearUsuario()
    }

    return (
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-center font-semibold">Registrarse</h1>
        <form className="flex flex-col gap-2 max-w-sm" onSubmit={handleSubmit}>
          <input
          placeholder="Email"
            className="border text-center rounded border-gray-500 py-1 px-2 outline-none"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
          placeholder="Password"
            className="border text-center rounded border-gray-500 py-1 px-2 outline-none"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button className="submit-button">Registrate</button>
        </form>
      </div>
    );
};

export default Register;
