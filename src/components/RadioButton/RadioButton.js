import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import style from './radioButton.module.css';

function RadioButton(props){
	const dispatch = useDispatch();
	const activeGender = useSelector(state => state.form.activeGender);

	function updRadio(e){
		dispatch({type: `form/upd${props.block}`, 
			payload: {
				val: props.data.id,
				id: props.data.id - 1
			}
		})
	}

	return(
		<div className={style.radioButtonBlock}>
			<input id={`gender_${props.data.id}`}
				type={props.data.type}
				name={props.data.name}
				checked={activeGender === props.data.id}
				onChange={updRadio}/>
			<label htmlFor={`gender_${props.data.id}`}>{props.data.title}</label>
		</div>
	)
}

export default RadioButton;