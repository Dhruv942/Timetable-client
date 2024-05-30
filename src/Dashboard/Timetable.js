import React, { useState, useEffect } from "react";
import axios from "axios";

const Timetable = () => {
  const [timetable, setTimetable] = useState([]);
  const [semester, setSemester] = useState("");
  const [division, setDivision] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTimetable();
  }, []);

  const fetchTimetable = () => {
    axios
      .get("http://localhost:9003/timetable")
      .then((response) => setTimetable(response.data))
      .catch((error) => console.error("Error fetching timetable:", error));
  };

  const generateTimetable = () => {
    setLoading(true);
    axios
      .post("http://localhost:9003/generateTimetable", { semester, division })
      .then((response) => {
        console.log(response.data.message);
        fetchTimetable();
      })
      .catch((error) => console.error("Error generating timetable:", error))
      .finally(() => setLoading(false));
  };

  // Function to filter timetable entries based on semester and division
  const filterTimetable = (sem, div) => {
    return timetable.filter(
      (entry) => entry.semester === sem && entry.division === div
    );
  };

  // Function to render a table for a given semester and division combination
  const renderTable = (sem, div) => {
    const filteredTimetable = filterTimetable(sem, div);
    return (
      <div key={`${sem}-${div}`}>
        <h2>{`Semester: ${sem}, Division: ${div}`}</h2>
        <table className="min-w-full divide-y divide-gray-200">
          {/* Table header */}
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Day
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Start Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                End Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Subject Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Faculty Name
              </th>
            </tr>
          </thead>
          {/* Table body */}
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredTimetable.map((entry, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{entry.day}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {entry.startTime}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{entry.endTime}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {entry.subjectName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {entry.facultyName}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="bg-slate-400">
      <div className="max-w-4xl mx-auto mt-8">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Semester
          </label>
          <input
            type="text"
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <label className="block text-gray-700 text-sm font-bold mb-2 mt-4">
            Division
          </label>
          <input
            type="text"
            value={division}
            onChange={(e) => setDivision(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <button
            onClick={generateTimetable}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            disabled={loading}
          >
            {loading ? "Generating..." : "Generate Timetable"}
          </button>
        </div>
        {/* Render tables for each semester and division combination */}
        {timetable &&
          Array.from(
            new Set(
              timetable.map((entry) => `${entry.semester}-${entry.division}`)
            )
          ).map((combo) => {
            const [sem, div] = combo.split("-");
            return renderTable(sem, div);
          })}
      </div>
    </div>
  );
};

export default Timetable;
