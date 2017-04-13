import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/Landing"
import possibleFriends from "./components/possibleFriends"
import friend from "./components/friend"

export default (
	<Switch>
		<Route
			component={ Landing }
			exact
			path="/"
		/>
		<Route
			component={ possibleFriends }
			exact
			path="/possible-friends"
		/>
		<Route
			component={ friend }
			exact
			path="/possible-friends/:friendId"
		/>
	</Switch>
)
