import { useState } from "react";
import "./App";

import AuthPage from "./AuthPage";

import ChatsPage from "./ChatsPage";

function App() {
  const[user , setUser] = useState();

  // if user is not logged in then return it to the authentication page
  if(!user){
    return <AuthPage
    onAuth={(user) => setUser(user)}
    />
  }

  else{
    return <ChatsPage
    user = {user}
    />
  }
}


export default App;