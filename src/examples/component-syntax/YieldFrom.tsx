/* @jsxImportSource @b9g/crank */

import { Context } from "@b9g/crank";

type Item = {
	name: string;
	description: string;
}

function *renderItem(context:Context<Item>){
	// contextは、本来のコンポーネントのthisです。
	// {} of thisでは、{}に実はpropsが入っております。
	// なので、今回はそれを利用して、propとして渡されるitemをitem of contextとすることで受け取ります
	for(const item of context){
		yield (
			<li>
				<strong>{item.name}</strong>: {item.description}
			</li>
		);
	}
}

function *ItemComponent(this:Context<Item>,_:Item){
	// yield* は、その渡されたジェネレータの全てのyieldを自分のyieldとして扱う
	// つまり、
	// for(const elements of renderItem(this)){
	//   yield elements
	// }
	// と同じ意味になる
	// つまり、この記述だとrenderItemでレンダリングを委託したような実装になります
	// この利点では、このyield*前後で、そのコンポーネントがマウント、アンマウントされた時の処理を記述出来ます
	// 注意点として、propsの変化の場合、{} of thisの部分のみ再実行されるため、
	// ここで記述したマウントとアンマウントは本当にコンポーネントが登場した時、破棄されたときに処理され、propの変化には影響されません。
	yield* renderItem(this);
}

export default function YieldFromExample(){
	return (
		<div>
			<ItemComponent name="Item 1" description="This is the first item."/>
			<ItemComponent name="Item 2" description="This is the second item."/>
			<ItemComponent name="Item 3" description="This is the third item."/>
		</div>
	);
}
