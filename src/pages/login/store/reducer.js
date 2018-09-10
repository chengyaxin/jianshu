import * as constants from './constants.js'
import { fromJS } from 'immutable'
//immutable中fromJS用来保证state不被修改的
const defaultState = fromJS({
	login:false,
})

export default(state = defaultState,action)=>{
	switch(action.type)
	{
		case constants.CHANGE_LOGIN:
			console.log(action.value)
			return state.set('login',fromJS(action.value));
		case constants.CHANGE_LOGOUT:
			return state.set('login',fromJS(action.value));
		default:
			return state;
	}
}