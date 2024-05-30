import React, { useState } from "react";
import axios from "axios";

const AddSubject = () => {
  const [subjectName, setSubjectName] = useState("");
  const [subjectCode, setSubjectCode] = useState("");
  const [semester, setSemester] = useState("");
  const [division, setDivision] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!subjectName || !subjectCode || !semester || !division) {
      setError("All fields are required");
      return;
    }

    try {
      await axios.post("http://localhost:9003/addSubject", {
        subjectName,
        subjectCode,
        semester,
        division,
      });
      alert("Subject added successfully");
    } catch (error) {
      console.error("Error adding subject:", error);
      setError("Error adding subject");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Subject Name"
          value={subjectName}
          onChange={(e) => setSubjectName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Subject Code"
          value={subjectCode}
          onChange={(e) => setSubjectCode(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Semester"
          value={semester}
          onChange={(e) => setSemester(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Division"
          value={division}
          onChange={(e) => setDivision(e.target.value)}
          required
        />
        <button type="submit">Add Subject</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default AddSubject;
