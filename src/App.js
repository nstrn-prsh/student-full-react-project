import Toolbar from "./components/Header/Toolbar/Toolbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/Homepage";
import AddStudent from "./components/students/newStudent/AddStudent";
import EditStudent from "./components/students/newStudent/EditStudent";

const App = () => {
     return (
          <Router>
               <div className='App'>
                    <Toolbar />
                    <div style={{ marginTop: "70px" }}>
                         <Route path='/' exact component={HomePage} />
                         <Route
                              path='/add-student'
                              exact
                              component={AddStudent}
                         />
                         <Route
                              path='/student/:studentId'
                              exact
                              component={EditStudent}
                         />
                    </div>
               </div>
          </Router>
     );
};

export default App;
