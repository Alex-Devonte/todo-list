const todoModule = (function() {
    const todoList = [];

    function createTodo(title, desc, priority) {
        return {id: todoList.length, title, desc, priority};
    }

    function addTodo(todo) {
        todoList.push(todo);
    }

    function updateTodo(todoID, newTitle, newDesc, newPriority) {
        //Find the todo by matching ids
        const updatedTodo = todoList.find((todo) => todo.id == todoID);

        //Update values if the todo match was found
        if (updatedTodo) {
            updatedTodo.title = newTitle;
            updatedTodo.desc = newDesc;
            updatedTodo.priority = newPriority;
        } 
    }

    function getTodo(todoID) {
        return todoList[todoID];
    }

    function getTodos() {
        return todoList;
    }
    return { createTodo, addTodo, updateTodo, getTodo, getTodos};
})();

export default todoModule;