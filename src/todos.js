const todoModule = (function() {
    let todoList = [];
    let counter = 0;

    function createTodo(title, desc, priority) {
        return {id: counter++, title, desc, priority};
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

    function deleteTodo(todoID) {
        //Filter todoList to exclude the todo with the specified id
       todoList = todoList.filter(todo => todo.id !== Number(todoID));
    }
    
    function getTodo(todoID) {
        return todoList[todoID];
    }

    function getTodos() {
        return todoList;
    }
    return { createTodo, addTodo, updateTodo, deleteTodo, getTodo, getTodos};
})();

export default todoModule;