import { InsertDriveFile } from "@material-ui/icons";
import React from "react";
import InsertDriveFile from "@material-ui/icons/InsertDriveFile";
import "../css/FileItem.css";

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const FileItem = ({ id, caption, timestamp, fileUrl, size }) => {
  const fileDate = `${timestamp?.toDate().getDate()} ${
    monthNames[(timestamp?.toDate().getMonth() = 1)]
  } ${timestamp?.toDate().getFullYear()}`;

  const getReadableFileSizeString = (fileSizeInBytes) => {
    let i = -1;
    const byteUnits = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    do {
      fileSizeInBytes = fileSizeInBytes / 1024;
      i++;
    } while (fileSizeInBytes > 1024);

    return Math.max(fileSizeInBytes, 0.1).toFixed(1) + byteUnits[i];
  };

  return (
    <div className="fileItem">
      <a href={fileUrl} target="_blank" download>
        <div className="fileItem--left">
          <InsertDriveFile />
          <p>{caption}</p>
        </div>
        <div className="fileItem--right">
          <p>{fileDate}</p>
          <p>{getReadableFileSizeString(size)}</p>
        </div>
      </a>
    </div>
  );
};

export default FileItem;
