import todoModule from "./todos";

const container = document.querySelector('.todo-container');

const interfaceModule = (function() {
    const addFormModal = document.querySelector('#new-todo-modal');
    const editFormModal = document.querySelector('#edit-todo-modal');

    function validateForm() {
        const newTodoBtn = document.querySelector('.new-todo-btn');
        const addTodoBtn = document.querySelector('#add-todo-btn');
        const newTodoForm = document.querySelector('#new-todo-form');

        newTodoBtn.addEventListener('click', function() {
            addFormModal.showModal();
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
                addFormModal.close();
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

        todoElement.appendChild(createCheckBox());
    
        const todoTitle = document.createElement('div');
        todoTitle.className = 'title';
        todoTitle.textContent = todo.title;
        todoElement.appendChild(todoTitle);
    
        const detailBtnContainer = document.createElement('div');
        detailBtnContainer.className = 'detail-btn-container';

        const todoDetailBtn = document.createElement('button');
        todoDetailBtn.className = 'detail-btn';
        todoDetailBtn.textContent = 'Detail';
        todoDetailBtn.addEventListener('click', () => createDetailPopup(todo));
        
        detailBtnContainer.appendChild(todoDetailBtn);
        todoElement.appendChild(detailBtnContainer);

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
        
        const menuSvg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>dots-vertical</title>
            <path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" />
        </svg>`;


        const editContainer = document.createElement('div');
        editContainer.className = 'edit-container'; 

        const todoEdit = createSvgElement(editSvg, 'edit-icon');
        const todoDelete = createSvgElement(deleteSvg, 'delete-icon');
        const todoMenu = createSvgElement(menuSvg, 'menu-icon');
        const menuElement = createMenu(todo.id);

        editContainer.appendChild(todoEdit);
        editContainer.appendChild(todoDelete);
        editContainer.appendChild(todoMenu);
        editContainer.appendChild(menuElement);
        
        todoElement.appendChild(editContainer);
     
        todoEdit.addEventListener('click', function() {
            const todoID = todoElement.getAttribute('data-id');

            handleEditTodo(todoID);
            editFormModal.showModal();
        });

        todoDelete.addEventListener('click', function() {
            const todoID = todoElement.getAttribute('data-id');
            handleDeleteTodo(todoID);
        });

        todoMenu.addEventListener('click', function(event) {
            //Stop event from spreading to document
            event.stopPropagation();
            menuElement.classList.toggle('menu-active');
        
           //Close menu if user clicks away
            document.body.addEventListener('click', function () {
                if (menuElement.classList.contains('menu-active')) {
                    menuElement.classList.remove('menu-active');
                }
            });
    
        });
    
        container.appendChild(todoElement);
    }

    function createMenu(todoID) {
        const menu = document.createElement('div');
        menu.classList.add('edit-menu');

        const editText = document.createElement('p');
        editText.textContent = 'Edit';
        editText.className   = 'edit-link';

        const deleteText = document.createElement('p');
        deleteText.textContent = 'Delete';
        deleteText.className = 'delete-link';

        editText.addEventListener('click', function() {
            handleEditTodo(todoID);
        });

        deleteText.addEventListener('click', function() {
            handleDeleteTodo(todoID);
        });

        menu.appendChild(editText);
        menu.appendChild(deleteText);

        

        return menu;
    }

    function createCheckBox() {
        const checkboxContainer = document.createElement('div');
        checkboxContainer.className = 'checkbox-container';

        const checkbox = document.createElement('div');
        checkbox.className = 'checkbox';

        checkbox.addEventListener('click', function() {
            //Get closest todo element which is the element the checkbox is currently on
            const todo = this.closest('.todo');
            todo.classList.toggle('todo-checked');
            checkbox.classList.toggle('checkbox-checked');
        });

        checkboxContainer.appendChild(checkbox);
        return checkboxContainer;
    }

    function createDetailPopup(todo) {
        const detailDialog = document.createElement('dialog');

        const title = document.createElement('h2');
        title.textContent = todo.title;
        detailDialog.appendChild(title);

        const desc = document.createElement('p');
        desc.textContent = todo.desc ? todo.desc: 'No description. . .';
        detailDialog.appendChild(desc);

        const priority = document.createElement('div');
        priority.textContent = todo.priority;
        detailDialog.appendChild(priority);

        const closeButton = document.createElement('button');
        closeButton.textContent = 'Close';
        detailDialog.appendChild(closeButton);

        document.body.appendChild(detailDialog);
        detailDialog.showModal();

        //Add event listener to close and remove the dialog when the close button is clicked
        closeButton.addEventListener('click', function() {
            detailDialog.close();
            document.body.removeChild(detailDialog);
        });
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

        updateBtn.addEventListener('click', function handleUpdate() {
            const checkedPriority = document.querySelector('input[name="edit-priority"]:checked');
            //Prevent console error by only assigning value if the radio button is checked
            if (checkedPriority) {
                const updatedPriority = checkedPriority.value;

                editForm.style.visibility = 'hidden';
                todoModule.updateTodo(todoID, editTitle.value, editDesc.value, updatedPriority);
                
                clearForm();
                displayTodos();
                editFormModal.close();

                //Remove event listener to prevent it from being called twice
                updateBtn.removeEventListener('click', handleUpdate);
            }
        });
    }

    function handleDeleteTodo(todoID) {
        todoModule.deleteTodo(todoID);
        displayTodos();
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