import Student from "./student/Student";
import PropTypes from "prop-types";
import { memo, useEffect } from "react";
import "./student/student.css";
import ErrorBoundary from "../ErrorBoundaries/ErrorBoundary";

const Students = (props) => {
     useEffect(() => {
          //console.log(props.studentsList)
     }, [props.studentsList]);

     let students = props.studentsList.map((student, index) => (
          <ErrorBoundary key={index}>
               <Student
                    id={student.student_id}
                    name={student.student_name}
                    classNumber={student.student_class}
                    phoneNumber={student.student_phone_number}
                    email={student.student_email}
                    deleted={() => props.deleted(student.student_id)}
                    edited={() =>
                         props.edited(
                              student.student_id,
                              student.student_name,
                              student.student_class,
                              student.student_phone_number,
                              student.student_email
                         )
                    }
               />
          </ErrorBoundary>
     ));

     if (props.toggle) {
          return <div className='student-section'>{students}</div>;
     }

     return students;
};

export default memo(Students);

Students.propTypes = {
     studentsList: PropTypes.array.isRequired,
     nameChanged: PropTypes.func.isRequired,
     deleted: PropTypes.func.isRequired,
     toggle: PropTypes.bool.isRequired,
};
