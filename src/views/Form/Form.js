import React from 'react';
import Input from '@components/Input/Input';
import UploadFile from '@components/UploadFile/UploadFile';
import style from './form.module.css';

function Form(){
	return(
		<div className={style.form}>
			<h2>Анкета соискателя</h2>
			<div className={style.personalData}>
				<h4>Личные данные</h4>
				<Input/>
				<Input/>
				<Input/>
				<UploadFile/>
			</div>
		</div>
	)
}

export default Form;