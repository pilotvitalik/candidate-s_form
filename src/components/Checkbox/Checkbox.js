import React from 'react';
import style from './checkbox.module.css';

function Checkbox(){
	return(
		<div className={style.checkBoxBlock}>
			<input id='inp10' type='checkbox' placeholder='Имя'/>
			<label htmlFor='inp10'>Мужской</label>
		</div>
	)
}

export default Checkbox;