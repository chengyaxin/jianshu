import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { ListItem,ListInfo,LoadMore } from '../style.js'
import { actionCreator } from '../store/index.js' 
import { Link } from 'react-router-dom'
class List extends PureComponent {
	render(){
		const { list,getMoreList,page } = this.props;
		return (
			<div>
			{ list.map((item,index)=>{
				return (
					<Link key={index} to="/detail">
					<ListItem >
						<img className="pic" src={item.get("imgUrl")} alt=""/>
						<ListInfo>
							<h3 className="title">{item.get("title")}</h3>
							<p className="desc">{item.get("desc")}</p>
						</ListInfo>
					</ListItem>	
					</Link>
				)
			})}
			<LoadMore onClick={()=>getMoreList(page)}>加载更多</LoadMore>
			</div>
		)
	}
}
const mapState = (state) => ({
	list:state.getIn(["home","articleList"]),
	page:state.getIn(['home','articlePage'])
})
const mapDispatch = (dispatch) =>({
	getMoreList(page)
	{
		const action = actionCreator.getMoreList(page);
		dispatch(action)
	}
})
export default connect(mapState,mapDispatch)(List)