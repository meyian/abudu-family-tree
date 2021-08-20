import React from "react";
import "./styles.css";

import FamilyChart from "./FamilyChart";

export default function App() {
  return (
    <div className="App">
      <div>
        <h1 style={{ textAlign: "center", fontFamily: "Helvetica" }}>
          The Abudu Family Tree
        </h1>
      </div>
      <FamilyChart />
    </div>
  );
}
