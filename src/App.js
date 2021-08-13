import {useSelector, useDispatch} from 'react-redux';
import Button from '@components/Button/Button';

function App() {
    const dispatch = useDispatch();
    const defaultVal = useSelector(state => state.count.text);

  return (
    <div className="App">
        {defaultVal}
        <button type='button' onClick={() => {dispatch({type: 'default/increment', payload: ''})}}>+</button>
        <Button/>
    </div>
  );
}

export default App;
