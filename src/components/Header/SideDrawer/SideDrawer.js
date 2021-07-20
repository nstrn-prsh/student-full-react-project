import "./SideDrawer.css";
import Backdrop from "./../../UI/backdrop/Backdrop";
import Logo from "./../logo/Logo";
import MenuItems from "./../MenuItems/MenuItems";
import Button from "../../UI/button/Button";

const SideDrawer = (props) => {
     let classes = ["SideDrawer", "Close"];
     if (props.show) {
          classes = ["SideDrawer", "Open"];
     }

     return (
          <>
               <Backdrop show={props.show} modalClosed={props.closeDrawer} />
               <div className={classes.join(" ")}>
                    <Logo height='10%' />
                    <nav>
                         <MenuItems />
                    </nav>
                    <div className='boxButton'>
                         <Button
                              btnType='danger'
                              clicked={() => alert("sign in page opened")}
                         >
                              ورود و ثبت نام
                         </Button>
                    </div>
               </div>
          </>
     );
};
export default SideDrawer;
