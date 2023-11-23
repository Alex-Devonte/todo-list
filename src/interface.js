import todoModule from "./todos";

const container = document.querySelector('.todo-container');

const interfaceModule = (function() {

    function validateForm() {
        const newTodoBtn = document.querySelector('.new-todo-btn');
        const addTodoBtn = document.querySelector('#add-todo-btn');
        const newTodoForm = document.querySelector('#new-todo-form');

        newTodoBtn.addEventListener('click', function() {
            newTodoForm.style.visibility = 'visible';
        });
    
        addTodoBtn.addEventListener('click', function(e) {
            e.preventDefault();
            let isValid = true;

            let title = document.querySelector('#title');
            let desc = document.querySelector('#description');
            let priority = document.querySelector('input[name="priority"]:checked');
    
            let titleError = document.querySelector('.title-error');
            let priorityError = document.querySelector('.priority-error');
    
            //Show error msg/styles if input isn't valid
            if (title.value == '') {
                titleError.style.display = 'block';
                title.classList.add('error');   
                isValid = false;
            } else {
                titleError.style.display = 'none';
                title.classList.remove('error');
                title = title.value;
            }
    
            //Show error msg if no selection is checked
            if (!priority) {
                priorityError.style.display = 'block';
                isValid = false;
            } else {
                priorityError.style.display = 'none';
                priority = priority.value;
            }
    
            if (isValid) {
                newTodoForm.style.visibility = 'hidden';
                todoModule.addTodo(todoModule.createTodo(title, desc.value, priority));
                
                clearForm();
                displayTodos();
            }
        });
    }

    function clearForm() {
        document.querySelectorAll('input[type="text"], textarea').forEach(function(input) {
            input.value = '';
        });
        document.querySelectorAll('input[type="radio"]').forEach(function(input) {
            input.checked = false;
        });
    }

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

        //Create data attribute for element with id as the value
        //Needed for editing/deleting todos
        todoElement.setAttribute('data-id', todo.id);
    
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

        todoEdit.addEventListener('click', function() {
            const todoID = todoElement.getAttribute('data-id');
            handleEditTodo(todoID);
        });
    
        container.appendChild(todoElement);
    }

    function handleEditTodo(todoID) {
        const currentTodo = todoModule.getTodo(todoID);

        const editForm = document.querySelector('#edit-todo-form');
        const updateBtn = document.querySelector('#update-todo-btn');
        
        editForm.style.visibility = 'visible';

        //Set the form input/textarea values equal to the selected todo values
        const editTitle = document.querySelector('#edit-title');
        editTitle.value = currentTodo.title;

        const editDesc = document.querySelector('#edit-description');
        editDesc.value = currentTodo.desc;

        const editPriority = document.querySelector(`input[name="edit-priority"][value="${currentTodo.priority}"]`);
        editPriority.checked = true;

        updateBtn.addEventListener('click', function() {
            const checkedPriority = document.querySelector('input[name="edit-priority"]:checked');
            //Prevent console error by only assigning value if the radio button is checked
            if (checkedPriority) {
                const updatedPriority = checkedPriority.value;

                editForm.style.visibility = 'hidden';
                todoModule.updateTodo(todoID, editTitle.value, editDesc.value, updatedPriority);
                
                clearForm();
                displayTodos();
            }
        });
    }
    
    function displayTodos() {
        container.textContent = '';
        let todoList = todoModule.getTodos();

        todoList.forEach(todo => {
            createTodoElement(todo);
        });
    }

    return {createTodoElement, displayTodos, validateForm};
})();

export default interfaceModule;