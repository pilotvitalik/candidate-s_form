import React from 'react';
import style from './radioButton.module.css';

function RadioButton(props){
	return(
		<div className={style.radioButtonBlock}>
			<input id={`gender_${props.data.id}`} type={props.data.type} name={props.data.name}/>
			<label htmlFor={`gender_${props.data.id}`}>{props.data.title}</label>
		</div>
	)
}

export default RadioButton;