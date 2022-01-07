import "./App.css";

import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

function MyComponent() {
  const [msg, setmsg] = useState("");
 
  const [list, setList] = useState([]);

  const handleUsernameChange = (e) => {
    setmsg(e.target.value);
  };
  

  const addUser = async () => {
    if (name == null || name == "") {
      alert("Empty.");
      return false;
    } 
    }

    const url = "http://localhost:4000/add-user";
    const data = {
      name: name
    
    };

    await axios.post(url, data);

    const newList = [data, ...list];
    setList(newList);

    setUsername("");
  };

  const getUser = async () => {
    const url = "http://localhost:4000/users";
    const result = await fetch(url);
    const list = await result.json();

    const newList = [...list];
    setList(newList);
  };

  useEffect(() => getUser(), []);

  return (
    <div>
      <h1>ChatApp</h1>
      <div>
        <input
          className="form-control form-control-lg mb-1"
          type="text"
          name=""
          id=""
          value={name}
          onChange={handleUsernameChange}
          placeholder="Enter msg"
        />
      </div>

      <div>
        <input
          className="btn btn-secondary w-20"
          type="button"
          name=""
          value="Send"
          onClick={addUser}
        />
      </div>

      {list.map((item, index) => (
        <div key={index} className="alert alert-secondary fs-4">
          {item.name}
        </div>
      ))}
    </div>
  );
}
