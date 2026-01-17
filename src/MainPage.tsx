/** @jsxImportSource @b9g/crank */

import Clock from "./Clock";
import Counter from "./Counter";
import Link from "./route/Link";
import Simple from "./Simple";
import Timer from "./Timer";
import ToDo from "./todo/Todo";

export default function MainPage(){
	return (
		<div>
			MainPage
			<Clock/>
			{/* <Counter/> */}
			<ul>
			<li>item 1</li>
			<li>item 2</li>
			</ul>
			<Simple message="hello"/>
			<Counter/>
			<Timer/>
			<hr/>
			<ToDo/>
			<a href="/other">go to other page(a tag)</a>
			<br/>
			<Link to="/other">go to other page(Link component)</Link>
			<br/>
			<Link to="/examples/axios">go to axios page</Link>
			<br/>
			<Link to="/examples/suspense">go to suspense page</Link>
		</div>
	)
}