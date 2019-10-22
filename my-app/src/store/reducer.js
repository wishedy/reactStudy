import {CHANGE_INPUT_VALUE,ADD_TODO_LIST,DELETE_TODO_ITEM,INIT_LIST} from '../store/actionTypes';
const defaultState = {
    inputVal:"",
    list:[]
};
export default (state=defaultState,action)=>{
    console.log(action);
    if(action.type===CHANGE_INPUT_VALUE){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputVal = action.value;
        return newState;
    }
    if(action.type===ADD_TODO_LIST){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputVal);
        newState.inputVal = '';
        return newState;
    }
    if(action.type===DELETE_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.value,1);
        return newState;
    }
    if(action.type===INIT_LIST){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.list;
        return newState;
    }
    return state;
}