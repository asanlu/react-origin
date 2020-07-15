import React, { Component } from 'react';
import { connect } from 'react-redux';

import { incrementAction } from '@/actions';

class Counter extends Component {

  render() {
    const { counter, dispatchAddNum } = this.props;
    return (
      <div>
        <input type="text" />
        <button type="button" onClick={dispatchAddNum}>增加</button>
        <p style={{ color: 'red' }}>测试输出:{counter.num}</p>
        {console.log(this.props)}
      </div>
    );
  }
}

// state对象到props对象的映射
const mapStateToProps = (state) => ({
  counter: state.counter
});

// 组件的参数到store.dispatch方法的映射
const mapDispatchToProps = (dispatch) => ({
  dispatchAddNum: () => dispatch(incrementAction)
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
