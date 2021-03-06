import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { DetailWrapper,Header,Content } from './style.js'
import { actionCreators } from './store'
class Detail extends PureComponent {
	render(){
		console.log(this.props.match.params.id)
		const { title,content } = this.props;
		//dangerouslySetInnerHTML={{__html:this.props.content}}内容不转义
		return (
				<DetailWrapper>
					<Header>{title}</Header>
					<Content dangerouslySetInnerHTML={{__html:this.props.content}}></Content>
				</DetailWrapper>
			)
	}
	componentDidMount()
	{
		this.props.getDetail(this.props.match.params.id);
		
	}
}
const mapState = (state) => ({
	title:state.getIn(['detail','title']),
	content:state.getIn(['detail','content'])
});
const mapDispatch = (dispatch) =>({
	getDetail(id)
	{
		dispatch(actionCreators.getDetail(id));
	}
})
export default connect(mapState,mapDispatch)(withRouter(Detail))