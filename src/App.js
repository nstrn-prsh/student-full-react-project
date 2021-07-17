import Toolbar from "./components/Header/Toolbar/Toolbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/UI/Homepage";
import AddStudent from "./components/students/newStudent/AddStudent";

const App = () => {
     return (
          <Router>
               <div className='App'>
                    <Toolbar />
                    <Route path='/' exact component={HomePage} />
                    <Route path='/add-student' exact component={AddStudent} />
               </div>
          </Router>
     );
};

export default App;
