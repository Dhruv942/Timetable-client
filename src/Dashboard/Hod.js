import React from "react";

import "../css/Hod.css";
const Hod = () => {
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
                  href="#"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span class="flex-1 ms-3 whitespace-nowrap">Add Faculty</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span class="flex-1 ms-3 whitespace-nowrap">
                    Add Subjects
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span class="flex-1 ms-3 whitespace-nowrap">Time Table</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
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
              <p className="text-lg">500</p>
            </div>
            <div className="bg-blue-200 p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">BE Students</h2>
              <p className="text-lg">300</p>
            </div>
            <div className="bg-green-200 p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">ME Students</h2>
              <p className="text-lg">200</p>
            </div>
          </div>
          <div className="mt-60"></div>
        </div>
      </div>
    </div>
  );
};

export default Hod;
