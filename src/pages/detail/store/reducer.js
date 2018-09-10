import * as constants from './constants.js'
import { fromJS } from 'immutable'
//immutable中fromJS用来保证state不被修改的
const defaultState = fromJS({
	title:"",
	content:''
})

export default(state = defaultState,action)=>{
	switch(action.type)
	{
		case constants.CHANGE_DETAIL:
			return state.merge({
				title:action.title,
				content:action.content
			})
		default:
			return state;
	}
}