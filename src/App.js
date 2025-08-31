import UseState from './UseState';
// import ClassState from './ClassState';
import './App.css';
import { UseReducer } from './useReducer';

function App() {
  return (
    <div className="App">
      <UseState   name='UseState'/>
      <UseReducer name= 'use Reducer'/>
    </div>
  );
}

export default App;