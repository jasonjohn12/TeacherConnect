import axios from "axios";

export const getAllStudentsAsync = async (token) => {
  console.log("token", token);
  try {
    var res = await axios.get("https://localhost:5001/api/students", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("students", res.data);
    return res.data;
  } catch (error) {}
};

export const addStudentAsync = async (token, student) => {
  var student = {
    firstName: student.firstName,
    lastName: student.lastName,
    grade: student.grade,
  };
  try {
    var res = await axios.post(
      "https://localhost:5001/api/students",
      {
        firstName: student.firstName,
        lastName: student.lastName,
        grade: Number(student.grade),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("students", res.data);
    return res.data;
  } catch (error) {
    console.log("error", error);
  }
};
