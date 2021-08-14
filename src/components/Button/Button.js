import React from 'react';
import style from './button.module.css';

function Button(props){
	return(
		<button type='button' className={style.modalBtn}>{props.name}</button>
	)
}

export default Button;