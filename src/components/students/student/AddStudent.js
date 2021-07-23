import { useState, useContext,useEffect } from "react";
import { withRouter } from "react-router-dom";
import NewStudent from "./NewStudent.jsx";
import { AuthContext } from "./../../../context/authContext";

const AddStudent = (props) => {
     const [studentName, setStudentName] = useState("");
     const [studentClass, setStudentClass] = useState("");
     const [studentPhoneNumber, setStudentPhoneNumber] = useState("");
     const [studentEmail, setStudentEmail] = useState("");
     // const [result, setResult] = useState(false);
     const [error, setError] = useState(false);

     const { authenticated } = useContext(AuthContext);

     useEffect(() => {
          console.log(props);
          if (!authenticated) {
               props.history.replace("/");
          }
     });

     const studentNameHandler = (event) => {
          setStudentName(event.target.value);
     };

     const studentClassHandler = (event) => {
          setStudentClass(event.target.value);
     };

     const studentPhoneNumberHandler = (event) => {
          setStudentPhoneNumber(event.target.value);
     };

     const studentEmailHandler = (event) => {
          setStudentEmail(event.target.value);
     };

     const addStudent = () => {
          fetch("http://webmarket.byethost18.com/student/insertStudent.php", {
               method: "POST",
               headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
               },
               body: JSON.stringify({
                    student_name: studentName,
                    student_class: studentClass,
                    student_phone_number: studentPhoneNumber,
                    student_email: studentEmail,
               }),
          })
               .then((response) => response.json())
               .then((responseJson) => {
                    props.history.replace("/");
               })
               .catch((error) => {
                    setError(error);
               });
     };

     let ErrorMessage = null;
     if (error) {
          ErrorMessage = (
               <h1 style={{ textAlign: "center", color: "red" }}>
                    متاسفانه عملیات شما با شکست روبرو شد.لطفا مجددا تلاش کنید
               </h1>
          );
     }

     // let redirect = null;
     // if (result) {
     //      redirect = <Redirect to='/' />;
     // }

     return (
          <>
               {/* {redirect} */}
               {ErrorMessage}

               <NewStudent
                    studentName={studentName}
                    studentClass={studentClass}
                    studentPhoneNumber={studentPhoneNumber}
                    studentEmail={studentEmail}
                    studentNameHandler={studentNameHandler}
                    studentClassHandler={studentClassHandler}
                    studentPhoneNumberHandler={studentPhoneNumberHandler}
                    studentEmailHandler={studentEmailHandler}
                    clicked={addStudent}
               />
          </>
     );
};

export default withRouter(AddStudent);
