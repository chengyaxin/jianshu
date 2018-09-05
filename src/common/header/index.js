import React from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreator } from './store/index.js' 
import { HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button,SearchWrapper } from './style.js'
const Header = (props) => {
	return (
			<HeaderWrapper>
				<Logo />
				<Nav>
					<NavItem className="left active">首页</NavItem>
					<NavItem className="left"><i className="iconfont">&#xe631;</i>下载App</NavItem>
					<NavItem className="right">登录</NavItem>
					<NavItem className="right"><i className="iconfont">&#xe636;</i></NavItem>
					<SearchWrapper>
						<CSSTransition in={props.focused} timeout={200} classNames="slide">
							<NavSearch 
							className={props.focused ? 'focused':''} 
							onFocus={props.handInputFocus}
							onBlur={props.handInputBlur}
							></NavSearch>
						</CSSTransition>
						<i className={props.focused ? 'focused iconfont':'iconfont'}>&#xe614;</i>
					</SearchWrapper>
				</Nav>
				<Addition>
					<Button className="reg">注册</Button>
					<Button className="writting"><i className="iconfont">&#xe62a;</i>写文章</Button>
				</Addition>
			</HeaderWrapper>
		)
}

const mapStateToProps = (state)=>{
	return {
		focused:state.header.get('focused')
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		handInputFocus()
		{
			const action = actionCreator.searchFocus()
			dispatch(action)
		},
		handInputBlur()
		{
			const action = actionCreator.searchBlur()
			dispatch(action)
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);