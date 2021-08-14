import React from 'react';
import {useDispatch} from 'react-redux';
import style from './uploadFile.module.css'

function UploadFile(props){
	const dispatch = useDispatch();

	function upload(e){
		dispatch({type: 'form/upload',
			payload: {
				val: e.target.files,
				name: props.data.name,
				id: props.data.id - 1
			}
		})
	}

	return(
		<div className={style.uploadFileBlock}>
		   <input id={`${props.block}_${props.data.id}`}
		   		name={props.data.name}
		   		type={props.data.type}
		   		onChange={upload}/>
		   <label htmlFor={`${props.block}_${props.data.id}`} className={style.btn}>
		   	  <div className={style.plusBlock}>
		   	  	<span></span>
		   	  	<span></span>
		   	  </div>
		      <span>{props.data.title}</span>
		   </label>
		</div>
	)
}

export default UploadFile;