const app = new Vue({
	el: '#app',
	data: {
		title: 'Todo List',
		desc: 'Todo app built in Vue.js',
		newTodo: '',
		todos: [],
	},
	methods: {
		addTodo() {
			this.todos.push({
				title: this.newTodo,
				done: false
			})
			this.newTodo = ''; // clean input value
		},
		removeTodo(todo) {
			const todoIndex = this.todos.indexOf(todo);
			this.todos.splice(todoIndex, 1);
		}
	}
})
