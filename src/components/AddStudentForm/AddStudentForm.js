import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";
import { formatDistance, subDays } from "date-fns";
import Button from "@material-ui/core/Button";

const AddStudentForm = ({ open, handleClose, onAddStudent }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [grade, setGrade] = useState(0);
  console.log("OPEN", open);

  const onSubmit = (e) => {
    console.log("HERE");
    e.preventDefault();
    onAddStudent({ firstName, lastName, grade });
    handleClose();
  };
  return (
    <form onSubmit={onSubmit}>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="fistName"
            label="First Name"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="lastName"
            label="Last Name"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="grade"
            label="Grade"
            type="text"
            grade={grade}
            onChange={(e) => setGrade(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={onSubmit} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </form>
  );
};

export default AddStudentForm;
