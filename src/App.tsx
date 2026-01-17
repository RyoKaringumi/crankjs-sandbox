/** @jsxImportSource @b9g/crank */

import AxiosPage from "./examples/axios/AxisoPage";
import Counter from "./Counter";
import Link from "./route/Link";
import Route from "./route/Route";
import Router from "./route/Router";
import Simple from "./Simple";
import Timer from "./Timer";
import ToDo from "./todo/Todo";
import SuspensePage from "./examples/suspense/SuspensePage";
import Clock from "./Clock";

export default function App() {
	const component = <Simple message="hello"/>;
	console.log(component);
	return (
		<Router>
			<Route path="/">
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
			</Route>
			<Route path="/other">
				<div>
					other page
				</div>
			</Route>
			<Route path="/examples/axios">
				<AxiosPage/>
			</Route>
			<Route path="/examples/suspense">
				<SuspensePage/>
			</Route>
		</Router>
	);
}
