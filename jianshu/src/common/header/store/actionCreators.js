import * as constants from "./constants";
import axios from 'axios';
import {fromJS} from 'immutable';
export const getFocusAction = ()=>({
    type:constants.SEARCH_FOCUS
});
export const getBlurAction = ()=>({
    type:constants.SEARCH_BLUR
});
export const changeList = (data)=>({
   type:constants.CHANGE_LIST,
   list:fromJS(data),
    totalPage: Math.ceil(data.length/10)
});
export const getMouseEnterAction = ()=>({
  type:constants.MOUSE_ENTER
});
export const getMouseLeaveAction = ()=>({
  type:constants.MOUSE_LEAVE
});
export const getChangePageAction = (num)=>({
    type:constants.CHANGE_PAGE,
    page:num
});
export const getList = ()=>{
    return (dispatch)=>{
        axios.get("api/headerList.json").then((res)=>{
            const action = changeList(res.data);
            dispatch(action);
        }).catch((error)=>{
            console.log(error);
        });
    }
};