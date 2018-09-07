import React, { PureComponent } from 'react'
import { HomeWrapper,HomeLeft,HomeRight,BackTop } from './style.js'
import Topic from './components/Topic.js'
import List from './components/List.js'
import Recommend from './components/Recommend.js'
import Writer from './components/Writer.js'
import { connect } from 'react-redux'
import { actionCreator } from './store/index.js' 
class Home extends PureComponent {
	handleScrollTop()
	{
		console.log("5678");
		 document.body.animate({scrollTop:0},100);
		// window.scrollTo(0,0);
	}
	render(){
		return (
				<HomeWrapper>
					<HomeLeft>
						<img className="banner_img" src="https://upload.jianshu.io/admin_banners/web_images/4435/c1d3ca63353c8bd527f0d781605516cb5b266d02.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"  alt=""/>
						<Topic />
						<List />
					</HomeLeft>
					<HomeRight>
						<Recommend />
						<Writer />
					</HomeRight>
					{
						this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>:null
					}
				</HomeWrapper>
			)
	}
	componentDidMount(){
		this.props.changeHomeData()
		this.bindEvents();
	}
	componentWillUnmount()
	{
		//当BackTop组件被销毁时执行
		window.removeEventListener("scroll",this.props.changeScrollTopShow)
	}
	bindEvents()
	{
		window.addEventListener("scroll",this.props.changeScrollTopShow)
	}
}
const mapState = (state) => ({
	showScroll:state.getIn(["home","showScroll"])
})
const mapDispatch = (dispatch) =>({
	changeHomeData()
	{
		const action = actionCreator.getHomeInfo()
		dispatch(action)
	},
	changeScrollTopShow()
	{
		if(document.documentElement.scrollTop>100)
		{
			const action = actionCreator.toggleTopShow(true)
			dispatch(action)
		}else{
			const action = actionCreator.toggleTopShow(false)
			dispatch(action)
		}
	}
})
export default connect(mapState,mapDispatch)(Home)