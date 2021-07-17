import { Link } from "react-router-dom";
import "./MenuItem.css";

const MenuItem = (props) => {
     let classes = [];
     if (props.active) classes.push("active");

     return (
          <li className='MenuItem'>
               <Link to={props.link} className={classes}>
                    {props.children}
               </Link>
          </li>
     );
};

export default MenuItem;
