import { useState, useEffect, useRef, useContext } from "react";
import Button from "../components/UI/button/Button";
import Students from "./students/Students.jsx";
import Spinner from "../components/UI/spinner/spinner";
import ErrorHandler from "../components/hoc/ErrorHandler";
import axios from "../axios";
import { AuthContext } from "./../context/authContext";
import { StudentsContext } from "./../context/studentsContext";

const HomePage = (props) => {
     const [searchBarValue, setSearchBarValue] = useState("");
     const [arrayHolder, setArrayHolder] = useState([]);
     const [toggle, setToggle] = useState(false);
     const [loading, setLoading] = useState(false);

     const inputEl = useRef(null);

     const { authenticated } = useContext(AuthContext);
     const { dispatch, studentsState } = useContext(StudentsContext);

     const searchFilterFunction = (event) => {
          const itemData = arrayHolder.filter((item) => {
               const itemData = item.student_name.toUpperCase();
               const textData = event.target.value.toUpperCase();
               return itemData.indexOf(textData) > -1;
          });
          dispatch({ type: "search", payload: itemData });
          setSearchBarValue(event.target.value);
     };

     useEffect(() => {
          inputEl.current.focus();
          setLoading(true);
          fetch("http://192.168.119.2/student/showStudent.php")
               .then((response) => response.json())
               .then((responseJson) => {
                    setLoading(false);
                    dispatch({ type: "fetch", payload: responseJson });
                    setArrayHolder(responseJson);
               });
     }, [dispatch, studentsState]);

     const deleteStudent = (id) => {
          fetch("http://192.168.119.2/student/deleteStudent.php", {
               method: "POST",
               headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
               },
               body: JSON.stringify({
                    student_id: id,
               }),
          })
               .then((response) => response.json())
               .then((responseJson) => {
                    dispatch({ type: "remove", id: id });
               })
               .catch((error) => {
                    alert(error);
               });
     };

     const edited = (id, name, classNumber, phoneNumber, email) => {
          props.history.push({
               pathname: "/student/" + id,
               state: {
                    id: id,
                    name: name,
                    classNumber: classNumber,
                    phoneNumber: phoneNumber,
                    email: email,
               },
          });
     };

     return (
          <>
               <input
                    type='text'
                    value={searchBarValue}
                    onChange={searchFilterFunction}
                    className='search-bar'
                    ref={inputEl}
                    style={{ marginTop: "70px" }}
               />

               <Button btnType='success' clicked={() => setToggle(!toggle)}>
                    تغییر وضعیت نمایش
               </Button>

               {loading ? (
                    <Spinner />
               ) : (
                    <Students
                         studentsList={studentsState}
                         deleted={deleteStudent}
                         toggle={toggle}
                         edited={edited}
                    />
               )}
          </>
     );
};
export default ErrorHandler(HomePage, axios);
