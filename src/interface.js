const container = document.querySelector('.todo-container');

const interfaceModule = (function() {
    function createSvgElement(svgString, className) {
        //The DOMParser interface provides the ability to parse XML
        const parser = new DOMParser();
            
        //DOMParser.parseFromString returns an XMLDocument
        let svgDoc = parser.parseFromString(svgString, 'image/svg+xml');

        //Extract the root svg element from the parsed XMLDocument
        const svgElement = svgDoc.documentElement;
        svgElement.classList.add(className);
        return svgElement;
    }

    function createTodoElement(todo) {
        const todoElement = document.createElement('div');
        todoElement.classList.add('todo', 'priority-' + todo.priority);
    
        const todoTitle = document.createElement('div');
        todoTitle.className = 'title';
        todoTitle.textContent = todo.title;
        todoElement.appendChild(todoTitle);
    
        const todoDetailBtn = document.createElement('button');
        todoDetailBtn.className = 'detail-btn';
        todoDetailBtn.textContent = 'Detail';
        todoElement.appendChild(todoDetailBtn);
    
        
        const editSvg = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>pencil-outline</title>
                <path d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z" />
            </svg>`;
    
        const deleteSvg = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>delete</title>
                <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
            </svg>`;
        
        const todoEdit = createSvgElement(editSvg, 'edit-icon');
        const todoDelete = createSvgElement(deleteSvg, 'delete-icon');

        todoElement.appendChild(todoEdit);
        todoElement.appendChild(todoDelete);
    
        container.appendChild(todoElement);
    }
    
    function displayTodos(todos) {
        todos.forEach(todo => {
            createTodoElement(todo);
        });
    }
    return {createTodoElement, displayTodos};
})();

export default interfaceModule;