import React from 'react';
import style from './uploadFile.module.css'

function UploadFile(){
	return(
		<div className={style.uploadFileBlock}>
		   <input name="file" type="file" id="input__file" multiple/>
		   <label for="input__file" className={style.btn}>
		   	  <div className={style.plusBlock}>
		   	  	<span></span>
		   	  	<span></span>
		   	  </div>
		      <span>Загрузить резюме</span>
		   </label>
		</div>
	)
}

export default UploadFile;