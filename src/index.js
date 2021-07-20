import { render } from "react-dom";
import "./index.css";
import App from "./App";
import axios from "axios";
import ThemeContextProvider from "./context/themeContext";

axios.defaults.baseURL = "https://jsonplaceholder.ir";
axios.defaults.headers.post["Contetnt-Type"] = "application/json";

render(
     <ThemeContextProvider>
          <App />
     </ThemeContextProvider>,
     document.getElementById("root")
);
