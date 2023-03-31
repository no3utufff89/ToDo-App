import {
    createAddBtn,
    createFirstLine, createListsBlocks, createLogoBlock,
    createMainBlock, createMenuContainer,
    createMenuList,
    createTable,
    createTextInfoBlock,
    createUserBlock
} from "./builder.js";
import {dataFilter} from "./dataFilter.js";

export const mainAppRender = (appContainer, login) => {
    const {completeTodos,totalTodos,importantTodos} = dataFilter(login);
    const {activityList,activityBlocks} = createListsBlocks(login,[
        {
            className:'activity-card complete',
            src:'./assets/img/activity-card-icon.png',
            text:'дел завершено:',
            amount:completeTodos.length
        },
        {
            className:'activity-card',
            src:'./assets/img/activity-card-icon.png',
            text:'всего дел:',
            amount: totalTodos
        },
        {
            className:'activity-card important',
            src:'./assets/img/activity-card-icon.png',
            text:'важных дел:',
            amount: importantTodos.length
        },
    ]);
    const menuItems = createMenuList([
        {
            title: 'Выход',
            onclick:'location.reload()'
            
        }
    ]);
    const mainBlock = createMainBlock();
    const firstLine = createFirstLine();
    const userBlock = createUserBlock(login);
    const textInfo = createTextInfoBlock(login);
    const addToDoBtn = createAddBtn('Добавить');
    const {table, tableBody} = createTable();
    const menuBlock = createMenuContainer();
    const logoBlock = createLogoBlock();

    firstLine.append(textInfo, addToDoBtn, userBlock);
    menuBlock.append(logoBlock,menuItems.menuList);
    mainBlock.append(firstLine,activityList,table);
    appContainer.append(menuBlock,mainBlock);
    return {
        mainBlock,
        firstLine,
        userBlock,
        textInfo,
        addToDoBtn,
        table,
        tableBody,
        menuBlock,
        activityBlocks,
    }
}