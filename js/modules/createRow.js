
export const createRow = (index, {task, priority,id,status}) => {
    const tr = document.createElement('tr');
    tr.className = 'table__row';
    tr.id = id;
    const tdNumber = document.createElement('td');
    tdNumber.className = 'table__cell-value number common';
    tdNumber.textContent = index;
    const tdTask = document.createElement('td');
    tdTask.className = 'table__cell-value name table__cell-name_long';
    tdTask.textContent = task;
    const tdPriority = document.createElement('td');
    tdPriority.className = 'table__cell-value priority';
    tdPriority.textContent = priority;
    if (priority === 'Важная') {
      tdNumber.style.backgroundColor = '#fdc248';
    }
    if (priority === 'Срочная') {
      tdNumber.style.backgroundColor = '#FF9393';
    }
    if (status === 'done') {
      tdTask.style.textDecoration = 'line-through';
      tdTask.style.color = 'aquamarine';
    }
    const tdControls = document.createElement('td');
    tdControls.className = 'table__cell-value controls';
    tdControls.insertAdjacentHTML('afterbegin',
        `
         <button class="btn controls__btn controls__btn_img_ok" title="Завершить">
              <svg class="icon check-icon" width="30" height="30">
                <use href="#checked-icon"></use>
              </svg>
              Завершить</button>
            <button class="btn controls__btn controls__btn_chqnge" title="Редактировать">
              <svg class="icon change-icon" width="30" height="30">
                <use href="#change-icon"></use>
              </svg>Редактировать</button>
            <button class="btn controls__btn controls__btn_delete" title="Удалить">
              <svg class="icon delete-icon" width="30" height="30">
                <use href="#del-icon"></use>
              </svg>
              Удалить</button>
        `)
    tr.append(tdNumber,tdTask,tdPriority,tdControls);
    return tr;
}