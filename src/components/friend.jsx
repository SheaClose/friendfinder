import React, { Component } from "react";
import friends from "../friends";
import { connect } from "react-redux";

class friend extends Component {
	render() {
		let { activeFriend } = this.props
		return (
			<div>
				<p><img src={ activeFriend.picture } alt="/"/></p>
				<p>{ activeFriend.name }</p>
				<p>{ activeFriend.company }</p>
				<p>{ activeFriend.email }</p>
				<p>{ activeFriend.phone }</p>
				<p>{ activeFriend.address }</p>
				<p>{ activeFriend.age }</p>
			</div>
		);
		// return null;
	}

}

function mapStateToProps ( state, ownProps ){
	return {
		activeFriend: state.friends.find(friend => friend._id === ownProps.match.params.friendId)
	}
}

export default connect(mapStateToProps)(friend);
