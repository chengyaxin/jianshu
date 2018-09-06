import * as constants from './constants.js'
import { fromJS } from 'immutable'
//immutable中fromJS用来保证state不被修改的
const defaultState = fromJS({
	focused:false,
	mouseIn:false,
	list:[],
	page:1,
	totalPage:1
})

export default(state = defaultState,action)=>{
	switch(action.type)
	{
		case constants.SEARCH_FOCUS:
			//immutable对象的set方法，会结合之前的immutable对象的值和设置的值，返回一个全新的对象
			return state.set('focused',true)    //加入immutable后的写法
		case constants.SEARCH_BLUR:
			return state.set('focused',false)
		case constants.CHANGE_LIST:
		//相当于多次调用set
			return state.merge({
				list:action.data,
				totalPage:action.totalPage
			})
			// return state.set('list',action.data).set("totalPage",action.totalPage)
		case constants.MOUSE_ENTER:
			return state.set("mouseIn",true)
		case constants.MOUSE_LEAVE:
			return state.set("mouseIn",false)
		case constants.CHANGE_PAGE:
			return state.set("page",action.page)
		default:
			return state;
	}
}