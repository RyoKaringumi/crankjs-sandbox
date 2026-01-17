/** @jsxImportSource @b9g/crank */

import type { Children, Context } from "@b9g/crank";

export default function *Route(this:Context,props:{children:Children, path:string}){
	let isCurrentPage = window.location.pathname === props.path;
	const popstateListener = () => {
		if (isCurrentPage !== (window.location.pathname === props.path)) {
			isCurrentPage = !isCurrentPage;
			this.refresh();
		}
	};

	window.addEventListener("popstate", popstateListener);

	for({} of this){
		if(isCurrentPage){
			yield (<>{props.children}</>);
		}else{
			yield null;
		}
	}

	window.removeEventListener("popstate", popstateListener);
}
