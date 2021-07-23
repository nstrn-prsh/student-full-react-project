import Toolbar from "./components/Header/Toolbar/Toolbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/Homepage";
import EditStudent from "./components/students/student/EditStudent";
import { lazy, Suspense } from "react";
import themeContextProvider from "./context/themeContext";
import AuthContextProvider from "./context/authContext";
import StudentsContextProvider from "./context/studentsContext";
import Container from "./container";

// new: react lazy load
const AddStudent = lazy(() =>
     import("./components/students/student/AddStudent")
);

const App = () => {
     // const [auth] = useState(true);
     return (
          // <Router basename="/my-app/">
          <themeContextProvider>
               <AuthContextProvider>
                    <StudentsContextProvider>
                         <Container>
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
                         </Container>
                    </StudentsContextProvider>
               </AuthContextProvider>
          </themeContextProvider>
          // </Router>
     );
};

export default App;
