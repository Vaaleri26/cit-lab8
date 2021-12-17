import React from "react";
import { connect } from "react-redux";
import UserCard from "./UserCard";


class UsersList extends React.Component {
  state = {
    userInfo: undefined
  };

  getUsers = async () => {
	let repsonse = await fetch("https://randomuser.me/api/?results=10", {
		method: "GET"
	  });
	  const data = await repsonse.json();

    this.setState({
      userInfo: data.results
    });
  };

  componentDidMount() {
    this.getUsers();
  }

  render() {
    return (
		<>
      <div>
        
          <h1>Добавить в друзья?</h1>
        </div>

        {this.state.userInfo &&
          this.state.userInfo.map(u => <UserCard user={u} />)}
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state
  };
}

export default connect(mapStateToProps)(UsersList);