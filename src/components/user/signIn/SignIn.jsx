import reactappLogo from "../../../assets/images/reactapp-logo.png";
import Button from "../../UI/button/Button";
import "./signIn.css";

const SignIn = (props) => (
     <>
          <img src={reactappLogo} alt='react' />
          <input type='text' placeholder='username' />
          <input type='password' placeholder='password' />
          <Button>ورود</Button>
     </>
);
export default SignIn;
