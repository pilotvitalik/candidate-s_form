const initialState = {
    text: 1
}

function increment(num){
    return ++num;
}

export default function defaultReducer(state = initialState, action){
    switch(action.type){
        case 'default/increment':
            return {
                ...state,
                text: increment(state.text)
            }
        default:
            return state;
    }
}