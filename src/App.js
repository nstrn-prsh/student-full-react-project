import Toolbar from "./components/Header/Toolbar/Toolbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/Homepage";
import EditStudent from "./components/students/newStudent/EditStudent";
import { lazy, Suspense } from "react";

// new: react lazy load
const AddStudent = lazy(() =>
     import("./components/students/newStudent/AddStudent")
);

const App = () => {
     // const [auth] = useState(true);

     return (
          <Router>
               <div className='App'>
                    <Toolbar />
                    <div style={{ marginTop: "70px" }}>
                         <Switch>
                              <Route path='/' exact component={HomePage} />
                              {/* {auth ? (
                                   <Fragment> */}
                              <Route
                                   path='/add-student'
                                   exact
                                   render={() => (
                                        <Suspense fallback={<p>loading....</p>}>
                                             {/* AddStudent */}
                                        </Suspense>
                                   )}
                              />
                              <Route
                                   path='/student/:studentId'
                                   exact
                                   component={EditStudent}
                              />
                              {/* </Fragment>
                              ) : null}
                              <Redirect to='/' />
                     */}
                              <Route
                                   path='*'
                                   render={() => <h1>not found 404</h1>}
                              />
                         </Switch>
                    </div>
               </div>
          </Router>
     );
};

export default App;
