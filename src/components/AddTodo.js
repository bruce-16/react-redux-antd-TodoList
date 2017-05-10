import React,{Component, PropTypes} from 'react';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';
class AddTodo extends Component{
  static propTypes = {
    onAddClick: PropTypes.func.isRequired
  };

  constructor(porps){
    super(porps);
    this.state = {
      inputValue: ''
    }
  }

  handleClick(e){
    let value = this.state.inputValue.trim();
    this.props.onAddClick(value);
    this.setState({inputValue: ''})
  }

  render(){
    return (
      <div>
        <Input  type="text" value={this.state.inputValue} onChange={(e) => {
          this.setState({inputValue: e.target.value})
        }} style={{width: 200}}/>
        <Button type={'danger'} onClick={this.handleClick.bind(this)}>Add</Button>
      </div>
    );
  }
}

export default AddTodo;