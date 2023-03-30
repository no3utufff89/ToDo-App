const getDefaultElements = () => {
    const body = document.querySelector('body');
    body.classList.add('index-page');
    const appContainer = document.querySelector('.app-container');
    appContainer.classList.add('row');
    return {
        body,
        appContainer,
    }
}
export  default getDefaultElements;