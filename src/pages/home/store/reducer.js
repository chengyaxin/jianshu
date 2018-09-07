import * as constants from './constants.js'
import { fromJS } from 'immutable'
//immutable中fromJS用来保证state不被修改的
const defaultState = fromJS({
	topicList:[],
	articleList:[],
	recommendList:[],
	articlePage:1,
	showScroll:false
})
const changeHomeData = (state,action) => {
	return state.merge({
		'topicList':fromJS(action.topicList),
		'articleList':fromJS(action.articleList),
		'recommendList':fromJS(action.recommendList),
	})
}
const addHomeData = (state,action) => {
	return state.merge({
			'articleList':state.get('articleList').concat(fromJS(action.list)),
			'articlePage':fromJS(action.nextPage)
		})
}
export default(state = defaultState,action)=>{
	switch(action.type)
	{
		case constants.CHANGE_HOME_DATA:
			return changeHomeData(state,action)
		case constants.ADD_HOME_DATA:
			return addHomeData(state,action)
		case constants.TOGGLE_SCROLL_TOP:
			return state.set('showScroll',fromJS(action.show))
		default:
			return state;
	}
}