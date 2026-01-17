/** @jsxImportSource @b9g/crank */

export default function Link(props:{to:string, children:string}) {
	function onClick(e:MouseEvent){
		e.preventDefault();
		history.pushState(null, "", props.to);
		const navEvent = new PopStateEvent("popstate");
		dispatchEvent(navEvent);
	}
	return (
		<a href={props.to} onClick={onClick}>{props.children}</a>
	);
}

