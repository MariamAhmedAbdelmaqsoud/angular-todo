import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  imports: [FormsModule],
  templateUrl: './todo-form.html',
  styleUrl: './todo-form.scss',
})
export class TodoForm {

  @Output() newTask = new EventEmitter<string>();
  task: string = "";
  add() {
    if (this.task.trim()) {
      this.newTask.emit(this.task);
      this.task=""
    }

    console.log(this.task);

    
  }
}
