import React from "react";

import { useState, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { FetchUser } from "./Reducers/Users/user.action";

import Dashboard from "./Component/Dashboard/Dashboard";

import "./App.css";

function App() {
  const Dispatch = useDispatch();

  useEffect(() => {
    Dispatch(FetchUser({}));
  }, []);

  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;
