import React,{Component, PropTypes} from 'react';
import Todo from './Todo';

export default class List extends Component{
  static propsTypes = {
    todoList: PropTypes.arrayOf(PropTypes.shape({
      completed: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onTodoClick: PropTypes.func.isRequired
  };

  render(){
    const {todoList, onTodoClick} = this.props;
    return (
      <div>
        <ul>
          {todoList.map( (todo, index) => {
            return (
              <Todo
                {...todo}
                key={index}
                onTodoClick={()=> {onTodoClick(index)}}
              />
            )
          })}
        </ul>
      </div>
    );
  }
}