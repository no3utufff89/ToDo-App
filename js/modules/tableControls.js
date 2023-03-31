import deleteDataElement from "./deleteDataElement.js";
import {tasksNumberChange} from "./renderTodos.js";
import {dataFilter} from "./dataFilter.js";

export const tableControls = (tableBody,data,login,activityBlocks) => {

    tableBody.addEventListener('click', (e) => {
        let target = e.target;
        if (target.closest('.controls__btn_delete')) {
           let taskId = target.closest('.table__row').id;
           taskId = Number(taskId);
           console.log(taskId);
           let agree = confirm('Удалить дело?');
           if (agree) {
               target.closest('.table__row').remove();
               tasksNumberChange(tableBody)
               deleteDataElement(taskId,data,login)
               const {totalTodos,importantTodos,completeTodos} = dataFilter(login);
               activityBlocks[1].querySelector('span').textContent = `${totalTodos} всего дел`;
               activityBlocks[2].querySelector('span').textContent = `${importantTodos.length} важных дел`;
               activityBlocks[0].querySelector('span').textContent = `${completeTodos.length} дел завершено`;
           } else {
               return
           }
        }
        if (target.closest('.controls__btn_img_ok')) {

            let taskId = target.closest('.table__row').id;
            taskId = Number(taskId);
            const elem = data.find(item => item.id === taskId);
            if (elem.status === 'active') {

                elem.status = 'done';
                localStorage.setItem(login, JSON.stringify(data));
                const {completeTodos} = dataFilter(login);
                let completeTodo = target.closest('.table__row').childNodes;
                completeTodo[1].style.textDecoration = 'line-through';
                completeTodo[1].style.color = 'aquamarine';
                activityBlocks[0].querySelector('span').textContent = `${completeTodos.length} дел завершено`;
            } else  if (elem.status === 'done') {

                elem.status = 'active';
                localStorage.setItem(login, JSON.stringify(data));
                const {completeTodos} = dataFilter(login);
                let completeTodo = target.closest('.table__row').childNodes;
                completeTodo[1].style.textDecoration = 'none';
                completeTodo[1].style.color = 'inherit';
                activityBlocks[0].querySelector('span').textContent = `${completeTodos.length} дел завершено`;

            }

            // let taskId = target.closest('.table__row').id;
            // taskId = Number(taskId);
            // const elem = data.find(item => item.id === taskId);
            // elem.status = 'done';
            // localStorage.setItem(login, JSON.stringify(data));
            // let completeTodo = target.closest('.table__row').childNodes;
            // completeTodo[1].style.textDecoration = 'line-through';
            // completeTodo[1].style.color = 'aquamarine';
        }

        if (target.closest('.controls__btn_chqnge')) {
            let changeTodo = target.closest('.table__row').childNodes;
            changeTodo[1].setAttribute('contentEditable','true');
            const elem = data.find(item => item.task === changeTodo[1].textContent);
            changeTodo[1].addEventListener('blur', () => {
                elem.task = changeTodo[1].textContent;
                localStorage.setItem(login, JSON.stringify(data));
                changeTodo[1].setAttribute('contentEditable','false');
            })
        }
    })
}