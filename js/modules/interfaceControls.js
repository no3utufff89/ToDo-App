import {setStorage} from "./storageActions.js";
import {createRow} from "./createRow.js";
import {generateId} from "./generateId.js";
import {dataFilter} from "./dataFilter.js";

export const modalControl = (overlay, loginModal) => {
    const openLoginModal = () => {
        overlay.classList.add('active');
        loginModal.classList.add('active');
    }
    const closeLoginModal = () => {
        overlay.classList.remove('active');
        loginModal.classList.remove('active');
    }
    const closeAddModal = (todoModal,todoForm) => {
        overlay.classList.remove('active');
        todoModal.classList.remove('active');
        todoForm.reset();
    }
    return {
        closeLoginModal,
        openLoginModal,
        closeAddModal
    }
}
export const addControl = (mainBlock, addToDoBtn,todoModal,overlay, todoForm, addBtn) => {
    mainBlock.addEventListener('click', (e) => {
        let target = e.target;
        if (target === addToDoBtn) {
            addBtn.setAttribute('disabled', 'disabled');
            overlay.classList.add('active');
            todoModal.classList.add('active');
        }
    })
    overlay.addEventListener('click', (e) => {
        let target = e.target;
        if (target === overlay) {
            overlay.classList.remove('active');
            todoModal.classList.remove('active');
            todoForm.reset();
        }
    })
    todoForm.addEventListener('input', (e) => {
        let target = e.target;
        if (target === task && task.value === '') {
            addBtn.setAttribute('disabled', 'disabled');
        } else if (target === task && task.value.match(/^[ ]+$/)) {
            addBtn.setAttribute('disabled', 'disabled');
        }
        else {
            addBtn.removeAttribute('disabled', 'disabled');
        }
    })
}
export const addToBase = (todoForm,data,tableBody,login,overlay,todoModal,activityBlocks) => {
    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const id = generateId()
        const formData = new FormData(todoForm);
        const product = Object.fromEntries(formData);
        product.task.trim();
        const newTask = {
            id:id,
            task:product.task,
            priority:product.priority,
            status:'active',
        }

        data.push(newTask);
        const newProductLine = data.length;
        tableBody.append(createRow(newProductLine,newTask))
        setStorage(login,JSON.stringify(newTask));
        const {completeTodos,
               importantTodos,
               totalTodos} = dataFilter(login);
        activityBlocks[1].querySelector('span').textContent = `всего дел: ${totalTodos}`;
        activityBlocks[2].querySelector('span').textContent = `важных дел: ${importantTodos.length}`;
        overlay.classList.remove('active');
        todoModal.classList.remove('active');
        todoForm.reset();
    })
}

