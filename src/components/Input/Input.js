import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import style from './input.module.css';

function Input(props){
  const dispatch = useDispatch();
  const [isTyping, setTyping] = useState(false);


  function validate(e){
    dispatch({type: `form/upd${props.block}`, 
      payload: {
        val: e.target.value,
        name: props.data.name,
        block: props.block,
        id: props.data.id - 1,
      }
    });
  }

  function showError(e){
    setTyping(false);
    dispatch({type: `form/err${props.block}`, 
      payload: {
        name: props.data.name,
        block: props.block,
        id: props.data.id - 1,
      }
    });
  }

  function showHightLight(){
    setTyping(true);
  }

  return(
    <div className={style.inputBlock}>
      <label htmlFor={`${props.block}_${props.data.id}`}>
        {props.data.title}
        {props.data.isRequired &&
          <sup>*</sup>
        }
      </label>
      <input id={`${props.block}_${props.data.id}`}
        type={props.data.type}
        className={`${props.data.isError ? style.inputError : ''} ${isTyping ? style.typing : ''} ${props.data.value ? style.filled : ''}`}
        placeholder={props.data.placeholder}
        value={props.data.value}
        onChange={validate}
        onBlur={showError}
        onFocus={showHightLight}/>
      <span className={`${style.error} ${props.data.isError ? style.displayError : ''}`}>{props.data.error}</span>
    </div>
  )
}

export default Input;