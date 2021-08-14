import React from 'react';
import style from './input.module.css';

function Input(props){
	console.log(props.data.isRequired)
	return(
		<div className={style.inputBlock}>
			<label htmlFor={`personal_${props.data.id}`}>
				{props.data.title}
				{props.data.isRequired &&
					<sup>*</sup>
				}
			</label>
			<input id={`personal_${props.data.id}`}
				type={props.data.type}
				className={style.modalBtn}
				placeholder={props.data.placeholder}/>
		</div>
	)
}

export default Input;