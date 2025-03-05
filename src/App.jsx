import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { LoginButton } from "@telegram-auth/react";
function App() {
  const [count, setCount] = useState(0);
  const handleTelegramResponse = (user) => {
    console.log(user);
    alert(
      `Logged in as ${user.first_name} ${user.last_name} (${user.id}${
        user.username ? ", @" + user.username : ""
      })`
    );
  };
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        {/* <TelegramLoginButton
          botName="Benz_infobot"
          dataOnauth={handleTelegramResponse}
        /> */}
        <LoginButton
          botUsername={"Benz_infobot"}
          onAuthCallback={(data) => {
            console.log(data);
            // call your backend here to validate the data and sign in the user
          }}
        />
      </div>
    </>
  );
}

export default App;
