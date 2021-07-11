import "./SearchStudent.css";
import { useState, useEffect } from "react";
import { PropTypes } from "prop-types";

const SearchStudent = ({ studentsState, inputEl, setStudents }) => {
     const [searchBarValue, setSearchBarValue] = useState("");
     const [arrayHolder, setArrayHolder] = useState([]);

     useEffect(() => {
          // emse student haro toye araye negah midarim
          setArrayHolder(studentsState);
          inputEl.current.focus();
     }, [inputEl]);

     const searchFilterFunction = (event) => {
          const itemData = arrayHolder.filter((item) => {
               const itemData = item.name.toUpperCase();
               const textData = event.target.value.toUpperCase();
               return itemData.indexOf(textData) > -1;
          });
          setStudents(itemData);
          setSearchBarValue(event.target.value);
     };

     return (
          <input
               placeholder='یافتن دانش آموز'
               type='text'
               value={searchBarValue}
               onChange={searchFilterFunction}
               className='search-bar'
               ref={inputEl}
          />
     );
};

export default SearchStudent;

SearchStudent.propTypes = {
     searchBarValue: PropTypes.string,
     arrayHolder: PropTypes.array,
     inputEl: PropTypes.object,
     studentsState: PropTypes.array,
};
