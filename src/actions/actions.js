export const ADD_TODO = 'ADD_TODO';
export const COMPLETED_TODO = 'COMPLETED_TODO';
export const SET_FILTER = 'SET_FILTER';

export const VISIBLY_VALUE = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};


export function addTodoGTA(text){
  return {
    type: ADD_TODO,
    text
  }
}

export function completedTodoGTA(index){
  return {
    type:COMPLETED_TODO,
    index
  }
}

export function setFilterGTA(filter){
  return {
    type: SET_FILTER,
    filter
  }
}