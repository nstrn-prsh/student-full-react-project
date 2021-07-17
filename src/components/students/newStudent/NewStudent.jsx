import classes from "./newStudent.module.css";
import Button from "../../UI/button/Button";
import WithClass from "../../hoc/WithClass";
import { useState, memo } from "react";
import { PropTypes } from "prop-types";
import { withRouter } from "react-router";

const NewStudent = ({ studentsState, setStudents }) => {
     const [studentName, setStudentName] = useState("");
     const [studentClass, setStudentClass] = useState("");
     const [studentPhoneNumber, setStudentPhoneNumber] = useState("");
     const [studentEmail, setStudentEmail] = useState("");

     const addStudent = () => {
          const newStudentsState = [...studentsState];
          newStudentsState.push({
               id: studentsState.length,
               name: studentName,
               classNumber: studentClass,
               phoneNumber: studentPhoneNumber,
               email: studentPhoneNumber,
          });
          setStudents(newStudentsState);
          setStudentName("");
          setStudentClass("");
          setStudentPhoneNumber("");
          setStudentEmail("");
     };

     return (
          <>
               <h1>اضافه کردن دانش آموز جدید</h1>
               <input
                    placeholder='نام و نام خانوادگی'
                    type='text'
                    value={studentName}
                    onChange={(event) => setStudentName(event.target.value)}
               />
               <input
                    placeholder='کلاس'
                    type='number'
                    value={studentClass}
                    onChange={(event) => setStudentClass(event.target.value)}
                    maxLength={3}
               />
               <input
                    placeholder='شماره تلفن'
                    type='number'
                    value={studentPhoneNumber}
                    onChange={(event) =>
                         setStudentPhoneNumber(event.target.value)
                    }
               />
               <input
                    placeholder='ایمیل'
                    type='email'
                    value={studentEmail}
                    onChange={(event) => setStudentEmail(event.target.value)}
               />

               <Button clicked={addStudent} btnType='danger'>
                    اضافه کردن
               </Button>
          </>
     );
};

export default memo(withRouter(WithClass(NewStudent, classes.NewPost)));

NewStudent.propTypes = {
     studentName: PropTypes.string,
     studentClass: PropTypes.number,
     studentPhoneNumber: PropTypes.number,
     studentEmail: PropTypes.string,
};
