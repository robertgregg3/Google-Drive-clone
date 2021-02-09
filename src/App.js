import { useState } from "react";
import FilesView from "./Components/FilesView";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import SideIcons from "./Components/SideIcons";
import logo from "./images/logo.png";
import "./css/App.css";
import { auth, provider } from "./firebase";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    if (!user) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
          console.log(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (user) {
      auth
        .signOut()
        .then(() => {
          setUser(null);
        })
        .catch((err) => alert(err.message));
    }
  };

  return (
    <div className="app">
      {user ? (
        <>
          <Header userPhoto={user.photoURL} />
          <div className="app__main">
            <Sidebar />
            <FilesView />
            <SideIcons />
          </div>
        </>
      ) : (
        <div className="app__login">
          <img src={logo} alt="Google drive" />
          <button onClick={handleLogin}>Log in to Google Drive</button>
        </div>
      )}
    </div>
  );
}

export default App;
