export const SET_FILTER = 'SET_FILTER';
export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO_TEXT = 'UPDATE_TODO_TEXT';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const filters = {
  ALL: 'all',
  DONE: 'done',
  UNDONE: 'undone',
};

export const setFilter = filter => ({ type: SET_FILTER, filter });

export const addToDo = text => ({ type: ADD_TODO, text });

export const updateToDoText = (uuid, text) => ({
  type: UPDATE_TODO_TEXT,
  uuid,
  text,
});

export const removeToDo = uuid => ({ type: REMOVE_TODO, uuid });

export const toggleToDo = uuid => ({ type: TOGGLE_TODO, uuid });
