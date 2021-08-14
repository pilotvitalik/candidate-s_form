import {useSelector, useDispatch} from 'react-redux';
import RadioButton from '@components/RadioButton/RadioButton';

function App() {
    const dispatch = useDispatch();
    const defaultVal = useSelector(state => state.count.text);

  return (
    <div className="App">
        {defaultVal}
        <button type='button' onClick={() => {dispatch({type: 'default/increment', payload: ''})}}>+</button>
        <RadioButton/>
    </div>
  );
}

export default App;
