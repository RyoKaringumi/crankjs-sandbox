/** @jsxImportSource @b9g/crank */

import ArrayKey from "./ArrayKey";

export default function KeyPage(){
	return (
		<div>
			KeyPage
			<br/>
			Keyが存在するかや、ReactのKeyとの実装の違いを見るためのページです。
			<ArrayKey/>
		</div>
	);
}