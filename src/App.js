import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react'

function App() {

  function handleCallBackResponse(response) {
    console.log("Encoded JWT ID Token:" + response.credential)
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


  return (
    <div className="App">
      <div id="signInDiv"></div>
    </div>
  );
}

export default App;
