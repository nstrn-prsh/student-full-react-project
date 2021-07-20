import { useState } from "react";
import Modal from "../UI/modal/Modal";

const ErrorHandler = (WrappedComponent, axios) => {
     const WithHooksErrorHandler = (props) => {
          const [show, setShow] = useState(false);
          const [error, setError] = useState(null);

          axios.interceptors.request.use((request) => {
               setShow(false);
               return request;
          });

          axios.interceptors.response.use(
               (response) => response,
               (error) => {
                    setShow(true);
                    setError(error.message);
               }
          );

          return (
               <>
                    <Modal show={show} modalClosed={() => setShow(false)}>
                         {error}
                    </Modal>
                    <WrappedComponent {...props} />
               </>
          );
     };

     return WithHooksErrorHandler;
};
export default ErrorHandler;
