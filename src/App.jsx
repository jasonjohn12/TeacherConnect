import { useReducer } from "react";
import { appReducer, initialState } from "./reducers/appReducer";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { loginUserAsync } from "./api/user";
import Dashboard from "./components/Dashboard/Dashboard";
import { getAllStudentsAsync } from "./api/student";
import LoginForm from "./components/LoginForm/LoginForm";
const App = () => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const { isLoggedIn, students, token } = state;

  const handleLogin = async (username, password) => {
    //  e.preventDefault();
    const user = await loginUserAsync(username, password);
    console.log("user", user);
    const students = await getAllStudentsAsync(user.token);
    console.log("students", students);
    dispatch({
      type: "SET_USER",
      payload: { user, students },
    });
    console.log(user);
  };
  return (
    <div className="App">
      <Navbar user={state.username} {...{ dispatch }} />
      {!isLoggedIn ? (
        <div>
          <LoginForm {...{ handleLogin }} />
        </div>
      ) : (
        <Dashboard {...{ dispatch, students, token }} />
      )}
    </div>
  );
};

export default App;
