import { useState, useRef, Fragment } from "react";
import Students from "./students/Students";
import Button from "./UI/button/Button";
import SearchStudent from "./students/searchStudent/SearchStudent";

const HomePage = (props) => {
     const [studentsState, setStudents] = useState([]);
     const [toggle, setToggle] = useState(false);

     const inputEl = useRef(null);

     const nameChangeHandler = (event, id) => {
          const studentIndex = studentsState.findIndex((student) => {
               return student.id === id;
          });
          const student = { ...studentsState[studentIndex] };
          student.name = event.target.value;
          const students = [...studentsState];
          students[studentIndex] = student;
          setStudents(students);
     };

     const deleteStudent = (index) => {
          const students = [...studentsState];
          students.splice(index, 1);
          setStudents(students);
     };

     const edited = (id) => {
          //console.log(props);
          //props.history.push({pathname:'/student/'+id});
          props.history.push("/student/" + id);
     };

     return (
          <Fragment>
               <SearchStudent
                    inputEl={inputEl}
                    studentsState={studentsState}
                    setStudents={setStudents}
               />

               <Button btnType='success' clicked={() => setToggle(!toggle)}>
                    تغییر وضعیت نمایش
               </Button>

               <Students
                    studentsList={studentsState}
                    toggle={toggle}
                    deleted={deleteStudent}
                    nameChange={nameChangeHandler}
                    edited={edited}
               />
          </Fragment>
     );
};
export default HomePage;
