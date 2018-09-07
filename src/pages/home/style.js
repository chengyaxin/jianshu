import styled from 'styled-components'
export const HomeWrapper = styled.div `
	overflow:hidden;
	width:960px;
	margin:0 auto;
`;
export  const HomeLeft = styled.div `
	margin-left:15px;
	padding-top:30px;
	width:625px;
	float:left;
	.banner_img{
		width:625px;
		height:240px;
	}
`;

export  const HomeRight= styled.div `
	padding-top:30px;
	width:280px;
	float:right;
`;
export const TopicWrapper = styled.div `
	overflow:hidden;
	padding:20px 0 10px 0;
	margin-left:-10px;
	border-bottom:1px solid #dcdcdc;
`;
export const TopicItem = styled.div `
	padding-right:10px;
	float:left;
	margin-bottom:10px;
	background:#f7f7f7;
	margin-left:10px;
	height:32px;
	line-height:32px;
	font-size:14px;
	color:#000;
	border:1px solid #dcdcdc;
	border-radius:4px;
	.topic-pic {
		margin-right:10px;
		display:block;
		float:left;
		width:32px;
		height:32px;
	}
`;
export const ListItem = styled.div `
	padding:20px 0;
	overflow:hidden;
	border-bottom:1px solid #dcdcdc;
	.pic{
		width:125px;
		height:100px;
		display:block;
		float:right;
		border-radius:10px;
	}
`;
export const ListInfo = styled.div `
	width:500px;
	float:left;
	.title{
		line-height:27px;
		font-weight:bold;
		font-size:18px;
		color:#333;
	}
	.desc{
		font-size:13px;
		line-height:24px;
		color:#999
		padding-right:15px;
	}
`;
export const RecommendWrapper = styled.div `
	margin:30px 0;
	width:280px;
`;
export const RecommendItem = styled.div `
	width:280px;
	height:50px;
	background:url(${(props)=>props.imgUrl});
	background-size:contain;
`;
export const WriterWrapper = styled.div `
	width:278px;
	border-radius:3px;
	overflow:hidden;
`;
export const WriterItem = styled.div `
	margin-top:15px;
	line-height:20px;
	width:280px;
	height:47px;
	cursor:pointer;
	.writer-pic{
		display:block;
		width:48px;
		height:48px;
		border-radius:24px;
		float:left;
		margin-right:15px;
	}
	.writer-name{
		padding-top: 5px;
	    margin-right: 3px;
	    font-size: 14px;
	}
	.writer-follow{
		float:right;
		color:#42c02e;
		font-size:13px;
	}
	.writer-info{
		margin-top: 2px;
	    font-size: 12px;
	    color: #969696;
	    margin: 0 0 10px;
	}
`;
export const WriterTitle = styled.div `
	font-size: 14px;
	color: #969696;
	margin-bottom:32px;
	.recommend-writer{
    	float:left;
	}
	.switch-writer{
		float:right;
	}
`;
export const LoadMore = styled.div `
	width:100%;
	height:40px;
	line-height:40px;
	margin:30px 0;
	text-align:center;
	background:#a5a5a5
	border-radius:20px;
	color:#fff;
	cursor:pointer;
`;
export const BackTop = styled.div `
// position:fixed相对于浏览器窗口定位
	position:fixed;    
	bottom:30px;
	right:100px;
	width:60px;
	height:60px;
	line-height:60px;
	text-align:center;
	border:1px solid #ccc;
`;

