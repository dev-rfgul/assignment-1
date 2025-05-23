/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/
class Todo {
  constructor() {
    this.todos = [];
  }

  // Add a new todo to the list
  add(todo) {
    this.todos.push(todo);
  }

  // Remove a todo at a given index
  remove(indexOfTodo) {
    if (indexOfTodo < 0 || indexOfTodo >= this.todos.length) {
      return null; // Return null if the index is invalid
    }
    this.todos.splice(indexOfTodo, 1);
  }

  // Update a todo at a given index
  update(index, updatedTodo) {
    if (index < 0 || index >= this.todos.length) {
      return null; // Return null if the index is invalid
    }
    this.todos[index] = updatedTodo;
  }

  // Get all todos
  getAll() {
    return this.todos;
  }

  // Get a todo at a given index
  get(indexOfTodo) {
    if (indexOfTodo < 0 || indexOfTodo >= this.todos.length) {
      return null; // Return null for invalid index
    }
    return this.todos[indexOfTodo];
  }

  // Clear all todos
  clear() {
    this.todos = [];
  }
}

module.exports = Todo;
