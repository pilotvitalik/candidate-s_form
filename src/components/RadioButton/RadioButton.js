import React from 'react';
import style from './radioButton.module.css';

function RadioButton(){
	return(
		<div className={style.radioButtonBlock}>
			<input id='inp1' type='radio' placeholder='Имя'/>
			<label htmlFor='inp1'>Мужской</label>
		</div>
	)
}

export default RadioButton;