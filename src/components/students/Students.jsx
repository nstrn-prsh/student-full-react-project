// import { useEffect } from "react";
import Student from "./student/Student";
import PropTypes from "prop-types";
import { memo } from "react";
import "./student/student.css";

const Students = (props) => {
     let students = props.studentsList.map((student, index) => (
          <Student
               key={index}
               id={student.id}
               name={student.name}
               classNumber={student.classNumber}
               phoneNumber={student.phoneNumber}
               email={student.email}
               deleted={props.deleted}
               nameChanged={(event) => props.nameChange(event, student.id)}
          />
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
