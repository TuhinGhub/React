import React, { useState, useMemo } from 'react';

// StudentList component
const StudentList = () => {
  // Define array of student names
  const initialStudents = ["Alice", "Bob", "Charlie"];

  // State to manage student names
  const [students, setStudents] = useState(initialStudents);
  const [newStudentName, setNewStudentName] = useState("");

  // Memoize the list of student names
  const memoizedStudentList = useMemo(() => students.join(", "), [students]);

  // Function to add a new student
  const handleAddStudent = () => {
    if (newStudentName.trim() !== "") {
      setStudents(prevStudents => [...prevStudents, newStudentName.trim()]);
      setNewStudentName(""); // Clear input field after adding student
    }
  };

  return (
    <div>
      <h2>Student List</h2>
      <p>Students: {memoizedStudentList}</p>
      <input
        type="text"
        value={newStudentName}
        onChange={(e) => setNewStudentName(e.target.value)}
        placeholder="Enter new student name"
      />
      <button onClick={handleAddStudent}>Add Student</button>
    </div>
  );
};

export default StudentList;
