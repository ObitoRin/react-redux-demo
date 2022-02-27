import './App.css';
import { connect } from 'react-redux';

function App(props) {
  const { n, text } = props;
  return (
    <div className="App">
      <div>
        <p>{n}</p>
        <p>{text}</p>
        <button onClick={() => props.add1()}>+1</button>
        <button onClick={() => props.add2()}>+2</button>
        <button onClick={() => props.addIfOdd()}>如果是单数就+1</button>
        <button onClick={() => props.addAsync()}>两秒钟后+1</button>
      </div>
    </div>
  );
}

// 获取部分/全部store
const mapStateToProps = (state) => {
  return {
    n: state.n,
    text: state.text
  };
};

// 创建对数据变更的action
const mapDispatchToProps = (dispatch) => {
  return {
    add1: () => dispatch({ type: 'add', payload: 1 }),
    add2: () => dispatch({ type: 'add', payload: 2 }),
    addIfOdd: () => {
      dispatch({ type: 'addIfOdd', payload: 1 });
    },
    addAsync: () => {
      return setTimeout(() => {
        dispatch({ type: 'add', payload: 2 });
      }, 2000);
    }
  };
};

// 组成一个新的组件，可使用store中数据，触发action，reducer监听到了就执行对应的action
export default connect(mapStateToProps, mapDispatchToProps)(App);
