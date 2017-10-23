import './style.scss';

import React,{PureComponent} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import {ReactSelectedItem, ReactSelectedItems} from 'react-selected-items';

export default class extends PureComponent{
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.array,
    onChange: PropTypes.func
  };

  static defaultProps = {
    value: [],
    onChange: noop,
  };
  /*===properties end===*/

  _onChange = e =>{
    const { onChange } = this.props;
    onChange(e);
  };

  render(){
    const {className, template, value, onChange, ...props} = this.props;
    return (
      <ReactSelectedItems type="radio" {...props} onChange={this._onChange} className={classNames('react-tab-bar', className)}>
        {
          value.map((item, index) => {
            const { selected,disabled } = item;
            return (
              <ReactSelectedItem data-layout={item.type} selected={selected} disabled={disabled} data={item} key={index} className="react-tab-bar-item">
                <div className="react-tab-bar-item-bd">
                  { !!item.badge && <cite className="item-badge">{item.badge}</cite> }
                  { !!item.dot && <span className="item-dot" />}
                  <div className='item-icon'> <i className={item.icon} data-selected={!!selected} /> </div>
                  <div className="item-text" data-selected={!!selected}> {item.text} </div>
                </div>
              </ReactSelectedItem>
            );
          })
        }
      </ReactSelectedItems>
    );
  }
}
