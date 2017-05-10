import React, {Component, PropTypes} from 'react';
import {VISIBLY_VALUE} from '../actions/actions';
export default class Footer extends Component{
  static propTypes = {
    onChangeFooter: PropTypes.func.isRequired,
    filter: PropTypes.oneOf([
      'SHOW_ALL',
      'SHOW_COMPLETED',
      'SHOW_ACTIVE'
    ]).isRequired
  };

  renderFooter(filter, name){
    if(filter === this.props.filter){
      return name;
    }

    return (
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          this.props.onChangeFooter(filter);
        }}
      >{name}</a>
    )
  }

  render(){
    return (
      <div>
        show:
        {' '}
        {this.renderFooter(VISIBLY_VALUE.SHOW_ALL, 'ALL')}
        {','}
        {this.renderFooter(VISIBLY_VALUE.SHOW_COMPLETED, 'Completed')}
        {','}
        {this.renderFooter(VISIBLY_VALUE.SHOW_ACTIVE, 'Active')}
      </div>
    );
  }
}