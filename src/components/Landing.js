import React from "react";
import { Link } from "react-router-dom"
export default function Landing () {
	return (
		<div>
			<h1>Hello, Welcome to friend finder!</h1>
			<Link to="/possible-friends">Let's find some Friends</Link>
		</div>
	);
}
