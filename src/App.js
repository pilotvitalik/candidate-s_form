import {useSelector, useDispatch} from 'react-redux';
import Modal from '@components/Modal/Modal';

function App() {
    const dispatch = useDispatch();
    const defaultVal = useSelector(state => state.count.text);

  return (
    <div className="App">
        {defaultVal}
        <button type='button' onClick={() => {dispatch({type: 'default/increment', payload: ''})}}>+</button>
        <Modal/>
    </div>
  );
}

export default App;
