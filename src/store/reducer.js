import { combineReducers } from 'redux-immutable'
import { reducer as headerReducer } from '../common/header/store'
import { reducer as homeReducer } from '../pages/home/store'
import { reducer as detailReducer } from '../pages/detail/store/index.js'
import { reducer as loginDetail } from '../pages/login/store/index.js'
export default combineReducers({
	header:headerReducer,
	home:homeReducer,
	detail:detailReducer,
	login:loginDetail
})