import Button from "../../UI/button/Button";
import "./editStudent.css";
import { useState } from "react";

const EditStudent = (props) => {
     const { id, name, classNumber, phoneNumber, email } = props.location.state;

     const [student_name, setName] = useState(name);
     const [student_classNumber, setNumber] = useState(classNumber);
     const [student_phoneNumber, setPhoneNumber] = useState(phoneNumber);
     const [student_email, setEmail] = useState(email);
     const [message, setMessage] = useState("");

     const editStudent = () => {
          fetch("http://webmarket.byethost18.com/student/updateStudent.php", {
               method: "POST",
               headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
               },
               body: JSON.stringify({
                    student_id: id,
                    student_name: student_name,
                    student_class: student_classNumber,
                    student_phone_number: student_phoneNumber,
                    student_email: student_email,
               }),
          })
               .then((response) => response.json())
               .then((responseJson) => {
                    if (responseJson === "successful") {
                         props.history.replace("/");
                    } else {
                         setMessage(responseJson);
                    }
               })
               .catch((error) => {
                    setMessage(error);
               });
     };

     return (
          <div className='NewPost'>
               <h1>ویرایش دانش آموز</h1>
               <h2>{message}</h2>
               <label>نام و نام خانوادگی</label>
               <input
                    type='text'
                    value={student_name}
                    onChange={(event) => setName(event.target.value)}
               />
               <label>کلاس</label>
               <input
                    type='number'
                    value={student_classNumber}
                    onChange={(event) => setNumber(event.target.value)}
               />
               <label>شماره تلفن</label>
               <input
                    type='number'
                    value={student_phoneNumber}
                    onChange={(event) => setPhoneNumber(event.target.value)}
               />
               <label>ایمیل</label>
               <input
                    type='email'
                    value={student_email}
                    onChange={(event) => setEmail(event.target.value)}
               />
               <Button clicked={editStudent} btnType='danger'>
                    ویرایش اطلاعات
               </Button>
          </div>
     );
};

export default EditStudent;
