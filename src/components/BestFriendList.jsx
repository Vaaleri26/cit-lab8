
import React, { Component } from "react";
import { connect } from "react-redux";
import BestFriendsCard from "./BestFriendsCard";

class BestFriendList extends Component {
  render() {
    return (
      <>
          
        
        {this.props.friends.map((user) => (
          <BestFriendsCard friend={user} />
        ))}
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    friends: state.friends
  };
}

export default connect(mapStateToProps)(BestFriendList);