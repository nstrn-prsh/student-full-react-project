import "./button.css";
import PropTypes from "prop-types";
import { memo } from "react";

const Button = (props) => {
     let classes = ["Button"];

     // baraye avaz kardane range button ha
     switch (props.btnType) {
          case "danger":
               classes.push("Danger");
               break;
          case "success":
               classes.push("Success");
               break;
          default:
               break;
     }

     return (
          <button className={classes.join(" ")} onClick={props.clicked}>
               {props.children}
          </button>
     );
};

export default memo(Button);

Button.propTypes = {
     children: PropTypes.string.isRequired,
     clicked: PropTypes.func.isRequired,
     btnType: PropTypes.string,
};
Button.defaultProps = {
     btnType: "success",
};
