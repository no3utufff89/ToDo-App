import {getStorage} from "./storageActions.js";

export const dataFilter = (login) => {
    let data = getStorage(login);
    const completeTodos = data.filter(item => item.status === 'done');
    const importantTodos = data.filter(item => item.priority === 'Важная')
    const totalTodos = data.length
    return {
        completeTodos,
        importantTodos,
        totalTodos,
    }
}