import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { readUserData, writeUserData } from "./api/apis";
import { useEffect, useState } from "react";

export interface UserType {
  userId: string;
  username: string;
  email: string;
}

function App() {
  const [user, setUser] = useState<UserType>();

  const onClickTestButtons = async () => {
    const userId = "user_01";
    try {
      const userData = await readUserData(userId);
      setUser(userData)
      console.log(userData)
    } catch (error) {
      console.error(error);
    }
  };

  // const onClickTestButtons = () => {
  //   try {
  //     const userId = "user_01";
  //     const name = "thdud";
  //     const email = "thdud@aaa.aaa";
  //     writeUserData(userId, name, email);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{user?.username}</h1>
      <button
        className="text-3xl font-bold p-2 border"
        onClick={onClickTestButtons}
      >
        TEST 클릭
      </button>
    </>
  );
}

export default App;
