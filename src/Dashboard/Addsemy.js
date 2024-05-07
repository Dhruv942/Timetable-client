import React, { useState, useEffect } from "react";
import axios from "axios";

const Addsemy = () => {
  const [semester, setSemester] = useState("");
  const [academicYear, setAcademicYear] = useState("");
  const [semesterdata, setSemesterData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:9002/sem");
        setSemesterData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching semester data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:9002/addsemester", {
        semester,
        academicYear,
      });
      const response = await axios.get("http://localhost:9002/sem");
      setSemesterData(response.data);

      console.log("Semester added successfully");
    } catch (error) {
      console.error("Error adding semester:", error);
    }
  };

  return (
    <div className="bg-slate-500">
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="semester"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Semester:
          </label>
          <input
            type="text"
            id="semester"
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="academicYear"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Academic Year:
          </label>
          <input
            type="text"
            id="academicYear"
            value={academicYear}
            onChange={(e) => setAcademicYear(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>

      <div className="max-w-4xl mx-auto mt-8">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Semester
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Academic Year
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {semesterdata.map((semester, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {semester.semester}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {semester.academicYear}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Addsemy;
