import React, { Component } from 'react'
import { HomeWrapper,HomeLeft,HomeRight } from './style.js'
import Topic from './components/Topic.js'
import List from './components/List.js'
import Recommend from './components/Recommend.js'
import Writer from './components/Writer.js'
class Home extends Component {
	render(){
		return (
				<HomeWrapper>
					<HomeLeft>
						<img className="banner_img" src="https://upload.jianshu.io/admin_banners/web_images/4435/c1d3ca63353c8bd527f0d781605516cb5b266d02.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
						<Topic />
						<List />
					</HomeLeft>
					<HomeRight>
						<Recommend />
						<Writer />
					</HomeRight>
				</HomeWrapper>
			)
	}
}
export default Home