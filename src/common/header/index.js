import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreator } from './store/index.js' 
import { HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button,SearchWrapper,SearchInfo,SearchInfoTitle,SearchInfoSwitch,SearchInfoItem,SearchInfoList } from './style.js'
import { Link } from 'react-router-dom'
class Header extends Component {
	getListArea = () => {
		const { mouseIn,focused,list,page,handleMouseEnter,handleMouseLeave,handleChangePage,totalPage } = this.props;
		const jsList = list.toJS();
		const pageList = []
		if(jsList.length)
		{
			for(let i=(page-1)*10;i<page*10;i++)
			{
				if(jsList[i])
				{
					pageList.push(
						<SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
					)
				}
			}
		}
		
		if(focused || mouseIn)
		{
			return (
					<SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
						<SearchInfoTitle>
							热门搜索
							<SearchInfoSwitch onClick={()=>handleChangePage(page,totalPage,this.spinIcon)}>
								<i ref={(icon)=>{this.spinIcon=icon}} className='iconfont spin'>&#xe62d;</i>
								换一批
							</SearchInfoSwitch>
						</SearchInfoTitle>
						<SearchInfoList>
							{pageList}
						</SearchInfoList>
					</SearchInfo>
				)
		}else{
			return null;
		}
  }
	render()
	{
		const { focused,handInputFocus,handInputBlur,list } = this.props;
		return (
			<HeaderWrapper>
				<Link to="/">
					<Logo />
				</Link>
				<Nav>
					<NavItem className="left active">首页</NavItem>
					<NavItem className="left"><i className="iconfont">&#xe631;</i>下载App</NavItem>
					<NavItem className="right">登录</NavItem>
					<NavItem className="right"><i className="iconfont">&#xe636;</i></NavItem>
					<SearchWrapper>
						<CSSTransition in={this.props.focused} timeout={200} classNames="slide">
							<NavSearch 
							className={focused ? 'focused':''} 
							onFocus={()=>handInputFocus(list)}
							onBlur={handInputBlur}
							></NavSearch>
						</CSSTransition>
						<i className={focused ? 'focused iconfont zoom':'iconfont zoom'}>&#xe614;</i>
						{this.getListArea()}
					</SearchWrapper>
				</Nav>
				<Addition>
					<Button className="reg">注册</Button>
					<Button className="writting"><i className="iconfont">&#xe62a;</i>写文章</Button>
				</Addition>
			</HeaderWrapper>
		)
	}
}

const mapStateToProps = (state)=>{
	//取header下的focused值
	return {
		focused:state.getIn(["header","focused"]),
		list:state.getIn(["header","list"]),
		page:state.getIn(["header","page"]),
		totalPage:state.getIn(["header","totalPage"]),
		mouseIn:state.getIn(["header","mouseIn"])
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		handInputFocus(list)
		{
			if(list.size===0)
			{
				dispatch(actionCreator.getList());
			}
			const action = actionCreator.searchFocus()
			dispatch(action)
		},
		handInputBlur()
		{
			const action = actionCreator.searchBlur()
			dispatch(action)
		},
		handleMouseEnter()
		{
			dispatch(actionCreator.mouseEnter())
		},
		handleMouseLeave()
		{
			dispatch(actionCreator.mouseLeave())
		},
		handleChangePage(page,totalPage,spin)
		{
			let originAngle = spin.style.transform.replace(/[^0-9]/ig,"");
			if(originAngle)
			{
				originAngle = parseInt(originAngle,10)
			}else{
				originAngle = 0
			}
			originAngle = originAngle + 360;
			spin.style.transform = "rotate("+originAngle+"deg)";
			console.log(spin.style.transform);
			if(page < totalPage)
			{
				dispatch(actionCreator.changePage(page+1))
			}else{
				dispatch(actionCreator.changePage(1))
			}	
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);