import "./App.css";
import { useState } from "react";
import { useEffect } from "react";


function FetchAPI() {

  const [response, setResponse] = useState(null);
  const [userName, setUserName] = useState(null);
  console.log("whats username", userName); 

  async function getUser(username) {
    const resp = await fetch(`https://api.github.com/users/${username}`);
    return await resp.json();
  }
  
  useEffect( async () => {
    const user = await getUser(userName);
    setResponse(user);
  }, [userName]);  
  
  
  return (
    <div>

      <p>hello</p>
      <input
         value={userName}
         
        onChange={(e) => setUserName(e.target.value)} 
      ></input>

        <h1>Name : {response.username}</h1> 
        <img src={response.avatar_url}>this is the image</img> 
       <p>Location: {response.location}</p>  
    </div>
  );
}


export default FetchAPI;
