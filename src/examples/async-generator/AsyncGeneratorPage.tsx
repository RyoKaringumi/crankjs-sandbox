/** @jsxImportSource @b9g/crank */

import type { Context } from "@b9g/crank";
import { Suspense } from "@b9g/crank/async";

async function *AsyncGeneratorExample(this: Context) {
	let currentId = 1;
	for({} of this){
		const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${currentId}`);
		const post = await res.json();
		yield (
			<div>
				<h2>{post.title}</h2>
				<p>{post.body}</p>
				<button onClick={() => {
					currentId = currentId < 10 ? currentId + 1 : 1;
					this.refresh();
				}}>Next Post</button>
			</div>
		);
	}
}

export default function AsyncGeneratorPage() {
	return (
		<div>
			Async Generator Page

			<Suspense fallback={<div>Loading...</div>}>
				<AsyncGeneratorExample/>
			</Suspense>
		</div>
	);
}
