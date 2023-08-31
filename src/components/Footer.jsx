import React, { useContext } from "react";
import { IoHomeSharp } from "react-icons/io5";
import { BsFillCartFill, BsList } from "react-icons/bs";
import { AppContext } from "../App";

const Footer = () => {
  const { setRoute } = useContext(AppContext);
  return (
    <footer className="fixed h-16 w-full bg-sky-400 bottom-0 flex justify-evenly items-center">
      <div
        className="bg-sky-200 p-2 text-3xl rounded-full text-pink-500 cursor-pointer hover:bg-sky-50 transition"
        onClick={() => setRoute("home")}
      >
        <IoHomeSharp />
      </div>
      <div
        className="bg-sky-200 p-2 text-3xl rounded-full text-pink-500 cursor-pointer hover:bg-sky-50 transition"
        onClick={() => setRoute("shopping")}
      >
        <BsFillCartFill />
      </div>
      <div
        className="bg-sky-200 p-2 text-3xl rounded-full text-pink-500 cursor-pointer hover:bg-sky-50 transition"
        onClick={() => setRoute("tasklist")}
      >
        <BsList />
      </div>
    </footer>
  );
};

export default Footer; 

// import React from 'react'
// import { IoHomeSharp } from "react/icons/io5"
// import { BsFillCartFill } from "react/icons/bs"

//  const Footer = () => {
//     return (
//         <footer className="fixed h-16 w-full bg-sky-400 bottom-0 flex
//         justify-evenly
//         items-center">
//             <div className='bg-sky-200 text-3xl p-2 rounded-full text-pink-500 '>
//             <IoHomeSharp  />
//             </div>
//             <div className='bg-sky-200 text-3xl p-2 rounded-full text-pink-500 '>
//             <BsFillCartFill   />
//             </div>

//         </footer>
//   )
// }

// export default Footer
