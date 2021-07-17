import { useState } from "react";
import "./Toolbar.css";
import Logo from "../logo/Logo";
import MenuItems from "../MenuItems/MenuItems";
import Button from "../../../components/UI/button/Button";
import Modal from "../../../components/UI/modal/Modal";
import SideDrawer from "../SideDrawer/SideDrawer";
import SignIn from './../../signIn/SignIn';

const Toolbar = (props) => {
     const [showModal, setShowModal] = useState(false);
     const [openSideDrawer, setOpenSideDrawer] = useState(false);

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

     return (
          <header className='Toolbar'>
               <SideDrawer show={openSideDrawer} closeDrawer={closeDrawer} />

               <div onClick={DrawerHandler}>
                    <i class='fas fa-bars'></i>
               </div>

               <span className='showNav'>
                    <Logo height='80%' />
               </span>

               <span className='showNav'>
                    <nav>
                         <MenuItems />
                    </nav>
               </span>

               <span className='showNav'>
                    <Button btnType='danger' clicked={modalHandler}>
                         ورود و ثبت نام
                    </Button>
               </span>

               <Modal show={showModal} modalClosed={modalClosed}>
                    <SignIn />
               </Modal>
          </header>
     );
};

export default Toolbar;
