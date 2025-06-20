import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todoarr } from '../todo/todo';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.html',
  styleUrls: ['./todolist.scss'],
})
export class Todolist {
  @Input() tasks: Todoarr[] = [];
  @Output() deleteTask = new EventEmitter<number>();
  @Output() toggleDone = new EventEmitter<number>();
  delete(id: number) {
    this.deleteTask.emit(id);
  }
  toggle(id: number) {
    this.toggleDone.emit(id);
  }
}
