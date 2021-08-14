import React from 'react';
import {useDispatch} from 'react-redux';
import style from './checkbox.module.css';

function Checkbox(props){
	const dispatch = useDispatch();

	function updCheckbox(e){
		dispatch({type: `form/upd${props.block}`,
			payload: {
				status: e.target.checked,
				id: props.data.id - 1
			}
		})
	}

	return(
		<div className={style.checkBoxBlock}>
			<input id={`agreement_${props.data.id}`}
				type={props.data.type}
				checked={props.data.isChecked}
				onChange={updCheckbox}/>
			<label htmlFor={`agreement_${props.data.id}`}>
				{props.data.isRequired &&
					<sup>*</sup>
				}
				{props.data.title}
			</label>
		</div>
	)
}

export default Checkbox;