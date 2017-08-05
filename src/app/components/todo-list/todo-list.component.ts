import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoList: Object[] = [

];
  todoInput:String='';
  constructor() {}

  ngOnInit() {}
  addTodoInput(){
    if(this.todoInput === ''){
      alert("Enter Todo")
    }else{

    this.todoList.push({
      item: this.todoInput,
      isComplete: false
    });
    this.todoInput = '';
    }
  }

  deleteTodo(item) {
    this.todoList = this.todoList.filter((todo: {
      item: string,
      isComplete ? : boolean
    }) => {
      return todo.item !== item;
    })
  }
}
