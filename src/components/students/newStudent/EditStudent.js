import Button from "../../UI/button/button";
import "./editStudent.css";

const EditStudent = (props) => {
     // useEffect(()=>{
     //     console.log(props.match.params);
     // },[])

     const editStudent = () => {
          alert("successful");
          //fetch(http://192.168.121.19/editstudent.php?id=studentid)
     };

     return (
          <div className='NewPost'>
               <h1>ویرایش دانش آموز</h1>
               <label>نام و نام خانوادگی</label>
               <input type='text' />
               <label>کلاس</label>
               <input type='number' />
               <label>شماره تلفن</label>
               <input type='number' />
               <label>ایمیل</label>
               <input type='email' />
               <Button clicked={editStudent} btnType='danger'>
                    ویرایش اطلاعات
               </Button>
          </div>
     );
};
export default EditStudent;
