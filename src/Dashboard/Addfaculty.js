import React, { useState, useEffect } from "react";
import axios from "axios";

const Addfaculty = () => {
  const [facultyName, setFacultyName] = useState("");
  const [facultyNumber, setFacultyNumber] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [facultyData, setFacultyData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:9002/faculty");
        setFacultyData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching faculty data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:9002/addFaculty", {
        facultyName,
        facultyNumber,
        email,
        phoneNumber,
      });

      // After successful submission, fetch the updated data
      const response = await axios.get("http://localhost:9002/faculty");
      setFacultyData(response.data);

      setFacultyName("");
      setFacultyNumber("");
      setEmail("");
      setPhoneNumber("");

      console.log("Faculty added successfully");
    } catch (error) {
      console.error("Error adding faculty:", error);
    }
  };

  return (
    <div className="bg-slate-400">
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="fcname"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Faculty Name:
          </label>
          <input
            type="text"
            id="fcname"
            value={facultyName}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Name:"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="fcnumber"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Faculty Number:
          </label>
          <input
            type="number"
            id="fcnumber"
            value={facultyNumber}
            onChange={(e) => setFacultyNumber(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="fcemail"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="fcemail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="fcphone"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Phone number
          </label>
          <input
            type="String"
            id="fcphone"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Phone number"
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
                Faculty Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Faculty Number
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Phone Number
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {/* Map over the dummy faculty data to render table rows */}
            {facultyData.map((faculty, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {faculty.facultyName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {faculty.facultyNumber}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{faculty.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {faculty.phoneNumber}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Addfaculty;
