import React from "react";
import { Sticks } from "./stick.js";
import { Lights } from "./light.js";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

export function Home() {
	return (
		<div>
			<Sticks />
			<Lights />
		</div>
	);
}