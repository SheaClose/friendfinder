import React from "react";
import friends from "../friends";
import {connect} from "react-redux";

function possibleFriends (props) {

	const friendElements = props.friends.map(friend => (
		<li	key={ friend._id }>
			<span onClick={ () => props.history.push( `/possible-friends/${friend._id}` ) }>{ friend.name }</span>
		</li>
	));

	return (
		<div>
			<h1>Why Can't We Be Friends!</h1>
				{ friendElements }
		</div>
	);
}

export default connect( state => state )( possibleFriends )
