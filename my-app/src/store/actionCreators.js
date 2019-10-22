import {CHANGE_INPUT_VALUE,ADD_TODO_LIST,DELETE_TODO_ITEM,INIT_LIST,GET_INIT_LIST} from './actionTypes';
export const getInputChangeAction = (value)=>({
    type:CHANGE_INPUT_VALUE,
    value
});
export const getAddTodoListAction = ()=>({
    type:ADD_TODO_LIST
});
export const getDeleteTodoItemAction = (value)=>({
    type:DELETE_TODO_ITEM,
    value
});
export const initListAction = (list)=>({
    type:INIT_LIST,
    list
});
/*export const getToDoList = ()=>{
  return (dispatch)=>{
      axios.get('/api/list')
          .then(function (response) {
              // handle success
              console.log(response);
              const action = initListAction(response.data);
              dispatch(action);
          })
          .catch(function (error) {
              // handle error
              console.log(error);
          })
          .then(function () {
              // always executed
          });
  }
};*/
export const getInitList = ()=>({
   type:GET_INIT_LIST
});