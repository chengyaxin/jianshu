import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter,Route } from 'react-router-dom'
import Header from './common/header/index.js'
import store from './store/index.js'
import Home from './pages/home'
import Detail from './pages/detail'

class App extends Component {
  render() {
  	//exact表示只有地址栏的路径与写的路径完全一样时才显示对应内容
    return (
    	<Provider store={store}>
      		<div>
      			<Header />
	      		<BrowserRouter>
		      		<div>
		      			<Route path="/" exact component={Home}></Route>
		      			<Route path="/detail" exact component={Detail}></Route>
		      		</div>
	      		</BrowserRouter>
      		</div>
      	</Provider>
    );
  }
}

export default App;
