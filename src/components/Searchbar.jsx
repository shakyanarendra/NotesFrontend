import axios from "axios";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { FaDownload } from "react-icons/fa6";
// import env from
const Searchbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchStatus, setSearchStatus] = useState("");

  const user = useSelector((state) => state.user.userData);
  const userName = user.userName;

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const notes = await axios.get(
        "https://mernbackend-1-04ze.onrender.com/notes/getFiles",
        {
          params: {
            title: searchQuery,
          },
        },
      );

      if (notes.data.data.length > 0) {
        setSearchResults(notes.data.data);
        setSearchStatus("Found");
      } else {
        setSearchResults([]);
        setSearchStatus("Not-Found");
      }
    } catch (error) {
      console.log("Error Fetching Notes: ", error);
    }
  };

  const showPDF = async (files) => {
    window.open(
      `https://mernbackend-1-04ze.onrender.com/files/${files}`,
      "_blank",
      "noreferrer",
    );
  };

  return (
    <div className="flex h-heightWithoutNavbar flex-col items-center justify-start p-4">
      <div className="flex w-full items-center justify-center">
        <form
          className="w-full max-w-[700px] rounded-xl border border-black bg-[#374151] p-4"
          onSubmit={handleSearch}
        >
          <div className="flex items-center justify-between">
            <FaSearch className="text-2xl text-white" />

            <input
              type="search"
              placeholder="Search for Notes"
              className="ml-3 w-full bg-[#374151] text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            <button
              type="submit"
              className="bottom-2.5 end-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      <div className="mt-5 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {searchStatus === "Found" &&
  searchResults.length > 0 &&
  searchResults.map((notes) => (
    <div
      key={notes._id}
      className="flex w-full max-w-[320px] items-center justify-between rounded-lg border border-gray-700 bg-[#111827] px-4 py-3 text-white shadow-sm hover:shadow-md transition-shadow duration-200"
    >
      <div className="flex-1">
        <p className="text-sm font-medium truncate">
          <span className="font-semibold text-gray-300">File:</span> {notes.fileName}
        </p>
      </div>

      <button
        className="ml-3 flex h-8 w-8 items-center justify-center rounded-md border border-gray-600 bg-[#1f2937] hover:bg-[#374151] transition"
        onClick={() => showPDF(notes.files)}
      >
        <FaDownload className="text-white text-sm" />
      </button>
    </div>
  ))}


        {searchStatus === "Not-Found" && (
          <div className="mt-4 text-center text-gray-600 dark:text-gray-400">
            No Notes Found
          </div>
        )}
      </div>
    </div>
  );
};

export default Searchbar;
