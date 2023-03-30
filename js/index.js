import getDefaultElements from "./modules/getDefaultElements.js";
import {createAddModal, createLoginModal, createOverlay} from "./modules/builder.js";
import {mainAppRender} from "./modules/mainAppRender.js";
import {addControl, modalControl} from "./modules/interfaceControls.js";
import {getStorage} from "./modules/storageActions.js";
import {renderTodos} from "./modules/renderTodos.js";
import {addToBase} from "./modules/interfaceControls.js";
import {tableControls} from "./modules/tableControls.js";

const  {body, appContainer} = getDefaultElements();
const overlay = createOverlay();
const {loginModal,loginForm} = createLoginModal();
const {todoModal, todoForm, addBtn} = createAddModal();
const {closeLoginModal} = modalControl(overlay, loginModal,todoModal,todoForm);
overlay.append(loginModal, todoModal);
body.append(overlay);

loginModal.addEventListener('submit', e => {
            e.preventDefault();
            let target = e.target;
            const formData = new FormData(target);
            const login = Object.fromEntries(formData).login;
            loginForm.reset();
            init(login);
            closeLoginModal();
})
const init = (login) => {
      let data = getStorage(login)
        const { mainBlock,
                addToDoBtn,
                tableBody,
                activityBlocks,
        } = mainAppRender(appContainer, login);
        addControl(mainBlock, addToDoBtn,todoModal,overlay, todoForm, addBtn,login);
        renderTodos(tableBody,data)
        addToBase(todoForm,data,tableBody,login,overlay,todoModal,activityBlocks)
        tableControls(tableBody,data,login);
}




