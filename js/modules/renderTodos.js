import {createRow} from "./createRow.js";

export const renderTodos = (tableBody,data = []) => {
    data.forEach((item,index) => {
        tableBody.append(
            createRow(index+1,{
                task:item.task,
                priority:item.priority,
                id:item.id,
                status:item.status,

            })
        )
    })
}
export const tasksNumberChange = (tableBody) => {
    const tasks = tableBody.querySelectorAll('tr');
    tasks.forEach((item, index) => {
        item.cells[0].textContent = `${index + 1}`;
    });
};
