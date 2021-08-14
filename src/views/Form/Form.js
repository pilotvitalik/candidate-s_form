import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Input from '@components/Input/Input';
import UploadFile from '@components/UploadFile/UploadFile';
import RadioButton from '@components/RadioButton/RadioButton';
import Checkbox from '@components/Checkbox/Checkbox';
import SendBtn from '@components/Button/Button';
import Modal from '@components/Modal/Modal';
import style from './form.module.css';

function Form(){
  const dispatch = useDispatch();
  const initForm = useSelector(state => state.form);

  useEffect(() => {
    dispatch({type: 'form/getInitialData', payload: ''})
  }, [dispatch])


  let personal = initForm.personalData.map((item) =>
    (item.type === 'file')
      ? <UploadFile key={item.id.toString()} data={item} block='PersonalData'/>
      : <Input key={item.id.toString()} data={item} block='PersonalData'/>
  )

  let gender = initForm.gender.map((item) =>
    <RadioButton key={item.id.toString()} data={item} block='Gender'/>
  )

  let other = initForm.other.map((item) =>
    <Input key={item.id.toString()} data={item} block='Other'/>
  )

  let agreement = initForm.agreement.map((item) =>
    <Checkbox key={item.id.toString()} data={item} block='Agreement'/>
  )

  return(
    <div className={style.form}>
      <h2>Анкета соискателя</h2>
      <div className={style.personalData}>
        <h4>Личные данные</h4>
        <div className={style.personalDataBlock}>
          {personal}
        </div>
      </div>
      <div className={style.gender}>
        <h4>Пол<sup>*</sup></h4>
        <div>
          {gender}
        </div>
      </div>
      <div className={style.other}>
        <h4>GitHub</h4>
        {other}
      </div>
      <div className={style.agreement}>
        {agreement}
      </div>
      <SendBtn name='Отправить'/>
      <Modal/>
    </div>
    )
}

export default Form;