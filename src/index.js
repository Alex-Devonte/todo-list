import todoModule from "./todos";
import interfaceModule from './interface';
import './styles/styles.css'


const test = todoModule.createTodo('test', 'desc', 'High');

todoModule.addTodo(test);
interfaceModule.displayTodos();
interfaceModule.validateForm();