import React from 'react';
import style from './checkbox.module.css';

function Checkbox(props){
	return(
		<div className={style.checkBoxBlock}>
			<input id={`agreement_${props.data.id}`}
				type={props.data.type}/>
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