import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Input from '@components/Input/Input';
import UploadFile from '@components/UploadFile/UploadFile';
import RadioButton from '@components/RadioButton/RadioButton';
import Checkbox from '@components/Checkbox/Checkbox';
import SendBtn from '@components/Button/Button';
import style from './form.module.css';

function Form(){
  const dispatch = useDispatch();
  const initForm = useSelector(state => state.form.form);

  useEffect(() => {
    dispatch({type: 'form/getInitialData', payload: ''})
  }, [dispatch])

  console.log(initForm.personalData);

  let personalData = initForm.personalData.map((item) =>
    (item.type === 'text')
      ? <Input key={item.id.toString()} data={item}/>
      : <UploadFile key={item.id.toString()} data={item}/>
  )

  let gender = initForm.gender.map((item) =>
    <RadioButton key={item.id.toString()} data={item}/>
  )

  let other = initForm.other.map((item) =>
    <Input key={item.id.toString()} data={item}/>
  )

  let agreement = initForm.agreement.map((item) =>
    <Checkbox key={item.id.toString()} data={item}/>
  )

  return(
    <div className={style.form}>
      <h2>Анкета соискателя</h2>
      <div className={style.personalData}>
        <h4>Личные данные</h4>
        {personalData}
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
    </div>
    )
}

export default Form;