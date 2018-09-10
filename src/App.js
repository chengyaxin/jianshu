import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter,Route } from 'react-router-dom'
import Header from './common/header/index.js'
import store from './store/index.js'
import Home from './pages/home'
import Detail from './pages/detail/loadable.js'
import Login from './pages/login'
import Write from './pages/write'

class App extends Component {
  render() {
  	//exact表示只有地址栏的路径与写的路径完全一样时才显示对应内容
    return (
    	<Provider store={store}>
      			
	      		<BrowserRouter>
		      		<div>
                <Header />
		      			<Route path="/" exact component={Home}></Route>
		      			<Route path="/detail/:id" exact component={Detail}></Route>
                <Route path="/login" exact component={Login}></Route>
                <Route path="/write" exact component={Write}></Route>
		      		</div>
	      		</BrowserRouter>
      	</Provider>
    );
  }
}

export default App;
