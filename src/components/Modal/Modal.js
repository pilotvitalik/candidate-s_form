import React from 'react';
import Button from '@components/Button/Button';
import closeBtn from '@assets/modal/close.svg';
import {useSelector, useDispatch} from 'react-redux';
import style from './modal.module.css';

function Modal(){
	const dispatch = useDispatch();
	const form = useSelector(state => state.form);

	let content = (form.typeModal === 'send')
		? <p className={style.invite}>Мы скоро свяжемся с Вами</p>
		: <p>{form.agreement[0].description}</p>

	function closeModal(){
		dispatch({type: 'form/closeModal', payload: ''})
	}

	return(
		<div className={`${style.modal} ${form.isShowModal ? style.showModal : ''}`}>
		  <div className={style.dialog}>
		    <div className={style.content}>
		      <div className={style.header}>
		        <h3 className={style.title}>Спасибо {form.personalData[0].value}!</h3>
		        <button type='button' className={style.close} onClick={closeModal}>
		        	<img src={closeBtn} alt='close'/>
		        </button>
		      </div>
		      <div className={style.body}>    
		        {content}
		      </div>
		      <div className={style.footer}>    
		        <Button name='Понятно' func={closeModal}/>
		      </div>
		    </div>
		  </div>
		</div>
	)
}

export default Modal;