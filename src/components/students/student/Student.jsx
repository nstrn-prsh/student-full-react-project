import Button from "../../UI/button/Button";
import { memo } from "react";
import PropTypes from "prop-types";
import "./student.css";
import { Link } from "react-router-dom";

const Student = (props) => {
     const { id, name, classNumber, phoneNumber, email, deleted } = props;

     return (
          <div className='students'>
               <label>شماره دانش آموزی :{id}</label>
               <label>نام و نام خانوادگی:{name}</label>
               <label>کلاس:{classNumber}</label>
               <label>شماره تلفن:{phoneNumber}</label>
               <label>ایمیل:{email}</label>
               <label
               // style={{display:"flex"}}
               >
                    <Button btnType='danger' clicked={deleted}>
                         حذف
                    </Button>
                    {/* <Link to={"/student/"+props.id}> */}
                    <Button btnType='success' clicked={props.edited}>
                         ویرایش
                    </Button>
                    {/* </Link> */}
               </label>
          </div>
     );
};

export default memo(Student);

// baraye inke motmaen beshim ke hameye prop haye pas dade shode type dorosto daryaft mikonan
Student.propTypes = {
     id: PropTypes.number.isRequired,
     name: PropTypes.string.isRequired,
     classNumber: PropTypes.number.isRequired,
     phoneNumber: PropTypes.number.isRequired,
     email: PropTypes.string.isRequired,
     nameChanged: PropTypes.func.isRequired,
};
