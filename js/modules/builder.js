// Создаем оверлэй
import createButtonsGroup from "./createButtonsGroup.js";
import {getStorage} from "./storageActions.js";

export const createOverlay = () => {
    const overlay = document.createElement('div');
    overlay.className = 'overlay active'
    return overlay;
}
export const createSvgBlock = () => {
    const svgBlock = document.createElement('svg');
    svgBlock.className = 'hidden';
    svgBlock.insertAdjacentHTML('afterbegin',
        `
        <symbol id="change-icon" viewBox="0 0 40 40">
    <path d="M20 12.5C21.3807 12.5 22.5 11.3807 22.5 10C22.5 8.61929 21.3807 7.5 20 7.5C18.6193 7.5 17.5 8.61929 17.5 10C17.5 11.3807 18.6193 12.5 20 12.5Z" fill="currentColor"/>
    <path d="M20 22.5C21.3807 22.5 22.5 21.3807 22.5 20C22.5 18.6193 21.3807 17.5 20 17.5C18.6193 17.5 17.5 18.6193 17.5 20C17.5 21.3807 18.6193 22.5 20 22.5Z" fill="currentColor"/>
    <path d="M20 32.5C21.3807 32.5 22.5 31.3807 22.5 30C22.5 28.6193 21.3807 27.5 20 27.5C18.6193 27.5 17.5 28.6193 17.5 30C17.5 31.3807 18.6193 32.5 20 32.5Z" fill="currentColor"/>
  </symbol>
  <symbol id="del-icon" viewBox="0 0 40 40">
    <path d="M11.6667 35C10.75 35 9.96502 34.6733 9.31169 34.02C8.65835 33.3667 8.33224 32.5822 8.33335 31.6667V10H6.66669V6.66667H15V5H25V6.66667H33.3334V10H31.6667V31.6667C31.6667 32.5833 31.34 33.3683 30.6867 34.0217C30.0334 34.675 29.2489 35.0011 28.3334 35H11.6667ZM28.3334 10H11.6667V31.6667H28.3334V10ZM15 28.3333H18.3334V13.3333H15V28.3333ZM21.6667 28.3333H25V13.3333H21.6667V28.3333Z" fill="currentColor"/>
  </symbol>
  <symbol id="checked-icon" viewBox="0 0 40 40">
    <path d="M17.6667 27.6667L29.4167 15.9167L27.0833 13.5833L17.6667 23L12.9167 18.25L10.5833 20.5833L17.6667 27.6667ZM20 36.6667C17.6945 36.6667 15.5278 36.2289 13.5 35.3533C11.4722 34.4778 9.70834 33.2906 8.20834 31.7917C6.70834 30.2917 5.52112 28.5278 4.64668 26.5C3.77223 24.4722 3.33445 22.3056 3.33334 20C3.33334 17.6945 3.77112 15.5278 4.64668 13.5C5.52223 11.4722 6.70945 9.70834 8.20834 8.20834C9.70834 6.70834 11.4722 5.52112 13.5 4.64668C15.5278 3.77223 17.6945 3.33445 20 3.33334C22.3056 3.33334 24.4722 3.77112 26.5 4.64668C28.5278 5.52223 30.2917 6.70945 31.7917 8.20834C33.2917 9.70834 34.4795 11.4722 35.355 13.5C36.2306 15.5278 36.6678 17.6945 36.6667 20C36.6667 22.3056 36.2289 24.4722 35.3533 26.5C34.4778 28.5278 33.2906 30.2917 31.7917 31.7917C30.2917 33.2917 28.5278 34.4795 26.5 35.355C24.4722 36.2306 22.3056 36.6678 20 36.6667ZM20 33.3333C23.7222 33.3333 26.875 32.0417 29.4583 29.4583C32.0417 26.875 33.3333 23.7222 33.3333 20C33.3333 16.2778 32.0417 13.125 29.4583 10.5417C26.875 7.95834 23.7222 6.66668 20 6.66668C16.2778 6.66668 13.125 7.95834 10.5417 10.5417C7.95834 13.125 6.66668 16.2778 6.66668 20C6.66668 23.7222 7.95834 26.875 10.5417 29.4583C13.125 32.0417 16.2778 33.3333 20 33.3333Z" fill="currentColor"/>
  </symbol>
        `);
    return svgBlock;
}
// Создаем модальное окно логина
export const createLoginModal = () => {
    const loginModal = document.createElement('div');
    loginModal.className = 'login-modal active';
    const loginForm = document.createElement('form');
    loginForm.classList.add('login-form');
    loginForm.id = 'login-form';
    loginForm.insertAdjacentHTML('afterbegin',
        ' <div class="modal__header">\n' +
        '      <h2 class="modal__title">Добро пожаловать</h2>\n' +
        '    </div>\n' +
        '    <form action="" id="login-form" class="login-form">\n' +
        '\n' +
        '      <label for="login" class="login-form__label">Логин</label>\n' +
        '      <input id="login" type="text" name="login" class="login-form__input" required=""  placeholder="Введите логин">\n' +
        '\n' +
        '    </form>');
    loginModal.append(loginForm);
    const btnGroup = createButtonsGroup([
        {
            className:'login-form__btn_login',
            type:'submit',
            text:'Войти',
        },
        // {
        //     className:'login-form__btn_reset',
        //     type:'reset',
        //     text:'Отмена',
        // },
    ]);
    loginForm.append(...btnGroup.btns);
    return {
        loginModal,
        loginForm
    };
}
// Блок пользовтеля, сюда передаем данные из бд
export const createUserBlock = (login) => {
    const userBlock = document.createElement('div');
    userBlock.className = 'user-block row';
    const userBlockInfo = document.createElement('div');
    userBlockInfo.className = 'user-block__info';
    const loginedUser = document.createElement('div');
    loginedUser.className = 'logined-user';
    loginedUser.innerHTML = login;
    const userIdBlock = document.createElement('div');
    userIdBlock.className = 'user-block__user-id';
    userIdBlock.insertAdjacentHTML('afterbegin',
        '<span>ID:</span>\n' +
        '     <span class="user-id">123456789</span>');
    const avatarBlock = document.createElement('div');
    avatarBlock.className = 'avatar';
    const avatarImage = document.createElement('img');
    avatarImage.src = './assets/img/avatars/avatar_01.png';
    avatarImage.className = 'avatar-img';
    avatarImage.alt = 'Аватарка';
    avatarImage.width = 70;
    avatarImage.height = 70;
    avatarBlock.append(avatarImage)
    userBlockInfo.append(loginedUser,userIdBlock);
    userBlock.append(userBlockInfo, avatarBlock);
    return userBlock;
}
// Основной блок для информации
export const createMainBlock = () => {
    const mainBlock = document.createElement('div');
    mainBlock.className = 'main-window row';
    return mainBlock;
}
// Первая строка основного блока
export const createFirstLine = () => {
    const firstLine = document.createElement('div');
    firstLine.className = 'first-line row';
    return firstLine;
}
// Кнопка добавления нового дела
export const createAddBtn = (text) => {
    const todoAddBtn = document.createElement('button');
    todoAddBtn.className = 'btn todo-add-btn';
    todoAddBtn.type = 'button';
    todoAddBtn.textContent = text;
    return todoAddBtn;
}
// Блок с текстовой информацией
export const createTextInfoBlock = (login) => {
    const titleBlock = document.createElement('div');
    titleBlock.className = 'block-title';
    const span = document.createElement('span');
    span.className = 'block-title__text';
    span.innerHTML = `Привет ${login}`
    titleBlock.append(span);
    return titleBlock;
}
// Создаем таблицу для вывода дел
export const createTable = () => {
    const table = document.createElement('table');
    table.className = 'table'
    table.cellPadding = '0';
    table.cellSpacing = '0';
    const tableHead = document.createElement('thead');
    tableHead.className = 'table__head';
    tableHead.insertAdjacentHTML('beforeend',
        ' <tr>\n' +
        '          <th class="table__cell-name table__cell-name_id">№</th>\n' +
        '          <th class="table__cell-name">Дело</th>\n' +
        '          <th class="table__cell-name">Важность</th>\n' +
        '          <th class="table__cell-name">Редактировать</th>\n' +
        '        </tr>')
    const tableBody = document.createElement('tbody');
    table.tableBody = tableBody;
    table.append(tableHead,tableBody)
    return {
        table,
        tableBody,
    };
}
export const createSmallContainer = () => {
    const smallContainer = document.createElement('div');
    smallContainer.className = 'container-small';
    return smallContainer;
}
export const createAddModal = () => {
    const todoModal = document.createElement('div');
    todoModal.className = 'todo-modal';
    todoModal.insertAdjacentHTML('afterbegin',
        `
        <div class="modal__header">
        <h2 class="modal__title">Добавьте дело</h2>
        </div>
        `);
    const todoForm = document.createElement('form');
    todoForm.className = 'addForm';
    todoForm.id = 'addForm';
    todoForm.insertAdjacentHTML('afterbegin',
        `
         <label for="task" class="addForm__label">Дело</label>
      <input id="task" type="text" name="task" class="addForm__input" required="" placeholder="Введите текст">
      <label for="priorityId">Важность</label>
      <select name="priority" id="priorityId">
        <option value="Обычная">Обычная</option>
        <option value="Важная">Важная</option>
        <option value="Срочная">Срочная</option>
      </select>
        `);
    todoModal.append(todoForm);
    const addBtn = document.createElement('button');
    addBtn.className = 'login-form__btn_login';
    addBtn.textContent = 'Добавить';
    addBtn.setAttribute('disabled','disabled')
    todoForm.append(addBtn);
    return {
        todoModal,
        todoForm,
        addBtn
    }

}
export const createMenuContainer = () => {
    const menuContainer = document.createElement('div');
    menuContainer.className = 'menu-block';
    return menuContainer;
};
// Блок с логотипом
export const createLogoBlock = () => {
    const logoBlock = document.createElement('div');
    logoBlock.className = 'logo-block';
    const logoLink = document.createElement('a');
    logoLink.className = 'logo';
    logoLink.href = '#';
    const logoImage = document.createElement('img');
    logoImage.className = 'logo__image';
    logoImage.width = 91;
    logoImage.height = 23;
    logoImage.alt = 'Логотип';
    logoImage.src = './assets/img/svg/logo.svg';
    logoLink.append(logoImage);
    logoBlock.append(logoLink);
    return logoBlock;
};
export const createListsBlocks = (login,params = []) => {

    const todosActivity = document.createElement('div');
    todosActivity.className = 'todos-activity';
    const activityList = document.createElement('ul');
    activityList.className = 'activity-list row';
    const activityBlocks = params.map(({className, amount, src,text}) => {
        const listElement = document.createElement('li');
        listElement.className = 'activity-list__item';
        const activityBlock = document.createElement('a');
        const activityBlockImg = document.createElement('img');
        const activityCardInfo = document.createElement('div');
        activityCardInfo.className = 'activity-card__info';
        const span = document.createElement('span');
        span.className = 'amount';
        span.innerHTML = `${amount} ${text}`
        activityBlockImg.width = 80;
        activityBlockImg.height = 80;
        activityBlockImg.className = 'activity-card__image';
        activityBlockImg.alt = 'Иконка карточки';
        activityCardInfo.append(span)
        activityBlock.append(activityBlockImg,activityCardInfo);
        listElement.append(activityBlock);
        activityBlock.className = className;
        activityBlockImg.src = src;
        return listElement;
    })
    activityList.append(...activityBlocks);
    return {
        activityList,
        activityBlocks,
    }
}
export const createMenuList = (params) => {
    const menu = document.createElement('menu');
    menu.className = 'menu';
    const menuList = document.createElement('ul');
    menuList.className = 'menu-list';
    const menuItems = params.map(({title}) => {
        const listElement = document.createElement('li');
        listElement.className = 'menu-list__item';
        const listLinks = document.createElement('a');
        listLinks.className = 'menu-list__link';
        listLinks.textContent = title;
        listElement.append(listLinks);
        return listElement;
    })
    menuList.append(...menuItems);
    return {
        menuList,
        menuItems
    }
}