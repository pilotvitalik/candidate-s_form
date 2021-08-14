import React from 'react';
import style from './input.module.css';

function Input(){
	return(
		<div className={style.inputBlock}>
			<label htmlFor='inp1'>Имя<sup>*</sup></label>
			<input id='inp1' type='text' className={style.modalBtn} placeholder='Имя'/>
		</div>
	)
}

export default Input;