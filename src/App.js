import {useSelector, useDispatch} from 'react-redux';
import Input from '@components/Input/Input';

function App() {
    const dispatch = useDispatch();
    const defaultVal = useSelector(state => state.count.text);

  return (
    <div className="App">
        {defaultVal}
        <button type='button' onClick={() => {dispatch({type: 'default/increment', payload: ''})}}>+</button>
        <Input/>
    </div>
  );
}

export default App;
