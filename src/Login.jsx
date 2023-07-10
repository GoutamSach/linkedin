import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { login } from "./features/userSlice";
import { useDispatch } from "react-redux";

function Login() {
  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const auth = getAuth();
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, Email, Password)
      .then((userCredential) => {
        const user = userCredential.user;

        dispatch(
          login({
            Learningreact: user.Learningreact,
            uid: user.uid,
            displayName: user.displayName,
          })
        );
      })
      .catch((error1) => {
        alert(error1.message);
      });
  };
  const Regsiter = () => {
    if (!Name) {
      return alert("Please enter you full name");
    }

    createUserWithEmailAndPassword(auth, Email, Password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: Name,
          Learningreact: Email,
        });

        dispatch(
          login({
            uid: user.uid,
            displayName: Name,
            Learningreact: Email,
          })
        );
      })
      .catch((error1) => {
        alert(error1.message);
      });
  };
  return (
    <div className=" flex flex-col items-center mt-16">
      <img
        className=" w-1/6"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png"
        alt=""
      />

      <form className="flex flex-col w-64 space-y-3 mb-16 mt-4">
        <input
          onChange={(e) => setName(e.target.value)}
          className="py-2 pl-2   rounded-md border-2  border-l-black border-t-black border-b-gray-500 border-r-gray-500 focus:bg-gray-50"
          type="text "
          placeholder="Full Name(required if registering)"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="py-2 pl-2 rounded-md border-2  border-l-black border-t-black border-b-gray-500 border-r-gray-500 focus:bg-gray-50  "
          type="email"
          placeholder="Email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="py-2 pl-2 rounded-md border-2  border-l-black border-t-black border-b-gray-500 border-r-gray-500 focus:bg-gray-50"
          type="password"
          placeholder="Password"
        />
        <button
          onClick={loginToApp}
          className=" text-white bg-blue-600 py-2 rounded-md   shadow-gray-500 shadow-md  click"
        >
          Sign In
        </button>
        <p className="block text-center">
          Not a member?{" "}
          <span onClick={Regsiter} className=" text-blue-600   cursor-pointer ">
            Register Now
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;
