// import { useEffect } from "react";
import Student from "./student/Student";
import PropTypes from "prop-types";
import { memo } from "react";
import "./student/student.css";
import ErrorBoundary from "../ErrorBoundaries/ErrorBoundary";

const Students = (props) => {
     let students = props.studentsList.map((student, index) => (
          <ErrorBoundary key={index}>
               <Student
                    id={student.id}
                    name={student.name}
                    classNumber={student.classNumber}
                    phoneNumber={student.phoneNumber}
                    email={student.email}
                    deleted={props.deleted}
                    nameChanged={(event) => props.nameChange(event, student.id)}
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
     toggle: PropTypes.bool.isRequired,
     deleted: PropTypes.func.isRequired,
};
