import "./styles.css";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";

export default function App() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>useState Example 3b</h1>
      <h2> type in your first name and last name</h2>
      <TextField
        style={{ margin: "20px" }}
        placeholder="First Name"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <TextField
        style={{ margin: "20px" }}
        placeholder="Last Name"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <h2>Your First Name is :{name.firstName}</h2>
      <h2>Your Last Name is :{name.lastName}</h2>
      <h2>{JSON.stringify(name)}</h2>
    </div>
  );
}
