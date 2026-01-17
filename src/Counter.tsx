/** @jsxImportSource @b9g/crank */

export default function *Counter(this: any,props: unknown){
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
