import React, { useState } from "react";
import "./Dashboard.css";
import { DataGrid } from "@material-ui/data-grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Checkbox from "@material-ui/core/Checkbox";

import { formatDistance, subDays } from "date-fns";
//import Button from "@material-ui/core/Button";
import AddStudentForm from "../AddStudentForm/AddStudentForm";
import { addStudentAsync } from "../../api/student";
import AddEntryForm from "../AddEntryForm/AddEntryForm";

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "firstName", headerName: "First name", width: 150 },
  { field: "lastName", headerName: "Last name", width: 150 },
  {
    field: "grade",
    headerName: "Grade",
    type: "number",
    width: 150,
  },
];

const entryColumns = [
  //{ field: "studentId", headerName: "ID", width: 100 },
  { field: "createdAtDateUTC", headerName: "Entry Created Date", width: 200 },
  { field: "note", headerName: "Note", width: 400, editable: true },
  { field: "contacted", headerName: "Contacted", width: 150, editable: true },
  {
    field: "action",
    headerName: "Action",
    renderCell: () => <Button>Edit</Button>,
  },
];
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));
export default function Dashboard({ dispatch, students, token }) {
  console.log("students", students);
  const [showEntries, setShowEntries] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [checked, setChecked] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [showEntry, setShowEntry] = React.useState(false);

  const handleToggle = (student) => () => {
    console.log("student", student);
    setSelectedStudent((prevState) => {
      console.log("prevState", prevState);
      return prevState?.studentId === student?.studentId ? null : student;
    });
    setChecked((prevState) => {
      return prevState === student?.studentId ? [] : student?.studentId;
    });
  };

  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const listOfStudents = students?.map((student) => {
    const labelId = `checkbox-list-secondary-label-${student.studentId}`;
    return (
      <ListItem key={student.studentId} button>
        <ListItemText
          id={labelId}
          primary={`${student.firstName} ${student.lastName} - ${student.grade}`}
        />
        <ListItemSecondaryAction>
          <Checkbox
            edge="end"
            onChange={handleToggle(student)}
            checked={checked === student?.studentId}
            inputProps={{ "aria-labelledby": labelId }}
          />
        </ListItemSecondaryAction>
      </ListItem>
    );
  });

  const entryRows = selectedStudent?.entries?.map((s) => {
    console.log(
      `Age: ${formatDistance(new Date(), new Date(s.createdAtDateUTC))}`
    );

    return {
      id: s.entryId,
      contacted: s.contacted,
      note: s.note,
      createdAtDateUTC: s.createdAtDateUTC
        ? formatDistance(new Date(), new Date(s.createdAtDateUTC))
        : "No date",
    };
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenEntry = () => {
    setShowEntry(true);
  };

  const handleCloseEntry = () => {
    setShowEntry(false);
  };

  const onAddEntry = (entry) => {
    console.log("ADD ENTRY");
  };

  const onAddStudent = async (student) => {
    console.log("student", student);
    const newStudent = await addStudentAsync(token, student);

    dispatch({ type: "ADD_STUDENT", payload: { newStudent } });
  };
  return (
    // <Container

    // //style={{ height: 400, width: "100%", margin: "50px", display: "flex" }}
    // >
    <div className="dashboard">
      <div className="student__list">
        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={{ margin: "35px 0" }}
          onClick={handleClickOpen}
        >
          Add Student
        </Button>
        <Divider />
        <List component="nav" aria-label="secondary mailbox folder">
          {listOfStudents}
        </List>
      </div>
      {open && <AddStudentForm {...{ handleClose, open, onAddStudent }} />}
      {selectedStudent && (
        <div className="entry__table">
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{ margin: "35px 0" }}
            onClick={handleOpenEntry}
          >
            Add Entry
          </Button>
          <DataGrid
            // style={{ width: "50%", marginLeft: "50px", margin: "50px" }}
            rows={entryRows}
            columns={entryColumns}
            pageSize={5}
            // checkboxSelection
            onEditCellChangeCommitted={(edit) => {
              console.log("editing", edit);
            }}
            onRowSelected={(newSelection) => {
              console.log("POOP", newSelection);
            }}
          />
          {showEntry && (
            <AddEntryForm
              {...{
                handleCloseEntry,
                onAddEntry,
                showEntry,
                selectedStudent,
              }}
            />
          )}
        </div>
      )}
    </div>
    // </Container>
  );
}
