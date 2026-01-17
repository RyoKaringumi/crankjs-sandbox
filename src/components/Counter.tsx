/** @jsxImportSource @b9g/crank */

import type { Context } from "@b9g/crank";

export default function *Counter(this: Context){
	let count = 0;

	while (true){
		yield (
			<button onClick={()=>{
				count++;
				this.refresh();
			}}>
				Count: {count}
			</button>
		)
	}
}
