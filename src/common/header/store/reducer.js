import * as constants from './constants.js'
import { fromJS } from 'immutable'
//immutable中fromJS用来保证state不被修改的
const defaultState = fromJS({
	focused:false
})

export default(state = defaultState,action)=>{
	if(action.type === constants.SEARCH_FOCUS)
	{
		// return {
		// 	focused:true
		// }
		
		//immutable对象的set方法，会结合之前的immutable对象的值和设置的值，返回一个全新的对象
		return state.set('focused',true)    //加入immutable后的写法
	}
	if(action.type === constants.SEARCH_BLUR)
	{
		// return {
		// 	focused:false
		// }
		return state.set('focused',false)
	}
	return state;
}