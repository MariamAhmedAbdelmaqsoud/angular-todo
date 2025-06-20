import { Component } from '@angular/core';
import { TodoForm } from '../todo-form/todo-form';
import { Todolist } from '../todolist/todolist';
export interface Todoarr {
  id: number;
  text: string;
  completed: boolean;
}
@Component({
  selector: 'app-todo',
  imports: [TodoForm, Todolist],
  templateUrl: './todo.html',
  styleUrl: './todo.scss',
})
export class Todo {
  todos: Todoarr[] = [];
  addTodo(task: string) {
    const newTodo: Todoarr = {
      id: Date.now(),
      text: task,
      completed: false,
    };
    this.todos.push(newTodo);
    console.log(this.todos);
    
  }
  deleteTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
  toggleComplete(id: number) {
    const todo = this.todos.find(t => t.id === id);
    if (todo) todo.completed = !todo.completed;
  }

  // receiveData(event: string) {
  //   console.log(event);
  // }
}
