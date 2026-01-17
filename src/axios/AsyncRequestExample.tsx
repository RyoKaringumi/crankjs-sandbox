/** @jsxImportSource @b9g/crank */

import axios from "axios";

export default async function AsyncRequestExample() {
	const res = await axios.get("https://jsonplaceholder.typicode.com/posts/1");

	return (
		<div>
			<h2>{res.data.title}</h2>
			<p>{res.data.body}</p>
		</div>
	);
}
