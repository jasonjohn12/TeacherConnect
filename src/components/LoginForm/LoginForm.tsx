import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
const LoginForm: React.FC<{
  handleLogin: (username: string, password: string) => void;
}> = ({ handleLogin }) => {
  const [open, setOpen] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    //onHandleClose();
  };
  const onSubmit = (e: { preventDefault: () => void }) => {
    console.log("e", e);
    e.preventDefault();
    handleLogin(username, password);
  };
  return (
    <form
      onSubmit={onSubmit}
      noValidate
      autoComplete="off"
      style={{
        display: "flex",
        flexDirection: "column",

        width: "20%",
        margin: " 20% auto",
        padding: "20px",
        border: "0.2px solid rgba(0, 0, 0, 0.12)",
        borderRadius: "5px",
      }}
    >
      <TextField
        id="standard-basic"
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        id="standard-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        style={{ marginTop: "35px" }}
      >
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
