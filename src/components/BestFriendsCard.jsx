import React from "react";
import RemoveButton from "./RemoveButton";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Avatar from "./Avatar";


const BestFriendsCard = (props) => {
	return (
		<div className="friendcard">
			
				
				<h3 className="headTitle">
				{props.friend.name}
				</h3>
			
			
					<p className="text">Пол: {getGender[props.gender]}</p>
			
					<p className="text">
						Адрес: {props.friend.from}
					</p>
				
				
					<p className="text">Телефон: {props.friend.phone}</p>
					<Avatar image={props.friend.img} />
                    <RemoveButton  onClick={() => props.deleteFromFriends(props.friend)} label={""}/>
      
			</div>
		
	);
};
  
function mapStateToProps(state) {
	return {
	  friends: this.state
	};
  }
  function matchDispatchToProps(dispatch) {
	return bindActionCreators({ deleteFromFriends }, dispatch);
  }
  
  export default connect(mapStateToProps, matchDispatchToProps)(BestFriendsCard);



  
  const getGender = {
	male: "Мужской",
	female: "Женский",
  };

 
  export const deleteFromFriends = (friend) => {
    return {
      type: "REMOVE_FROM_FRIENDS",
      payload: friend
    };
  };
 