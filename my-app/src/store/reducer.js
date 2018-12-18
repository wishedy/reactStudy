const defaultState = {//实际的数据仓库
    inputValue:'',
    errorText:false,
    list:[
    ]
};
export default (state=defaultState,action)=>{
    console.log(state,action);
    if(action.type==='change_input_value'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }else if(action.type==='add_todo_item'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = [...newState.list,action.value];
        newState.inputValue = '';
        return newState;
    }else if(action.type==='show_error_text'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.errorText = action.value;
        return newState;
    }else if(action.type==='hide_error_text'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.errorText = action.value;
        return newState;
    }
    return state;
}