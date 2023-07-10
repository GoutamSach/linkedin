import React, { useEffect } from "react";
import Header from "./header";
import CardComp from "./card";
import Feeds from "./feed";
import { login, logout, selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import Login from "./Login";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";

function App() {
  const user = useSelector(selectUser);
  const auth = getAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          login({
            Learningreact: user.Learningreact,
            uid: user.uid,
            displayName: user.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    })();
  }, []);

  return (
    <>
      <Header />

      <div className=" flex  flex-row bg-gray-100 ">
        {!user ? (
          <Login />
        ) : (
          <div className="flex  flex-row bg-gray-100">
            <CardComp />
            <Feeds />
          </div>
        )}
      </div>
    </>
  ); /*sidebar component*/
}

export default App;
