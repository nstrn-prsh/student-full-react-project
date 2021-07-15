import "./MenuItems.css";
import MenuItem from "./MenuItem/MenuItem";

const MenuItems = () => {
     return (
          <ul className='MenuItems'>
               <MenuItem link='/' active>
                    صفحه اصلی
               </MenuItem>
               <MenuItem link='/'>مشاهده دانش آموزان</MenuItem>
          </ul>
     );
};

export default MenuItems;
