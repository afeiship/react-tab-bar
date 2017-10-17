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
    template: PropTypes.func,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    value: [],
    template: noop,
    onChange: noop,
  };
  /*===properties end===*/

  constructor(props) {
    super(props);
    this.state = {
    };
  }

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
                <span className='item-icon'>
                  { !!item.badge && <cite className="item-badge">{item.badge}</cite> }
                  <i className={item.icon} data-selected={!!selected} />
                </span>
                {
                  !!item.text && <span className="item-text" data-selected={!!selected}>
                  {item.text}
                  </span>
                }
              </ReactSelectedItem>
            );
          })
        }
      </ReactSelectedItems>
    );
  }
}