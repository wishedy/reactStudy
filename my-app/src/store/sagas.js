import { takeEvery,put} from 'redux-saga/effects';
import {GET_INIT_LIST} from './actionTypes';
import {initListAction} from './actionCreators';
import axios from 'axios';
function* getInitList(){
    try{
        console.log('abc');
        const response = yield axios.get('/api/list');
        const action = initListAction(response.data);
        console.log(action);
        yield put(action);
    }catch (e) {
        console.log('get list error');
    }
}
function* mySaga() {
    yield takeEvery(GET_INIT_LIST, getInitList);
}
export default mySaga;