/** @jsxImportSource @b9g/crank */

import AxiosPage from "./examples/axios/AxisoPage";
import Route from "./route/Route";
import Router from "./route/Router";
import Simple from "./Simple";
import SuspensePage from "./examples/suspense/SuspensePage";
import MainPage from "./MainPage";
import AsyncGeneratorPage from "./examples/async-generator/AsyncGeneratorPage";
import TimingPage from "./examples/timing/TimingPage";

export default function App() {
	const component = <Simple message="hello"/>;
	console.log(component);
	return (
		<Router>
			<Route path="/">
				<MainPage/>
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
			<Route path="/examples/async-generator">
				<AsyncGeneratorPage/>
			</Route>
			<Route path="/examples/timing">
				<TimingPage/>
			</Route>
		</Router>
	);
}
