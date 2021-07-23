import { useState, useContext, memo } from "react";
import "./Toolbar.css";
import { AuthContext } from "./../../../context/authContext";
import { ThemeContext } from "./../../../context/themeContext";
import SideDrawer from "./../SideDrawer/SideDrawer";
import Logo from "./../logo/Logo";
import MenuItems from "./../MenuItems/MenuItems";
import Button from "../../UI/button/Button";
import SignIn from "./../../signIn/SignIn";
import Modal from "./../../UI/modal/Modal";
import { withRouter } from "react-router-dom";

const Toolbar = (props) => {
     const [showModal, setShowModal] = useState(false);
     const [openSideDrawer, setOpenSideDrawer] = useState(false);

     const authContext = useContext(AuthContext);

     const themeContext = useContext(ThemeContext);
     const { lightTheme, light, dark } = themeContext;
     const theme = lightTheme ? light : dark;

     const modalHandler = () => {
          setShowModal(true);
     };
     const modalClosed = () => {
          setShowModal(false);
     };

     const DrawerHandler = () => {
          setOpenSideDrawer(true);
     };
     const closeDrawer = () => {
          setOpenSideDrawer(false);
     };

     const logout = () => {
          authContext.dispatch({ type: "logout" });
          props.history.replace("/");
     };

     const themeHandler = () => {
          themeContext.changeTheme();
     };

     let auth = false;

     let userInfo;
     if (typeof window !== "undefined") {
          userInfo = JSON.parse(localStorage.getItem("user"));
     }
     if (userInfo) {
          auth = true;
     }

     return (
          <header
               className='Toolbar'
               style={{ background: theme.bg, color: theme.syntax }}
          >
               <SideDrawer show={openSideDrawer} closeDrawer={closeDrawer} />

               {/* hamburger menu */}
               <div onClick={DrawerHandler}>
                    <i class='fas fa-bars'></i>
               </div>

               <span className='showNav' onClick={themeHandler}>
                    <Logo height='80%' />
               </span>
               <span className='showNav'>
                    <nav>
                         <MenuItems />
                    </nav>
               </span>
               <span className='showNav'>
                    {auth ? (
                         <Button btnType='danger' clicked={logout}>
                              خروج
                         </Button>
                    ) : (
                         <Button btnType='danger' clicked={modalHandler}>
                              ورود و ثبت نام
                         </Button>
                    )}
               </span>

               <Modal show={showModal} modalClosed={modalClosed}>
                    <SignIn />
               </Modal>
          </header>
     );
};

export default withRouter(memo(Toolbar));
