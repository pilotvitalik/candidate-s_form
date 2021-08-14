import React from 'react';
import {useDispatch} from 'react-redux';
import style from './input.module.css';

function Input(props){
	const dispatch = useDispatch();
	
	function validate(e){
		dispatch({type: `form/upd${props.block}`, 
			payload: {
				val: e.target.value,
				id: props.data.id - 1
			}
		});
	}

	return(
		<div className={style.inputBlock}>
			<label htmlFor={`${props.block}_${props.data.id}`}>
				{props.data.title}
				{props.data.isRequired &&
					<sup>*</sup>
				}
			</label>
			<input id={`${props.block}_${props.data.id}`}
				type={props.data.type}
				className={style.modalBtn}
				placeholder={props.data.placeholder}
				value={props.data.value}
				onChange={validate}/>
		</div>
	)
}

export default Input;