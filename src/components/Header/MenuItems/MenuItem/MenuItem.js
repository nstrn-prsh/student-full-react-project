import { NavLink } from "react-router-dom";
import "./MenuItem.css";

const MenuItem = (props) => {
     return (
          <li className='MenuItem'>
               <NavLink
                    to={props.link}
                    activeClassName='active'
                    activeStyle={{
                         color: "rgba(2, 129, 40, 0.767)",
                         cursor: "pointer",
                    }}
                    exact
               >
                    {props.children}
               </NavLink>
          </li>
     );
};

export default MenuItem;
