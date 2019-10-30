import React,{Fragment} from 'react';
import {Globalstyle } from  './style.js';
import {Provider} from 'react-redux';
import Home from './pages/home';
import Detail from './pages/detail';
import {BrowserRouter,Route} from 'react-router-dom';
import store from './store/index';
import Header from './common/header/index';
function App() {
  return (
    <Fragment>
        {/*全局样式*/}
        <Globalstyle/>
        <Provider store={store}>
            <Header/>
            <BrowserRouter>
                <Fragment>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/detail" exact component={Detail}></Route>
                </Fragment>
            </BrowserRouter>
        </Provider>
    </Fragment>
  );
}

export default App;
