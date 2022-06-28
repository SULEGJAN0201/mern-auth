import "./App.css";
import { useState } from "react";
import axios from "axios";
function App() {
  const [userData, setUserData] = useState({});
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    console.log(userData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const response = axios.post("http://localhost:4000/auth/signup", userData);
  };
  return (
    <div className="App">
      <form action="" onSubmit={handleSubmit} onChange={handleChange}>
        <input type="text" placeholder="username" name="userName" />
        <br />
        <br />
        <input type="password" placeholder="password" name="password" />
        <br />
        <br />
        <button type="submit">signup</button>
        <br />
      </form>
    </div>
  );
}

export default App;
