import "./logo.css";
import reactLogo from "./../../../assets/images/reactapp-logo.png";

const Logo = (props) => {
     return (
          <div className='Logo' style={{ height: props.height }}>
               <img src={reactLogo} alt='logo' />
          </div>
     );
};

export default Logo;
