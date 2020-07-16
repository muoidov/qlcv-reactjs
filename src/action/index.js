import * as types from './../const/ActionType';

export const listAll = () => {
    return {
        type: types.LIST_ALL
    }
};
export const addTask = (task) => {
    return {
        type: types.ADD_TASK,
        task
    }
};
export const togglefrom = () => {
    return {
        type: types.OPEN_FORM
    }
};
export const closefrom = () => {
    return {
        type: types.CLOSE_FORM
    }
};
export const update = (id) => {
    return {
        type: types.UPDATE_STATUS,
        id
    }
};