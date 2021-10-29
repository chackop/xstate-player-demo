import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Spool, Stop, Play } from "./components/player";

function App() {
  return (
    <div className="app">
      <div className="controls">
        <Spool role="backward" disabled active onClick={} />

        <Stop disabled active onClick={} />

        <Play disabled active onClick={} />

        <Spool role="forward" disabled active onClick={} />
      </div>
      <div className="state">{}</div>
      <div className="tape-position">{}</div>
    </div>
  );
}

export default App;
