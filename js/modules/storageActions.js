export const getStorage = key => JSON.parse(localStorage.getItem(key)) || [];

export const setStorage = (login, newContact) => {
    const data = getStorage(login);
    localStorage.setItem(login, newContact);
    data.push(JSON.parse(localStorage.getItem(login)));
    localStorage.setItem(login, JSON.stringify(data));
};

export const removeStorage = (login,task) => {
    const data = getStorage(login);
    data.forEach((item, index) => {
        if (item.task === task) {
            data.splice(index, 1);
            localStorage.setItem(login, JSON.stringify(data));
        }
    });
};
