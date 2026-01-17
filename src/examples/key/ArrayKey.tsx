/** @jsxImportSource @b9g/crank */

import type { Context } from "@b9g/crank";

type ListItemType = {
	id: string;
	name: string;
}

function *Item(this:Context<typeof Item>, props:{item:ListItemType, items:ListItemType[],onChange:()=>void}){
	console.log("Rendering Item", props.item.id);
	const randomId = Math.random().toString(36).substring(2, 7);
	for(props of this){
		console.log("Re-Rendering Item", props.item.id);
		const {item, items, onChange} = props;
		yield (
			<li key={item.id}><button  onClick={()=>{
				// 下の要素と入れかえる
				const index = items.findIndex(i=>i.id === item.id);
				if(index < items.length - 1){
					const temp = items[index + 1];
					items[index + 1] = items[index];
					items[index] = temp;
				}
				// 再レンダリング
				// Reactと違い、mutableな操作でも問題なく、refreshを呼び出せばよい
				onChange();
				console.log("Swapped", item.id);
			}}>Swap with next
			
			</button>{item.name} (ID: {randomId})</li>
		);
	}
}

export default function *ArrayKey(this:Context){
	const items: ListItemType[] = [
		{id: "a", name: "Item A"},
		{id: "b", name: "Item B"},
		{id: "c", name: "Item C"},
	];
	const onChange = ()=>{this.refresh();};
	for({} of this){
		yield (
			<div>
			ArrayKey Example
			<br/>
			配列をKeyにした場合の挙動を確認するためのコンポーネントです。
			<ul>
			{items.map(item=>(
				<Item key={item.id} item={item} items={items} onChange={onChange}/>
			))}
			</ul>
			</div>
		);
	}
}
