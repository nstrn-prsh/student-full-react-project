import { useState } from "react";
import Button from "../UI/button/Button";
import "./animation.css";

const styles = {
     transition: "all 1s ease-out",
};

const Transition = () => {
     const [opacityState, setOpacity] = useState(1);
     const [scaleState, setScale] = useState(1);

     const onHide = () => {
          setOpacity(0);
     };

     const onScale = () => {
          setScale(scaleState > 1 ? 1 : 1.2);
     };

     return (
          <div
               className='box'
               style={{
                    ...styles,
                    opacity: opacityState,
                    transform: `scale(${scaleState})`,
               }}
          >
               <h1>انیمیشن</h1>
               <h2>ترکیب انیمیشن های CSS با React Js</h2>

               <div
                    style={{
                         display: "felx",
                         flexFlow: "row",
                         justifyContent: "center",
                    }}
               >
                    <Button btnType='danger' clicked={onHide}>
                         Hide
                    </Button>
                    <Button btnType='success' clicked={onScale}>
                         Scale
                    </Button>
               </div>
          </div>
     );
};
export default Transition;
