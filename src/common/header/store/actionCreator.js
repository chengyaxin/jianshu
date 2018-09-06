import * as constants from './constants.js'
import { fromJS } from 'immutable'
import axios from 'axios'
export const searchFocus = ()=>({
	type:constants.SEARCH_FOCUS
})
export const searchBlur = ()=>({
	type:constants.SEARCH_BLUR
})

export const getList = () => {
	return (dispatch)=>{
		axios.get("/api/headerList.json").then((res)=>{
			if(res.data.success)
			{
				const data = res.data.data;
				const action = changeList(data)
				dispatch(action);
			}
		}).catch(()=>{
			console.log('err');
		})
	}
}
export const mouseEnter = () => ({
	type:constants.MOUSE_ENTER
})
export const mouseLeave = () => ({
	type:constants.MOUSE_LEAVE
})
export const changePage = (page) => ({
	type:constants.CHANGE_PAGE,
	page:page
})

//data类型要与reducer里的list类型保持一致,均为immutable类型
const changeList = (data) => ({
	type:constants.CHANGE_LIST,
	data:fromJS(data),
	totalPage:Math.ceil(data.length/10)
})