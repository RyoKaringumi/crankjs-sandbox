/** @jsxImportSource @b9g/crank */

import type { Context } from "@b9g/crank";

export default function *Clock(this:Context){

	setInterval(()=>{this.refresh();},1000);

	for({} of this){
		const now = new Date();

		yield (
			<div>
				{now.toLocaleTimeString()}
			</div>
		);

	}
}