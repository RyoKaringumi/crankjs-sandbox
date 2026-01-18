/** @jsxImportSource @b9g/crank */

/*
<Component key={dataId} />とすることで、dataIdを更新すると、Componentの状態をリセットするテクニックがReactにあります。

これが、Crankでも動作するかチェックするためのサンプルです

試した結果、まったく同じ仕様で動作する事が確認出来たため、keyはReactと同じ仕様であると言えます。
*/

import type { Context } from "@b9g/crank";

export function *Form(this:Context<typeof Form>){
	for({} of this){
		yield (
			<form>
				<label>
					Name:
					<input type="text" name="name" defaultValue="John Doe"/>
				</label>
				<br/>
			</form>
		);
	}
}

export function *FormReset(this:Context){
	let counter = 0;
	for({} of this){
		yield (
			<div>
				<Form key={counter}/>
				<button onClick={()=>{
					counter++;
					this.refresh();
				}}>Re-render Form {counter}</button>
			</div>
		);
	}
}