/** @jsxImportSource @b9g/crank */

import { Suspense } from "@b9g/crank/async";
import waitForSeconds from "../../util/waitForSeconds";

async function WaitComponent(props:{seconds:number}) {
	await waitForSeconds(props.seconds);
	return (
		<div>Waited for {props.seconds} seconds.</div>
	);
}

export default function SuspensePage() {
	return (
		<div>
			Suspense Page
			<Suspense fallback={<div>Waiting...</div>}>
				<WaitComponent seconds={3}/>
			</Suspense>
		</div>
	);
}