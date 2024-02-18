import { Link, NavLink } from "react-router-dom"
import './style/Navbar.css'
export const Navbar = () => {
  return (
    <div>
        
     <nav className="nav container">
       <NavLink to="/" className="nav__logo">
         ALL
       </NavLink>

       <div
         className={"nav__menu"}
         id="nav-menu"
       >
         <ul className="nav__list">
           <li className="nav__item">
             <NavLink to="/fullstack" className="nav__link">
               Full Stack Development
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink to="/datascience" className="nav__link">
               Data Science
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink
               to="/cybersecurity"
               className="nav__link"
             >
            Cyber Security
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink
               to="/career"
               className="nav__link"
             >
               Career
             </NavLink>
           </li>
          
         </ul>
        
       </div>

      
     </nav>
  
       
    </div>
  )
}
