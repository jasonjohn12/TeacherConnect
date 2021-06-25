import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
// import LoginForm from "../LoginForm/LoginForm";
// const useStyles = makeStyles((theme) => ({
//   root: {
//     justifyContent: "space-between",
//   },

//   title: {
//     flexGrow: 1,
//   },
// }));

const Navbar = ({ user, dispatch }) => {
  //   const showLogin = () => {
  //     dispatch({ type: "SHOW_LOGIN_MODAL" });
  //   };

  //   const onHandleClose = () => {
  //     dispatch({ type: "CLOSE_LOGIN_MODAL" });
  //   };

  return (
    <>
      <AppBar position="static">
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6">Teacher Connect</Typography>
          <span style={{ display: "flex" }}>
            {user?.length > 0 ? (
              <div style={{ display: "flex", alignItems: "center" }}>
                <Typography>Hello {user}</Typography>
                <Button
                  color="inherit"
                  onClick={() => {
                    dispatch({ type: "LOGOUT" });
                  }}
                >
                  Logout
                </Button>
              </div>
            ) : (
              <>
                {" "}
                <Button color="inherit">Sign UP</Button>
              </>
            )}
          </span>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
