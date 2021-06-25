class Student {
  studentId: number;
  firstName: string;
  lastName: string;
  grade: number;

  /**
   *
   */
  constructor(firstName: string, lastName: string, grade: number) {
    this.studentId = Math.random();
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = grade;
  }
}

export default Student;
