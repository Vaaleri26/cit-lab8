import "./App.css";
import React from "react";
import UserList from "./components/UserList";
import BestFriendList from "./components/BestFriendList";
import "./components/style.css";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="user">
          <UserList />
        </div>
        <div className="friend">
          <BestFriendList />
        </div>
      </div>
    );
  }
}
export default App;