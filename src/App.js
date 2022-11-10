import React, { useState } from "react";
import RichTextEditor from "./components/RichTextEditor";
import "./App.css";

const App = () => {
  const [value, setValue] = useState("");
  const getValue = (value) => {
    setValue(value);
  };
  return (
    <div className="row">
      <div className="col-md-6" style={{ margin: "auto", marginTop: "50px" }}>
        <div style={{ textAlign: "center" }}>
          <h3>Rich Text Editor</h3>
        </div>
        <RichTextEditor initialValue="" getValue={getValue} />
        <br />
        <div>{value}</div>
      </div>
    </div>
  );
};

export default App;