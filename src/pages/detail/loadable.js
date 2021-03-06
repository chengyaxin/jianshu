import React from 'react'
import Loadable from 'react-loadable';
//异步加载组件
const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading(){
  	return <div>正在加载......</div>
  },
});
export default ()=><LoadableComponent />
// export default class App extends React.Component {
//   render() {
//     return <LoadableComponent/>;
//   }
// }