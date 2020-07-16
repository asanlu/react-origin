import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';

import { incrementAction } from '@/actions';

class Counter extends Component {

  render() {
    const { counter, dispatchAddNum } = this.props;
    return (
      <div>
        <input type="text" />
        <button type="button" onClick={dispatchAddNum}>增加</button>
        <button type="button"><Link to={`${this.props.match.path}/aa`}>到aa组件</Link></button>
        <button type="button"><Link to={`${this.props.match.path}/bb`}>到bb组件</Link></button>
        <p style={{ color: 'red' }}>测试输出:{counter.num}</p>
        {console.log(this.props)}
        <Route path={`${this.props.match.url}/aa`} render={() => <div>I'm aa render!</div>} />
        <Route path={`${this.props.match.url}/bb`} render={() => <div>I'm bb component!</div>} />
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
