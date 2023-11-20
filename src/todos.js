const todoModule = (function() {
    const todoList = [];

    function createTodo(title, desc, priority) {
        return {title, desc, priority};
    }

    function addTodo(todo) {
        todoList.push(todo);
    }

    function getTodos() {
        return todoList;
    }
    return { createTodo, addTodo, getTodos};
})();

export default todoModule;