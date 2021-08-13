import {useSelector, useDispatch} from 'react-redux';

function App() {
    const dispatch = useDispatch();
    const defaultVal = useSelector(state => state.count.text);

  return (
    <div className="App">
        {defaultVal}
        <button type='button' onClick={() => {dispatch({type: 'default/increment', payload: ''})}}>+</button>
    </div>
  );
}

export default App;
