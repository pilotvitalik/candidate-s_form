import {useSelector, useDispatch} from 'react-redux';
import initData from '@api/initialData.json';
import Form from '@views/Form/Form';

function App() {
    const dispatch = useDispatch();
    const defaultVal = useSelector(state => state.count.text);

    test();

    function test(){
        console.log(initData);
    }

  return (
    <div className="App">
        {/*{defaultVal}
        <button type='button' onClick={() => {dispatch({type: 'default/increment', payload: ''})}}>+</button>*/}
        <Form/>
    </div>
  );
}

export default App;
