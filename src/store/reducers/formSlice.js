import initData from '@api/initialData.json';

const initialState = {
	form: {
		personalData: [
			{
			  "id": 1,
			  "title": "",
			  "name": "",
			  "placeholder": "",
			  "type":"text",
			  "isRequired": ""
			}
		],
		gender: [
		  {
		    id: 1,
		    title: "",
		    name: "",
		    type:"radio",
		    value: 1
		  }, 
		],
		other: [
		  {
		    id: 1,
		    title: " ссылку на Github",
		    name: "",
		    placeholder: "",
		    type:"text",
		    isRequired:false
		  }
		],
		agreement: [
		  {
		    id: 1,
		    title: "",
		    name: "",
		    type:"checkbox",
		    value: 1,
		    isRequired:true
		  } 
		]
	},
};

function getInitialData(form){
	return initData;
}

export default function formReducer(state = initialState, action){
	switch(action.type){
		case 'form/getInitialData':
			return{
				...state,
				form: getInitialData(state.form)
			}	
		default:
			return state;
	}
}