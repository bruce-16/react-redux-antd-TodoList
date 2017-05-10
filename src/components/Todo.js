import React,{Component, PropTypes} from 'react';
class Todo extends Component{
  static propTypes = {
    onTodoClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  };

  render(){
    let {text, completed, onTodoClick} = this.props;
    return(
      <li
        onClick={onTodoClick}
        style={{
          textDecoration: completed ? 'line-through' : 'none',
          cursor: completed ? 'default' : 'pointer'
        }}
      >{text}</li>
    );
  }
}

export default Todo;