import React from 'react';
import Button from '@components/Button/Button';
import ConfPolicy from '@views/Agreement/ConfPolicy/ConfPolicy';
import closeBtn from '@assets/modal/close.svg';
import {useSelector, useDispatch} from 'react-redux';
import style from './modal.module.css';

function Modal(){
  const dispatch = useDispatch();
  const form = useSelector(state => state.form);

  function closeModal(){
    dispatch({type: 'form/closeModal', payload: ''})
  }

  function closeAgreeModal(){
    dispatch({type: 'form/closeAgreeModal', payload: ''})
  }

  let title = (form.typeModal === 'send')
    ? `Спасибо ${form.personalData[0].value}!`
    : 'Политика конфиденциальности';

  let content = (form.typeModal === 'send')
    ? <p className={style.invite}>Мы скоро свяжемся с Вами</p>
    : <ConfPolicy/>

  let titleBtn = (form.typeModal === 'send')
    ? 'Понятно'
    : 'Я согласен'

  return(
    <div className={`${style.modal} ${form.isShowModal ? style.showModal : ''}`}>
      <div className={`${style.dialog} ${(form.typeModal !== 'send') ? style.agreement : ''}`}>
        <div className={style.content}>
          <div className={style.header}>
            <h3 className={style.title}>{title}</h3>
            <button type='button' className={style.close} onClick={closeModal}>
              <img src={closeBtn} alt='close'/>
            </button>
          </div>
          <div className={`${style.body} ${(form.typeModal !== 'send') ? style.agreement : ''}`}>    
            {content}
          </div>
          <div className={style.footer}>    
            <Button name={titleBtn} func={(form.typeModal === 'send') ? closeModal : closeAgreeModal}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal;