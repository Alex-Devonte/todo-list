const test = ['test', 'desc', 'dueDate', 'high'];

const todoModule = (function() {
    function createTodo(title, desc, dueDate, priority) {
        return {title, desc, dueDate, priority};
    }
    return { createTodo,};
})();

export default todoModule;