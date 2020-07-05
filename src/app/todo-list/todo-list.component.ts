import { Component, OnInit } from '@angular/core';
import { TodoListService } from './todo-list.service'
import { Todo } from './todo.model'
import { TodoStatusType } from './todo-status-type.enum'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoStatusType = TodoStatusType;
  private status = TodoStatusType.All;

  constructor(private todoListService: TodoListService) { }

  ngOnInit(): void {
  }

  addTodo(inputRef: HTMLInputElement): void {
    const todo: string = inputRef.value.trim();

    if (todo) {
      this.todoListService.add(todo);
      inputRef.value = "";
    }
  }

  getList(): Todo[] {
    let list: Todo[] = [];

    switch (this.status) {
      case TodoStatusType.Active:
        list = this.getRemainingList();
        break;

      case TodoStatusType.Completed:
        list = this.getCompleteList();
        break;

      default:
        list = this.todoListService.getList()
        break;
    }
    return list;
  }

  edit(todo: Todo): void {
    todo.editable = true;
  }

  update(todo: Todo, newTitle: string): void {
    if (!todo.editing) {
      return;
    }

    const title: string = newTitle.trim();

    if (title) {
      todo.setTitle(title);
      todo.editable = false;
    } else {
      const index = this.getList().indexOf(todo);
      if (index !== -1) {
        this.remove(index);
      }
    }
  }

  cancelEditing(todo: Todo): void {
    todo.editable = false;
  }

  remove(index: number): void {
    this.todoListService.remove(index);
  }

  getRemainingList(): Todo[] {
    return this.todoListService.getWithCompleted(false);
  }

  getCompleteList(): Todo[] {
    return this.todoListService.getWithCompleted(true);
  }

  getAllList(): Todo[] {
    return this.todoListService.getList();
  }

  allCompleted(): boolean {
    return this.getAllList().length === this.getCompleteList().length;
  }

  setAllTo(complete: boolean): void {
    this.getAllList().forEach((todo) => {
      todo.setCompleted(complete);
    });
  }

  setStatus(status: number): void {
    this.status = status;
  }

  checkStatus(status: number) {
    return this.status === status;
  }

  removeCompleted(): void {
    this.todoListService.removeCompleted();
  }
}
