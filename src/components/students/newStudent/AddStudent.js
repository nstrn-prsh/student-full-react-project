import { useState } from "react";
import { Redirect } from "react-router-dom";
import NewStudent from "./NewStudent.jsx";

const AddStudent = (props) => {
     const [studentName, setStudentName] = useState("");
     const [studentClass, setStudentClass] = useState("");
     const [studentPhoneNumber, setStudentPhoneNumber] = useState("");
     const [studentEmail, setStudentEmail] = useState("");
     const [result, setResult] = useState(false);

     // useEffect(() => {
     //      console.log(props);
     //      if (!auth) {
     //           props.history.replace("/");
     //      }
     // });

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
          alert("student added");
          //props.history.push('/');
          props.history.replace("/");
          // setResult(true)
     };

     let redirect = null;
     if (result) {
          redirect = <Redirect to='/' />;
     }

     return (
          <>
               {redirect}
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

export default AddStudent;
