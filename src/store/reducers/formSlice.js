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
      isRequired: "",
      typeValidate: "",
      isValidate: false,
      isError: false,
      error: ""
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
      isRequired:false,
      typeValidate: "",
      isValidate: false,
      isError: false,
      error: ""
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
  validateFields: [],
  isDisableSendBtn: true,
  isValidate: false
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

function setValidateFields(validateFields){
  let arr = [];
  let preArr = '';
  for (let key in initData){
    preArr = defineValidateField(initData[key]);
    if (preArr) arr = arr.concat(preArr);
  }
  return arr;
}

function defineRequireField(data){
  let arr = data.reduce((prev, item) => {
    if (item.isRequired) prev.push(item.name);
    return prev;
  }, [])
  return arr;
}

function defineValidateField(data){
  let arr = data.reduce((prev, item) => {
    if (item.hasOwnProperty('typeValidate')) prev.push(item.name);
    return prev;
  }, [])
  return arr;
}

function updPersonalData(form, data){
  form[data.id].value = data.val;
  form[data.id].isValidate = checkValidate(form[data.id], data.val);
  if (form[data.id].isValidate)form[data.id].isError = false;
  return form
}

function updOther(form, data){
  form[data.id].value = data.val;
  form[data.id].isValidate = checkValidate(form[data.id], data.val);
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

function removeRequireField(state, data){
  if (state.requiredFields.indexOf(data.name) > -1) state.requiredFields.splice(state.requiredFields.indexOf(data.name), 1);
  return state.requiredFields;
}

function checkAllFill(state){
  if (state.requiredFields.length === 0) return false;
  return true;
}

function sendForm(state){
  if (state.validateFields.length === 0) return true;
  return false;
}

function checkValidate(form, val){
  let isValidate = '';
  form.typeValidate.forEach(item => {
    isValidate = validate(item, val);
  })
  return isValidate;
}

function validate(type, val){
  let regexp;
  switch(type){
    case 'letters':
      regexp = /\d/gm;
      if (val.match(regexp)){
        return false
      } else {
        return true
      }
    case 'email':
      regexp = /^[a-zA-Z][a-zA-Z0-9]+@{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,4}$/gm;
      if (val.match(regexp)){
        return true
      } else {
        return false
      }
    default:
      return true
  }
}

function triggerValidateField(state, data){
  let blockName = data.block[0].toLowerCase() + data.block.slice(1);
  let index = state.validateFields.indexOf(data.name);
  if (!state[blockName][data.id].isValidate) {
    if (index === -1) state.validateFields.push(data.name)
  } else {
    if (index !== -1) state.validateFields.splice(index, 1)
  }
console.log(state)
  return state.validateFields;
}

function errPersonalData(personalData, data){
  if (!personalData[data.id].isValidate){
    personalData[data.id].isError = true;
  } else {
    personalData[data.id].isError = false;
  }
  return personalData;
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
        validateFields: setValidateFields(state.validateFields),
      };
    case 'form/updPersonalData':
      return{
        ...state,
        personalData: updPersonalData(state.personalData, action.payload),
        requiredFields: removeRequireField(state, action.payload),
        validateFields: triggerValidateField(state, action.payload),
        isDisableSendBtn: checkAllFill(state)
      };
    case 'form/updOther':
      return{
        ...state,
        other: updOther(state.other, action.payload),
        requiredFields: removeRequireField(state, action.payload),
        validateFields: triggerValidateField(state, action.payload),
        isDisableSendBtn: checkAllFill(state)
      }
    case 'form/updAgreement':
      return{
        ...state,
        agreement: updAgreement(state.agreement, action.payload),
        requiredFields: removeRequireField(state, action.payload),
        isDisableSendBtn: checkAllFill(state)
      }
    case 'form/updGender':
      return{
        ...state,
        activeGender: updGender(state.activeGender, action.payload),
        requiredFields: removeRequireField(state, action.payload),
        isDisableSendBtn: checkAllFill(state)
      }
    case 'form/upload':
      return{
        ...state,
        personalData: upload(state.personalData, action.payload),
        requiredFields: removeRequireField(state, action.payload),
        isDisableSendBtn: checkAllFill(state)
      }
    case 'form/sendForm':
      return{
        ...state,
        isValidate: sendForm(state),
      }
    case 'form/errPersonalData':
      return{
        ...state,
        personalData: errPersonalData(state.personalData, action.payload),
      };
    default:
      return state;
  }
}