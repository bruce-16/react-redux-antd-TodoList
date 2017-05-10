import {combineReducers} from 'redux';
import {ADD_TODO, SET_FILTER, COMPLETED_TODO, VISIBLY_VALUE} from '../actions/actions';


function visiblyValue(state=VISIBLY_VALUE.SHOW_ALL, action){
  switch (action.type){
    case SET_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function todos(state=[], action){
  switch (action.type){
    case ADD_TODO:
      return [
        ...state,
        {
          completed: false,
          text: action.text
        }
      ];
    case COMPLETED_TODO:
      return state.map( (todo, index) => {
        if(index === action.index){
          return {
            ...todo,
            completed: !todo.completed
          }
        }else{
          return todo;
        }
      })
    default:
      return state;
  }
}

const reducer = combineReducers({
  visiblyValue,
  todos
});

export default reducer;