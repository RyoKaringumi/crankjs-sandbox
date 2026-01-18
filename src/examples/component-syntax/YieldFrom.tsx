/* @jsxImportSource @b9g/crank */

import { Context } from "@b9g/crank";

type Item = {
	name: string;
	description: string;
}

function *renderItem(context:Context<Item>){
	for(const item of context){
		yield (
			<li>
				<strong>{item.name}</strong>: {item.description}
			</li>
		);
	}
}

function *ItemComponent(this:Context<Item>,_:Item){
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
