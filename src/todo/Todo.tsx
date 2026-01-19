/** @jsxImportSource @b9g/crank */

import type { Context } from "@b9g/crank";

type ToDoItem = {
	text: string;
	completed: boolean;
}

export default function *ToDo(this: Context){
	const items:ToDoItem[] = [];
	for({} of this){
		console.log("Rendering ToDo",items);
		yield (
			<div>
				<form onSubmit={(e)=>{
					e.preventDefault();
					const form = e.target as HTMLFormElement;
					const input = form.elements.namedItem("todoInput") as HTMLInputElement;
					const text = input.value.trim();
					if(text){
						// refreshを利用することで、このコンポーネントを再レンダリングできる
						this.refresh(()=>{
							items.push({text, completed:false});
							input.value = "";
						});
					}
				}}>
					<input name="todoInput" type="text" placeholder="New todo"/>
					<button type="submit">Add</button>
				</form>
				<hr/>
				<h3>Todo List</h3>
				{items.map(item=>(
					<div key={item.text}>
						<input type="checkbox" checked={item.completed} onChange={(e)=>{
							// チェックボックスの状態が変わったときに、項目のcompletedプロパティを更新する
							// refreshを利用して再レンダリングする
							// なお、Reactと違い、mutableな操作でも問題なく、refreshを呼び出せばよい
							this.refresh(()=>{
								item.completed = e.target.checked;	
							});
						}}/>
						<span>{item.text}</span>
					</div>
				))}
			</div>
		)
	}
}
