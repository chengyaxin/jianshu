import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { WriterWrapper,WriterItem,WriterTitle } from '../style.js'
class Writer extends PureComponent {
	render(){
		return (
				<WriterWrapper>
					<WriterTitle>
						<span className="recommend-writer">推荐作者</span>
						<span className="switch-writer">换一批</span>
					</WriterTitle>
					<WriterItem>
						<img  className="writer-pic" src="https://upload.jianshu.io/users/upload_avatars/6305091/b1912e7b-20d1-41a6-94f3-5a0d1c81fc5a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt="" />
						<h4 className="writer-name">
						只有一半影子的人
							<span className="writer-follow">
								关注
							</span>
						</h4>
						<p className="writer-info">写了222k字 · 652喜欢</p>
					</WriterItem>
					<WriterItem>
						<img  className="writer-pic" src="https://upload.jianshu.io/users/upload_avatars/6305091/b1912e7b-20d1-41a6-94f3-5a0d1c81fc5a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt="" />
						<h4 className="writer-name">
						只有一半影子的人
							<span className="writer-follow">
								关注
							</span>
						</h4>
						<p className="writer-info">写了222k字 · 652喜欢</p>
					</WriterItem>
					<WriterItem>
						<img  className="writer-pic" src="https://upload.jianshu.io/users/upload_avatars/6305091/b1912e7b-20d1-41a6-94f3-5a0d1c81fc5a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt="" />
						<h4 className="writer-name">
						只有一半影子的人
							<span className="writer-follow">
								关注
							</span>
						</h4>
						<p className="writer-info">写了222k字 · 652喜欢</p>
					</WriterItem>
				</WriterWrapper>
			)
	}
}
const mapState = (state) => ({
	list:state.get("home").get("recommendList")
})
const mapDispatch = (dispatch) =>({

})
export default connect(mapState,mapDispatch)(Writer)