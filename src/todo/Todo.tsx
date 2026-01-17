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
					<div>
						<input type="checkbox" checked={item.completed} onChange={(e)=>{
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
