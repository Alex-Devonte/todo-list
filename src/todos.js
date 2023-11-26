const todoModule = (function() {
    let todoList = [];
    let counter = 0;

    function init() {
        if (!localStorage.getItem('todoList') || localStorage.getItem('todoList') === '[]') {
            const defaultTodo = createTodo('Default Todo', 'This is the default todo.', 'medium');
            addTodo(defaultTodo);
        }
    }

    function createTodo(title, desc, priority) {
        return {id: counter++, title, desc, priority};
    }

    function addTodo(todo) {
        todoList.push(todo);
        updateLocalStorage();
    }

    function updateTodo(todoID, newTitle, newDesc, newPriority) {
        //If ID matches create new todo with updated properties
        todoList = todoList.map(todo => {
            if (todo.id === Number(todoID)) {
                return {
                    ...todo,
                    title: newTitle,
                    desc: newDesc,
                    priority: newPriority
                };
            }
            //Return the todo unchanged if there is no ID match
            return todo;
        });
        updateLocalStorage();
    }

    function deleteTodo(todoID) {
       todoList = todoList.filter(todo => todo.id !== Number(todoID));
       updateLocalStorage();
    }

    function getTodo(todoID) {
        //Find todo with the matching ID
        const todo = todoList.find((todo) => todo.id === Number(todoID));
        return todo || null;
    }

    function getTodos() {
        todoList = JSON.parse(localStorage.getItem('todoList'));
        return todoList;
    }

    function updateLocalStorage() {
        localStorage.setItem('todoList', JSON.stringify(todoList));
    }

    return {init, createTodo, addTodo, updateTodo, deleteTodo, getTodo, getTodos};
})();

export default todoModule;