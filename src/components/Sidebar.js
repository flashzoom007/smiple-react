// import React, { useState } from "react";
// // import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

// import {
//   AiFillCloseCircle,
//   AiFillAliwangwang,
//   AiFillEyeInvisible,
//   AiOutlineMenuUnfold
// } from "react-icons/ai";
// import { Link, NavLink } from "react-router-dom";
// import { links } from "../data/dummy";

// const Sidebar = () => {
//   const [state, setstate] = useState(links);
//   const [isActive, setActive] = useState(true);

//   const activeLink =
//     "pb-1 text-dark d-flex item-center gap-2 mb-2 pl-4 py-1 rounded-lg text-md transition-duration";
//   const normalLink =
//     "pb-1 text-dark d-flex item-center -1 text-md transition-duration";

//   const activeMenu = true;
//   // const isActive = active;

//   return (
//     <>
//       <div
//         className={
//           isActive
//             ? "main_sidebar transition-duration d-none"
//             : "main_sidebar transition-duration p-3 ms-3 mb-3 position_menu"
//         }
//       >
//         {
//           <AiOutlineMenuUnfold
//             onClick={() => {
//               isActive ? setActive(false) : setActive(true);
//             }}
//             className={
//               isActive
//                 ? "d-none transition-duration"
//                 : "fontSize_icon menu_icon transition-duration"
//             }
//           />
//         }
//       </div>

//       <div
//         className={isActive ? "row main_sidebar transition-duration" : "d-none"}
//       >
//         <div className="col-lg-12 col-md-12 col-12 border py-3 bg-color">
//           <div className="sidebar_menu mt-1">
//             {state.map((props) => {
//               const { title } = props;
//               return (
//                 <>
//                   <div key={title}>
//                     <p>{title}</p>

//                     {props.links.map((curEle) => {
//                       const { name, icon } = curEle;
//                       return (
//                         <>
//                           <NavLink
//                             className={isActive ? activeLink : normalLink}
//                           >
//                             <span>{icon}</span>
//                             <span className="text-capitalize">
//                               <a
//                                 href={name}
//                                 className="text-dark text-decoration-none"
//                               >
//                                 {name}
//                               </a>
//                             </span>
//                           </NavLink>
//                         </>
//                       );
//                     })}
//                   </div>
//                 </>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Sidebar;
import React from 'react'

const Sidebar = () => {
  return (
    <div>Sidebar</div>
  )
}

export default Sidebar