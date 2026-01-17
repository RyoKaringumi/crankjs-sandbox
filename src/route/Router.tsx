/** @jsxImportSource @b9g/crank */

import type { Children, Context } from "@b9g/crank";

export default function *Router(this:Context,props:{children:Children}){
	
	const popstateListener = () => {
		console.log("popstate event detected in Router");
		this.refresh();
	};

	window.addEventListener("popstate", popstateListener);

	for({} of this){
		yield (<>{props.children}</>);
	}

	window.removeEventListener("popstate", popstateListener);
}
