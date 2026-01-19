/** @jsxImportSource @b9g/crank */

import type { Context } from "@b9g/crank";

function *Timing(this:Context<typeof Timing>,props:{name:string}){
	console.log("関数最初");

	for(props of this){
		console.log(`名前: ${props.name}`);

		yield (<div>名前: {props.name}</div>);
		yield (<div>名前の長さ: {props.name.length}</div>);

		console.log("関数ループ最後");
	}

	console.log("関数最後");
}

export default function *TimingPage(this:Context<typeof TimingPage>){
	let name = "Initial Name";
	for({} of this){
		yield (
			<div>
				<h1>Timing Example</h1>
				<Timing name={name} />
				<div>
					<input type="text" value={name} onInput={(e: InputEvent)=>{
						this.refresh(()=>{
							name = (e.target as HTMLInputElement).value;
						});
					}} />
				</div>
			</div>
		)
	}
}
