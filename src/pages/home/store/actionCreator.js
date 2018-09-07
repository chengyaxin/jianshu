import * as constants from './constants.js'
import { fromJS } from 'immutable'
import axios from 'axios'

const changeHomeData = (data) => ({
	type:constants.CHANGE_HOME_DATA,
	topicList:data.topicList,
	articleList:data.articleList,
	recommendList:data.recommendList
})
const addHomeList = (data,nextPage) => ({
	type:constants.ADD_HOME_DATA,
	list:data,
	nextPage:nextPage
})
export const getHomeInfo = () => {
	return (dispatch)=>{
		axios.get("/api/home.json").then((res)=>{
			if(res.data.success)
			{
				const data = res.data.data
				const action = changeHomeData(data)
				dispatch(action)
			}
		}).catch(()=>{
			console.log('err');
		})
	}
}
export const getMoreList = (page) => {
	return (dispatch) => {
		axios.get("api/homeList.json?page="+page).then((res)=>{
			if(res.data.success)
			{
				const data = res.data.data
				const action = addHomeList(data,page+1)
				dispatch(action)
			}
		})
	}
}
export const toggleTopShow = (show) => ({
	type:constants.TOGGLE_SCROLL_TOP,
	show:show
})


