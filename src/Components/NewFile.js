import { Add } from "@material-ui/icons";
import React from "react";
import "../css/NewFile.css";

const NewFile = () => {
  return (
    <div className="newFile">
      <div className="newFile__container">
        <Add />
        <p>New</p>
      </div>
    </div>
  );
};

export default NewFile;
