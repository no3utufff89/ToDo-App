import {setStorage} from "./storageActions.js";
import {createRow} from "./createRow.js";
import {generateId} from "./generateId.js";

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
export const addToBase = (todoForm,data,tableBody,login,overlay,todoModal) => {
    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const id = generateId()
        const formData = new FormData(todoForm);
        const product = Object.fromEntries(formData);
        const newTask = {
            id:id,
            task:product.task,
            priority:product.priority,
            status:'active',
        }
        data.push(newTask);
        const newProductLine = data.length;
        tableBody.append(createRow(newProductLine,newTask))
        setStorage(login,JSON.stringify(newTask))
        overlay.classList.remove('active');
        todoModal.classList.remove('active');
        todoForm.reset();
    })
}

