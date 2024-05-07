import React, { useState } from "react";
import axios from "axios";

import "../css/Hod.css";
const Hod = () => {
  const [beStudents, setBeStudents] = useState(0);
  const [meStudents, setMeStudents] = useState(0);
  const [totalStudents, setTotalStudents] = useState(0);

  const handleSave = () => {
    const total = beStudents + meStudents;
    setTotalStudents(total);
    console.log("Total Students:", total);

    if (total && beStudents && meStudents) {
      axios
        .post("http://localhost:9000/save", { beStudents, meStudents })
        .then((res) => {
          alert(res.data.message);
        })
        .catch((err) => {
          console.error("Error saving student data:", err);
          alert("Error saving student data");
        });
    } else {
      alert("Invalid input");
    }
  };

  return (
    <div>
      <div>
        <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <div class="px-3 py-3 lg:px-5 lg:pl-3">
            <div class="flex items-center justify-between">
              <div class="flex items-center justify-start rtl:justify-end">
                <a href="https://flowbite.com" class="flex ms-2 md:me-24">
                  <img
                    src="https://flowbite.com/docs/images/logo.svg"
                    class="h-8 me-3"
                    alt="FlowBite Logo"
                  />
                  <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                    Timoo!!
                  </span>
                </a>
              </div>
            </div>
          </div>
        </nav>

        <aside
          id="logo-sidebar"
          class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
          aria-label="Sidebar"
        >
          <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
            <ul class="space-y-2 font-medium">
              <li>
                <a
                  href="#"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span class="ms-3">Dashboard</span>
                </a>
              </li>

              <li>
                <a
                  href="/addf"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span class="flex-1 ms-3 whitespace-nowrap">Add Faculty</span>
                </a>
              </li>
              <li>
                <a
                  href="/adds"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span class="flex-1 ms-3 whitespace-nowrap">
                    Add Subjects
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/addsy"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span class="flex-1 ms-3 whitespace-nowrap">
                    Add sem and year
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/sec"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span class="flex-1 ms-3 whitespace-nowrap">
                    Holiday List
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span class="flex-1 ms-3 whitespace-nowrap">ds</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>

        <div class="p-4 sm:ml-64 mt-20">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-200 p-4 rounded-lg shadow-md w-">
              <h2 className="text-xl font-semibold mb-2">Total Students</h2>
              <p className="text-lg">{totalStudents}</p>
            </div>
            <div className="bg-blue-200 p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">BE Students</h2>
              <p className="text-lg">{beStudents}</p>
            </div>
            <div className="bg-green-200 p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">ME Students</h2>
              <p className="text-lg">{meStudents}</p>
            </div>
          </div>
          <div className="mt-32">
            <label>Total Students:</label>
            <label className="mt-6">BEstudents:</label>
            <input
              type="number"
              value={beStudents}
              onChange={(e) => setBeStudents(parseInt(e.target.value))}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            />
            <label className="ml-6">MEstudents:</label>
            <input
              type="number"
              value={meStudents}
              onChange={(e) => setMeStudents(parseInt(e.target.value))}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            />
            <button
              onClick={handleSave}
              className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hod;
