import React from 'react';
import Button from '@components/Button/Button';
import closeBtn from '@assets/modal/close.svg';
import style from './modal.module.css';

function Modal(){
	return(
		<div className={style.modal}>
		  <div className={style.dialog}>
		    <div className={style.content}>
		      <div className={style.header}>
		        <h3 className={style.title}>Спасибо Егор!</h3>
		        <button type='button' className={style.close}>
		        	<img src={closeBtn} alt='close'/>
		        </button>
		      </div>
		      <div className={style.body}>    
		        <p className={style.invite}>Мы скоро свяжемся с Вами</p>
		      </div>
		      <div className={style.footer}>    
		        <Button/>
		      </div>
		    </div>
		  </div>
		</div>
	)
}

export default Modal;