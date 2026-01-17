/** @jsxImportSource @b9g/crank */

import { Suspense } from "@b9g/crank/async";
import AsyncRequestExample from "./AsyncRequestExample";

export default function AxiosPage() {
	return (
		<div>
			Axios Page
			<Suspense fallback={<div>Loading...</div>}>
				<AsyncRequestExample/>
			</Suspense>
		</div>
	);
}
