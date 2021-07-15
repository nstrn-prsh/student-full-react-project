import Backdrop from "../backdrop/Backdrop";
import { memo, Fragment } from "react";
import "./Modal.css";

const Modal = (props) => {
     return (
          <Fragment>
               <Backdrop show={props.show} modalClosed={props.modalClosed} />

               <div
                    className='Modal'
                    style={{
                         transform: props.show
                              ? "translateX(0)"
                              : "translateX(-100vh)",
                         opacity: props.show ? "1" : "0",
                    }}
               >
                    {props.children}
               </div>
          </Fragment>
     );
};
export default memo(Modal);
