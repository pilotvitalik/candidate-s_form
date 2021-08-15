import React from 'react';
import {useDispatch} from 'react-redux';
import style from './checkbox.module.css';

function Checkbox(props){
	const dispatch = useDispatch();

	function updCheckbox(e){
		dispatch({type: `form/upd${props.block}`,
			payload: {
				status: e.target.checked,
				name: props.data.name,
				id: props.data.id - 1
			}
		})
	}

	function showConfPolicy(){
		dispatch({type: 'form/confPolicy', payload: ''});
	}

	let link = props.data.link ? props.data.link : '';

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
			<span onClick={showConfPolicy}>{link}</span>
		</div>
	)
}

export default Checkbox;