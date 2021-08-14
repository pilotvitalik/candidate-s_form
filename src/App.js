import {useSelector, useDispatch} from 'react-redux';
import Form from '@views/Form/Form';

function App() {
    const dispatch = useDispatch();
    const defaultVal = useSelector(state => state.count.text);

  return (
    <div className="App">
        {/*{defaultVal}
        <button type='button' onClick={() => {dispatch({type: 'default/increment', payload: ''})}}>+</button>*/}
        <Form/>
    </div>
  );
}

export default App;
