import React from 'react';
import style from './button.module.css';

function Button(){
	return(
		<button type='button' className={style.sendBtn + ' ' + style.pressed}>Отправить</button>
	)
}

export default Button;