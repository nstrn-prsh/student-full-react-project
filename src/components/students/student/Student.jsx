import Button from "../../UI/button/Button";
import { memo } from "react";
import PropTypes from "prop-types";
import "./student.css";

const Student = (props) => {
     const { nameChanged, id, name, classNumber, phoneNumber, email, deleted } =
          props;

     return (
          <div className='students'>
               <label>شماره دانش آموزی :{id}</label>
               <hr />

               <label>نام و نام خانوادگی</label>
               <input type='text' value={name} onChange={nameChanged} />

               <label>کلاس</label>
               <input type='text' value={classNumber} />

               <label>شماره تلفن</label>
               <input type='number' value={phoneNumber} />

               <label>ایمیل</label>
               <input type='email' value={email} />

               <label>
                    <Button btnType='danger' clicked={deleted}>
                         حذف
                    </Button>
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
