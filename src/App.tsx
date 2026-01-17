/** @jsxImportSource @b9g/crank */

import Counter from "./Counter";
import Simple from "./Simple";
import Timer from "./Timer";
import ToDo from "./todo/Todo";

export default function App() {
	const component = <Simple message="hello"/>;
	console.log(component);
	return (
		<div>
			aaa
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
		</div>
	);
}
