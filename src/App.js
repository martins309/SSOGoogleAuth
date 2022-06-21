import './App.css';
import { useEffect, useState } from 'react'
import jwt_decode from "jwt-decode"

function App() {
  const [ user, setUser ] = useState({})

  function handleCallBackResponse(response) {
    console.log("Encoded JWT ID Token:" + response.credential)
    const userObject = jwt_decode(response.credential)
    console.log(userObject)
    setUser(userObject)
    document.getElementById("signInDiv").hidden = true
  }

  function handleSignOut(event){
    setUser({})
    document.getElementById("signInDiv").hidden = false
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "513848352300-9c58fncsh4hgavgjcknn9h86jb20jve1.apps.googleusercontent.com",
      callback: handleCallBackResponse
    })

    google.accounts.id.renderButton(
       document.getElementById("signInDiv"),
       { theme: "outline", size: "large"}
    )


  },[])

//if there is no user then we want to show the sign in button if not we want the sign out
  return (
    <div className="App">
      <div id="signInDiv"></div>
      {
        Object.keys(user).length != 0 &&
      <button onClick= { (e) => handleSignOut(e)}>Sign Out</button> 
      && 
        <h3> Welcome {user.name}, Nice to see you</h3>
      
      }
      
    </div>
  );
}

export default App;
