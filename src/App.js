import { useState, useRef } from "react";
import Students from "./components/students/Students";
import Button from "./components/UI/button/Button";
import NewStudent from "./components/students/newStudent/NewStudent";
import SearchStudent from "./components/students/searchStudent/SearchStudent";

const App = () => {
     const [studentsState, setStudents] = useState([]);
     const [toggle, setToggle] = useState(false);

     const inputEl = useRef(null);

     const nameChangeHandler = (event, id) => {
          const studentIndex = studentsState.findIndex(
               (student) => student.id === id
          );
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

     return (
          <div className='App'>
               <NewStudent
                    studentsState={studentsState}
                    setStudents={setStudents}
               />

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
               />

               <Button
                    btnType='danger'
                    clicked={() =>
                         window.scrollTo(0, inputEl.current.offsetTop)
                    }
               >
                    click to scroll
               </Button>
          </div>
     );
};

export default App;
