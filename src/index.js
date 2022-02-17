import './styles.css';

//import { Todo } from './classes/todo.class';
//import { TodoList } from './classes/todo-list.class';
import { Todo, TodoList } from "./classes"; //  por defecto se hace la importacion del archivo index.js contenido en la carpeta assest
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList()

todoList.todos.forEach(crearTodoHtml);
console.log(todoList.todos);