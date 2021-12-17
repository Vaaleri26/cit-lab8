import React from "react";
import Avatar from "./Avatar";
import { connect } from "react-redux";
import AddButton from "./AddButton";
import { bindActionCreators } from "redux";


const getGender = {
	male: "Мужской",
	female: "Женский",
  };

const UserCard = (props) => {
	return (
		<div className="card">
			
				
				<h3 className="headTitle">
				{props.user.name.first} {props.user.name.first} {props.user.last}
				</h3>
			
			
					<p className="text">Пол: {getGender[props.gender]}</p>
			
					<p className="text">
						Адрес: {props.user.location.country} {props.user.location.state} {props.user.location.city}{" "}
						{props.user.location.street.name}, <span>{props.user.location.street.number}</span>
					</p>
				
					<p className="text">Email: {props.user.email}</p>
				
					<p className="text">Дата рождения: {parseDate(props.user.dob.date)}</p>
				
					<p className="text">Возраст: {props.user.dob.age} лет</p>
				
				
					<p className="text">Телефон: {props.user.phone}</p>
					<Avatar image={props.user.img} />
					<AddButton onClick={() => props.addToFriends(props.user)} label={""}/>
					
					
			</div>
		
	);
};

const parseDate = (dateStr) => {
	const date = new Date(dateStr);
  
	let day = date.getDate(),
	  month = date.getMonth();
  
	if (day < 10) {
	  day = "0" + date.getDate();
	} else if (month < 10) {
	  month = "0" + date.getMonth();
	} else {
	  day = date.getDate();
	  month = date.getMonth();
	}
  
	return `${day}/${month}/${date.getFullYear()}`;
  };
 

  export const addToFriends = (user) => {
	return {
	  type: "ADD_TO_FRIENDS",
	  payload: {
	name: user.name.title + " "+user.name.first + " " + user.name.last,
	gender:user.gender,
	location: user.location.country+" "+user.location.state+" "+user.location.street.name+" "+user.location.street.number,
	email:user.email,
	date:user.date,
		phone: user.phone,
		age: user.dob.age,
		img: user.picture.medium
	  }
	};
  };
  
  
function mapStateToProps(state) {
	return {
	  friends: this.state
	};
  }
  
  function matchDispatchToProps(dispatch) {
	return bindActionCreators({ addToFriends }, dispatch);
  }
  
  export default connect(mapStateToProps, matchDispatchToProps)(UserCard);
