import React from 'react';
import {useSelector} from 'react-redux';
import style from './button.module.css';

function Button(props){
  const form = useSelector(state => state.form);

  return(
    <button type='button'
      className={`${style.sendBtn} ${(props.name === 'Я согласен') ? style.active : form.isDisableSendBtn ? '' : style.active }`}
      disabled={(props.name === 'Я согласен') ? false : form.isDisableSendBtn}
      onClick={props.func}>{props.name}</button>
  )
}

export default Button;