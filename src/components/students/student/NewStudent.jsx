import classes from "./newStudent.module.css";
import Button from "../../UI/button/Button";
import WithClass from "../../hoc/WithClass";
import { useState, memo } from "react";
import { PropTypes } from "prop-types";
import { withRouter } from "react-router";

const NewStudent = (props) => {
     const {
          clicked,
          studentName,
          studentClass,
          studentPhoneNumber,
          studentEmail,
          studentNameHandler,
          studentClassHandler,
          studentPhoneNumberHandler,
          studentEmailHandler,
     } = props;

     return (
          <>
               <h1>اضافه کردن دانش آموز جدید</h1>
               <label>نام و نام خانوادگی</label>
               <input
                    type='text'
                    value={studentName}
                    onChange={studentNameHandler}
               />
               <label>کلاس</label>
               <input
                    type='number'
                    value={studentClass}
                    onChange={studentClassHandler}
                    maxLength={3}
               />
               <label>شماره تلفن</label>
               <input
                    type='number'
                    value={studentPhoneNumber}
                    onChange={studentPhoneNumberHandler}
               />
               <label>ایمیل</label>
               <input
                    type='email'
                    value={studentEmail}
                    onChange={studentEmailHandler}
               />
               <Button clicked={clicked} btnType='danger'>
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
