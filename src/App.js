import './App.css';
import { store } from './index';

function add1() {
  store.dispatch({ type: 'add', payload: 1 });
}

function add2() {
  store.dispatch({ type: 'add', payload: 2 });
}

function addIfOdd() {
  if (store.getState() % 2 === 1) {
    store.dispatch({ type: 'add', payload: 1 });
  }
}

function addAsync() {
  setTimeout(() => {
    store.dispatch({ type: 'add', payload: 1 });
  }, 2000);
}

function App(props) {
  const { value } = props;
  return (
    <div className="App">
      <div>
        <p>{value}</p>
        <button onClick={add1}>+1</button>
        <button onClick={add2}>+2</button>
        <button onClick={addIfOdd}>如果是单数就+1</button>
        <button onClick={addAsync}>两秒钟后+1</button>
      </div>
    </div>
  );
}

export default App;
