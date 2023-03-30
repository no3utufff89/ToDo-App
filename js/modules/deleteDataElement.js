const deleteDataElement = (taskId,data,login) => {
    const index = data.findIndex(item => item.id === taskId);
    data.splice(index,1);
    localStorage.setItem(login, JSON.stringify(data));
    console.log(data)
}
export  default deleteDataElement;

