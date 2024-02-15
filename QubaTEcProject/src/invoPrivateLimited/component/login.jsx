import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import logo from "../../assets/login.jpg";
import { useDispatch } from "react-redux";
import { login } from "../userSlice";
import { useNavigate } from "react-router-dom";

export default function UserLogin() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const SubmitForm = async (e) => {
    e.preventDefault();
    const result = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    if (result.ok) {
      let data = await result.json();
      let username = data.username;
      let token = data.token;
      localStorage.setItem("token", token);
      localStorage.setItem("username", username);
      dispatch(login(data));
    }
    navigate("/");
  };

  return (
    <div className="flex justify-center">
      <div className="">
        <img src={logo} alt="" className="h-40 rounded-full ml-10" />
        <p className="text-2xl font-serif py-4">Thankyou for visit here</p>

        <form
          className="card grid grdi-cols-1 gap-10 w-52 text-textColor"
          onSubmit={SubmitForm}
        >
          <InputText
            type="text"
            name="name"
            required
            placeholder="Enter Name"
            onChange={(e) => setUsername(e.target.value)}
            tooltip="Enter your name"
            tooltipOptions={{ position: "top" }}
            className="  ring-1 mt-1 ring-inset ring-neutral-300 border w-full py-2 outline-none rounded-md pl-2 "
          />
          <InputText
            type="password"
            name="password"
            required
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            tooltip="Enter your password"
            tooltipOptions={{ position: "top" }}
            className="ring-1 mt-1 ring-inset ring-neutral-300 border  py-2 outline-none rounded-md pl-2 "
          />
          <button
            onSubmit="submit"
            className="bg-indigo-400 px-6 rounded-md py-1 text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
