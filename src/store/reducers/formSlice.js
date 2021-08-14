import initData from '@api/initialData.json';

const initialState = {
  personalData: [
    {
      id: 1,
      title: "",
      name: "",
      placeholder: "",
      type:"text",
      value: "",
      isRequired: ""
    }
  ],
  gender: [
    {
      id: 1,
      title: "",
      name: "",
      type:"radio",
      value: ''
    }, 
  ],
  other: [
    {
      id: 1,
      title: "",
      name: "",
      placeholder: "",
      type:"text",
      value: "",
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
      isChecked: false,
      isRequired:true
    } 
  ],
  activeGender: '',
  requiredFields: [],
};

function getInitialData(form, type){
  switch(type){
    case 'personal':
      return form = initData.personalData;
    case 'gender':
      return form = initData.gender;
    case 'other':
      return form = initData.other;
    default:
      return form = initData.agreement;
  }
}

function setRequiredFields(requiredFields){
  let arr = [];
  for (let key in initData){
    arr = arr.concat(defineRequireField(initData[key]));
  }
  return Array.from(new Set(arr));
}

function defineRequireField(data){
  let arr = data.reduce((prev, item) => {
    if (item.isRequired) prev.push(item.name);
    return prev;
  }, [])
  return arr;
}

function updPersonalData(form, data){
  form[data.id].value = data.val;
  return form
}

function updOther(form, data){
  form[data.id].value = data.val;
  return form
}

function updAgreement(form, data){
  form[data.id].isChecked = data.status;
  return form;
}

function updGender(form, data){
  return form = data.val;
}

function upload(form, data){
  form[data.id].files = data.val;
  return form;
}

function removeRequireField(fields, data){
  if (fields.indexOf(data.name) > -1) fields.splice(fields.indexOf(data.name), 1);
  return fields;
}

export default function formReducer(state = initialState, action){
  switch(action.type){
    case 'form/getInitialData':
      return{
        ...state,
        personalData: getInitialData(state.personalData, 'personal'),
        gender: getInitialData(state.gender, 'gender'),
        other: getInitialData(state.other, 'other'),
        agreement: getInitialData(state.agreement, 'agreement'),
        requiredFields: setRequiredFields(state.requiredFields),
      };
    case 'form/updPersonalData':
      return{
        ...state,
        personalData: updPersonalData(state.personalData, action.payload),
        requiredFields: removeRequireField(state.requiredFields, action.payload),
      };
    case 'form/updOther':
      return{
        ...state,
        other: updOther(state.other, action.payload),
        requiredFields: removeRequireField(state.requiredFields, action.payload),
      }
    case 'form/updAgreement':
      return{
        ...state,
        agreement: updAgreement(state.agreement, action.payload),
        requiredFields: removeRequireField(state.requiredFields, action.payload),
      }
    case 'form/updGender':
      return{
        ...state,
        activeGender: updGender(state.activeGender, action.payload),
        requiredFields: removeRequireField(state.requiredFields, action.payload),
      }
    case 'form/upload':
      return{
        ...state,
        personalData: upload(state.personalData, action.payload),
        requiredFields: removeRequireField(state.requiredFields, action.payload),
      }
    default:
      return state;
  }
}