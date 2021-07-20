import { useState, useEffect, useContext } from "react";
import reactappLogo from "../../assets/images/reactapp-logo.png";
import Button from "../UI/button/Button";
import reloadImage from "../../assets/images/reload_image.jpg";
import "./signIn.css";
import { AuthContext } from "./../../context/authContext";

const SignIn = (props) => {
     const [randomNumber1, setRandomNumber1] = useState(0);
     const [randomNumber2, setRandomNumber2] = useState(0);
     const [sumHolder, setSumHolder] = useState(0);
     const [captchaValue, setCaptchaValue] = useState(0);
     const [errorMessage, setErrorMessage] = useState("");
     const [username, setUsername] = useState("");
     const [password, setPassword] = useState("");

     const { dispatch } = useContext(AuthContext);

     useEffect(() => {
          generateCaptcha();
     }, []);

     const generateCaptcha = () => {
          let number1 = Math.floor(Math.random() * 10) + 1;
          let number2 = Math.floor(Math.random() * 10) + 1;
          setRandomNumber1(number1);
          setRandomNumber2(number2);
          let sum = number1 + number2;
          setSumHolder(sum);
     };

     const captchaHandler = (event) => {
          setCaptchaValue(Number(event.target.value));
     };

     const validate = () => {
          if (username === "") {
               setErrorMessage("username empty");
               return false;
          } else if (!username.includes("@") || !username.includes(".")) {
               setErrorMessage("username invalid");
               return false;
          } else if (password === "") {
               setErrorMessage("password empty");
               return false;
          } else if (password.length < 5) {
               setErrorMessage("password invalid");
               return false;
          }
          setErrorMessage("");
          return true;
     };

     const loginHandler = () => {
          if (sumHolder === captchaValue) {
               setErrorMessage("");
               const validateResult = validate();
               if (validateResult) {
                    fetch("http://192.168.119.2/student/user_login.php", {
                         method: "POST",
                         headers: {
                              Accept: "applicaion/json",
                              "Content-Type": "application/json",
                         },
                         body: JSON.stringify({
                              email: username,
                              password: password,
                         }),
                    })
                         .then((response) => response.json())
                         .then((responseJson) => {
                              if (responseJson === "Data Matched") {
                                   dispatch({
                                        type: "login",
                                        payload: username,
                                   });
                              } else {
                                   setErrorMessage(responseJson);
                              }
                         })
                         .catch((error) => {
                              alert(error);
                         });
               }
          } else {
               setErrorMessage("captcah Invalid");
               return false;
          }
     };

     const usernameHandler = (event) => {
          setUsername(event.target.value);
     };

     const passwordHandler = (event) => {
          setPassword(event.target.value);
     };

     return (
          <>
               <p style={{ color: "red", fontSize: "56" }}>{errorMessage}</p>
               <img src={reactappLogo} alt='react' />
               <input
                    type='text'
                    placeholder='username'
                    value={username}
                    onChange={usernameHandler}
               />
               <input
                    type='password'
                    placeholder='password'
                    value={password}
                    onChange={passwordHandler}
               />
               <div className='captcha_view'>
                    <img
                         src={reloadImage}
                         alt='reloadimage'
                         onClick={generateCaptcha}
                    />
                    <input type='text' onChange={captchaHandler} />
                    <p>
                         {randomNumber1} +{randomNumber2}=
                    </p>
               </div>
               <Button clicked={loginHandler}>ورود</Button>
          </>
     );
};

export default SignIn;
