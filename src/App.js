import Toolbar from "./components/Header/Toolbar/Toolbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/Homepage";
import EditStudent from "./components/students/student/EditStudent";
import { lazy, Suspense, useContext } from "react";
import { ThemeContext } from "./context/themeContext";
import AuthContextProvider from "./context/authContext";
import StudentsContextProvider from "./context/studentsContext";

// new: react lazy load
const AddStudent = lazy(() =>
     import("./components/students/student/AddStudent")
);

const App = () => {
     // const [auth] = useState(true);
     const themeContext = useContext(ThemeContext);
     const { lightTheme, light, dark } = themeContext;
     const theme = lightTheme ? light : dark;

     return (
          <Router>
               <AuthContextProvider>
                    <StudentsContextProvider>
                         <div
                              className='App'
                              style={{
                                   background: theme.bg,
                                   color: theme.syntax,
                              }}
                         >
                              <Toolbar />
                              <div style={{ marginTop: "70px" }}>
                                   <Switch>
                                        <Route
                                             path='/'
                                             exact
                                             component={HomePage}
                                        />
                                        {/* {auth ? (
                                   <Fragment> */}
                                        <Route
                                             path='/add-student'
                                             exact
                                             render={() => (
                                                  <Suspense
                                                       fallback={
                                                            <p>loading....</p>
                                                       }
                                                  >
                                                       <AddStudent />
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
                                             render={() => (
                                                  <h1>not found 404</h1>
                                             )}
                                        />
                                   </Switch>
                              </div>
                         </div>
                    </StudentsContextProvider>
               </AuthContextProvider>
          </Router>
     );
};

export default App;
