const loadState = () => {
    const storeState = localStorage.getItem('reduxState');
    if (!storeState) {
        return {};
    }
    return JSON.parse(localStorage.getItem('reduxState') as string);
};
const saveState = (store: any) => { 
    localStorage.setItem('reduxState', JSON.stringify(store.getState()));
};

export const localStorageHelper = {
    loadState,
    saveState,
};