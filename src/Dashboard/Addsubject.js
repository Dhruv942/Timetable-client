import React, { useEffect, useState } from "react";
import axios from "axios";

const Addsubject = () => {
  const [subjectName, setSubjectName] = useState("");
  const [subjectcode, setSubjectcode] = useState("");
  const [subjectdata, setSubjectData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:9002/subject");
        setSubjectData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching subject data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:9002/addsubject", {
        subjectName,
        subjectcode,
      });
      const response = await axios.get("http://localhost:9002/subject");
      setSubjectData(response.data);

      console.log("Subject added successfully");
    } catch (error) {
      console.error("Error adding subject:", error);
    }
  };
  return (
    <div className="bg-slate-500">
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="subjectName"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Subject Name:
          </label>
          <input
            type="text"
            id="subjectName"
            value={subjectName}
            onChange={(e) => setSubjectName(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="subjectCode"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Subject Code:
          </label>
          <input
            type="text"
            id="subjectCode"
            value={subjectcode}
            onChange={(e) => setSubjectcode(e.target.value)}
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
                Subject Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Subject Code
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {subjectdata.map((subject, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {subject.subjectName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {subject.subjectcode}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Addsubject;
