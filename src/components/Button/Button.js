import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import style from './button.module.css';

function Button(props){
	const dispatch = useDispatch();
	const statusBtn = useSelector(state => state.form.isDisableSendBtn);

	function sendForm(){
		dispatch({type: 'form/sendForm', payload: ''});
	}

	return(
		<button type='button'
			className={`${style.sendBtn} ${statusBtn ? '' : style.active}`}
			disabled={statusBtn}
			onClick={sendForm}>{props.name}</button>
	)
}

export default Button;