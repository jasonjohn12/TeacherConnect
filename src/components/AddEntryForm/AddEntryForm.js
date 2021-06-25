import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { formatDistance, subDays } from "date-fns";
import Button from "@material-ui/core/Button";

const AddEntryForm = ({
  showEntry,
  handleCloseEntry,
  onAddEntry,
  selectedStudent,
}) => {
  const [note, setNote] = useState("");
  const [spokeToParents, setSpokeToParents] = useState(false);

  console.log("spoke to parents", spokeToParents);
  const handleChange = (event) => {
    setSpokeToParents(!spokeToParents);
  };
  const onSubmit = (e) => {
    console.log("HERE");
    e.preventDefault();
    onAddEntry();
    handleCloseEntry();
  };
  return (
    <form onSubmit={onSubmit}>
      <Dialog
        style={{ display: "flex", flexDirection: "column" }}
        open={onAddEntry}
        onClose={handleCloseEntry}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          {selectedStudent.firstName} {selectedStudent.lastName}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>Create New Entry</DialogContentText>
          <TextareaAutosize
            aria-label="minimum height"
            rowsMin={6}
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />{" "}
          <FormControlLabel
            control={
              <Checkbox
                checked={spokeToParents}
                onChange={handleChange}
                name="spoke"
                color="primary"
              />
            }
            label="Spoke To Parents"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEntry} color="primary">
            Cancel
          </Button>
          <Button onClick={onSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </form>
  );
};

export default AddEntryForm;
