import React from 'react';
import Input from '@components/Input/Input';
import UploadFile from '@components/UploadFile/UploadFile';
import RadioButton from '@components/RadioButton/RadioButton';
import Checkbox from '@components/Checkbox/Checkbox';
import SendBtn from '@components/Button/Button';
import style from './form.module.css';

function Form(){
	return(
		<div className={style.form}>
			<h2>Анкета соискателя</h2>
			<div className={style.personalData}>
				<h4>Личные данные</h4>
				<div className={style.fullname}>
					<Input/>
					<Input/>
				</div>
				<div className={style.contact}>
					<Input/>
					<UploadFile/>
				</div>
			</div>
			<div className={style.gender}>
				<h4>Пол<sup>*</sup></h4>
				<div>
					<RadioButton/>
					<RadioButton/>
				</div>
			</div>
			<div className={style.github}>
				<h4>GitHub</h4>
				<Input/>
			</div>
			<div className={style.agreement}>
				<Checkbox/>
			</div>
			<SendBtn/>
		</div>
	)
}

export default Form;