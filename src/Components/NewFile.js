import React, { useState } from "react";
import firebase from "firebase";
import { Add } from "@material-ui/icons";
import { db, storage } from "../firebase";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import "../css/NewFile.css";

function getModalStyle() {
  return {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: "#ffffff",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 3, 4),
  },
}));

const NewFile = () => {
  const classes = useStyles();

  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    setUploading(true);

    storage
      .ref(`files/${file.name}`)
      .put(file)
      .then((snapshot) => {
        console.log(snapshot);

        storage
          .ref("files")
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("myFiles").add({
              caption: file.name,
              fileUrl: url,
              size: snapshot._delegate.bytesTransferred,
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            });

            setUploading(false);
            setOpen(false);
            setFile(null);
          });
      });
  };

  return (
    <div className="newFile">
      <div className="newFile__container" onClick={handleOpen}>
        <Add fontSize="large" />
        <p>New</p>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description">
        <div style={modalStyle} className={classes.paper}>
          <p>Select files you want to upload!</p>
          {uploading ? (
            <p>Uploading...</p>
          ) : (
            <>
              <input type="file" onChange={handleChange} />
              <button onClick={handleUpload}>Upload</button>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default NewFile;
