import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {addTodoGTA, setFilterGTA, completedTodoGTA, VISIBLY_VALUE} from '../actions/actions';
const {SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} = VISIBLY_VALUE;

import AddTodo from './AddTodo';
import List from './List';
import Footer from './Footer';

class TodoList extends Component {
  static propTypes = {
    visiblyValue: PropTypes.oneOf([
      SHOW_ALL,
      SHOW_COMPLETED,
      SHOW_ACTIVE
    ]).isRequired,
    visibleTodos: PropTypes.arrayOf(PropTypes.shape({
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired).isRequired
  };

  render(){
    let {dispatch, visiblyValue, visibleTodos} = this.props;
    return (
      <div>
        <AddTodo
          onAddClick={(text) => {
            dispatch(addTodoGTA(text))
          }}
        />

        <List
          todoList={visibleTodos}
          onTodoClick={(index) => {
            dispatch(completedTodoGTA(index))
          }}
        />

        <Footer
          onChangeFooter={(filter) => {
            dispatch(setFilterGTA(filter))
          }}
          filter={visiblyValue}
        />
      </div>
    );
  }
}


//筛选准备展现的todo列表,根据仓库里面的 visiblyValue来判断,筛选
function getVisiblyTodos(todos, filter){
  switch (filter){
    case SHOW_ALL:
      return todos;
    case SHOW_COMPLETED:
      return todos.filter( todo => todo.completed);
    case SHOW_ACTIVE:
      return todos.filter( todo => !todo.completed);
    default:
      return todos;
  }
}

//将state和组件的props产生关联. 这里没有关联dispatch,默认将dispatch传入props中
function mapStateToProps(state){
  return {
    visiblyValue: state.visiblyValue,
    visibleTodos: getVisiblyTodos(state.todos, state.visiblyValue)
  }
}

export default connect(mapStateToProps)(TodoList);