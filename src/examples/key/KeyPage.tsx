/** @jsxImportSource @b9g/crank */

import ArrayKey from "./ArrayKey";
import { FormReset } from "./FormReset";

export default function KeyPage(){
	return (
		<div>
			KeyPage
			<br/>
			Keyが存在するかや、ReactのKeyとの実装の違いを見るためのページです。
			<ArrayKey/>

			<br/>
			<FormReset/>
			
		</div>
	);
}