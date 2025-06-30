import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [profilePreviewImage, setProfilePreviewImage] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [userBio, setUserBio] = useState("");
  const [userEmail, setuserEmail] = useState("");
  const [userName, setuserName] = useState("");
  const [userPassword, setuserPassword] = useState("");
  const [userMobile, setuserMobile] = useState("");
  const [loading, setLoading] = useState(false);

  const registerUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("userBio", userBio);
      formData.append("userEmail", userEmail);
      formData.append("userName", userName);
      formData.append("userPassword", userPassword);
      formData.append("userMobile", userMobile);
      formData.append("profileImage", profileImage);

      const result = await axios.post(
        "https://mernbackend-1-04ze.onrender.com/auth/signup",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Data: ", result);
      toast.success("User registered successfully!");
    } catch (error) {
      console.log("Failed to Register User: ", error);
      toast.error("Registration failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex w-full items-center justify-center bg-zinc-800">
      <form
        className="flex h-full w-full max-w-[420px] flex-col gap-3 bg-white p-5"
        onSubmit={registerUser}
      >
        <h1 className="text-2xl font-black">Register</h1>

        {/* -- All your input fields remain unchanged -- */}

        {/* Submit Button */}
        <button
          className="rounded-lg bg-blue-500 px-5 py-2 font-bold text-white hover:bg-blue-600 disabled:opacity-60"
          type="submit"
          disabled={loading}
        >
          {loading ? "Registering..." : "Register"}
        </button>

        {loading && (
          <p className="text-center text-sm text-gray-500">Please wait...</p>
        )}

        <div className="text-sm">
          Already have an account?{" "}
          <Link to="/login" className="font-bold text-blue-500 hover:underline">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
