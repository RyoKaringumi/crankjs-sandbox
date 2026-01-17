/** @jsxImportSource @b9g/crank */

export default function *Timer(this){
	let seconds = 0;
	
	const interval = setInterval(()=>{
		seconds++;
		this.refresh();
	}, 1000);

	for({} of this){
		yield <div>Seconds elapsed: {seconds}</div>;
	}
	clearInterval(interval);
}
