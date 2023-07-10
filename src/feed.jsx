import React, { useState, useEffect } from "react";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import { useSelector } from "react-redux";
import { db } from "./firebase";
import {
  collection,
  getDocs,
  orderBy,
  doc,
  query,
  setDoc,
  onSnapshot,
} from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";
import Post from "./posts";
import { selectUser } from "./features/userSlice";
import { getAuth } from "firebase/auth";

function Feeds() {
  const [displayNamee, setdisplayName] = useState();
  const [emaile, setemail] = useState();
  const user = useSelector(selectUser);
  const [enteredText, setEnteredText] = useState("");
  const [Postfromfirebase, setPostfromfirebase] = useState([]);

  useEffect(() => {
    (async () => {
      const auth = getAuth();

      if (user !== null) {
        setdisplayName(user.displayName);
        setemail(user.Learningreact);
      }

      const colref = collection(db, "coll");
      const q = query(colref, orderBy("timestamp", "desc"));
      onSnapshot(q, (snapshot) => {
        snapshot.docs.forEach((doc) => {
          // console.log(doc.id, " => ", doc.data());

          setPostfromfirebase(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
      });
    })();
  }, []);

  const Submitted = async (a) => {
    a.preventDefault();

    setEnteredText("");
    const posts = collection(db, "coll");
    setDoc(doc(posts), {
      userName: displayNamee,
      // Learningreact: emaile,
      Postss: enteredText,
      timestamp: serverTimestamp(),
    });

    const querySnapshot = await getDocs(collection(db, "coll"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      setPostfromfirebase(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  };
  return (
    <>
      <div className="   flex  flex-col basis-4/6 ">
        <div className=" bg-white rounded-xl ">
          <form
            id="formm"
            action=""
            className="  border flex flex-row  justify-between mt-2 mb-5 mr-4 py-4 p ml-3 bg-white p-2 border-gray-300 rounded-full   items-center"
          >
            <CreateIcon />
            <input
              type="text"
              className=" flex-1  px-4  focus:outline-none  "
              value={enteredText}
              onChange={(e) => setEnteredText(e.target.value)}
            />

            <button onClick={Submitted} className=" hidden " type="submit">
              Send
            </button>
          </form>
          <div className=" flex flex-row    justify-between px-12 pb-4 ">
            <div className=" cursor-pointer hover:bg-slate-200 p-4  rounded-full text-blue-400 flex flex-row items-center">
              <ImageIcon />
              <h3 className="  text-gray-500 font-semibold text-black pl-2">
                Photo
              </h3>
            </div>
            <div className=" cursor-pointer hover:bg-slate-200 rounded-full p-4 text-orange-300 flex flex-row items-center">
              <SubscriptionsIcon />
              <h3 className="text-black text-gray-500 font-semibold pl-2">
                Video
              </h3>
            </div>
            <div className=" cursor-pointer hover:bg-slate-200 rounded-full  p-4 text-gray-400 flex flex-row items-center">
              <EventNoteIcon />
              <h3 className="text-black text-gray-500 font-semibold pl-2">
                Event
              </h3>
            </div>
            <div className=" cursor-pointer hover:bg-slate-200 rounded-full p-4 text-green-900 flex flex-row items-center">
              <CalendarViewDayIcon />
              <h3 className=" text-black text-gray-500 font-semibold pl-2">
                Write article
              </h3>
            </div>
          </div>
        </div>

        {Postfromfirebase.map(
          ({ id, data: { userName, Learningreact, Postss } }) => (
            <Post
              key={id}
              userName={userName}
              Learningreact={Learningreact}
              Postsss={Postss}
            />
          )
        )}
      </div>
    </>
  );
}

export default Feeds;
