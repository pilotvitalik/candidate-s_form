import React from 'react';
import {useSelector} from 'react-redux';
import style from './button.module.css';

function Button(props){
	const statusBtn = useSelector(state => state.form.isDisableSendBtn);

	return(
		<button type='button'
			className={`${style.sendBtn} ${statusBtn ? '' : style.active}`}
			disabled={statusBtn}>{props.name}</button>
	)
}

export default Button;