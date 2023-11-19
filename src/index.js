import todoModule from "./todos";
import interfaceModule from './interface';
import './styles/styles.css'


const test = todoModule.createTodo('test', 'mydesc', 'now', 'high');
const test2 = todoModule.createTodo('test', 'mydesc', 'now', 'high');
const test3 = todoModule.createTodo('test', 'mydesc', 'now', 'high');
const test4 = todoModule.createTodo('test', 'mydesc', 'now', 'high');
const test5 = todoModule.createTodo('test', 'mydesc', 'now', 'high');
const test6 = todoModule.createTodo('test', 'mydesc', 'now', 'high');
const todos = [test,test2,test3,test4,test5,test6];

interfaceModule.displayTodos(todos);
interfaceModule.validateForm();