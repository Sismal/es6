import render from './render'
import event from './event'
const login = ( opts={} )=>{
	let obj = {
		loginBtnText:'登 录',
		loginUser:'请您输入用户名',
		loginPwd:'请您输入密码'
	}
	let newObj = Object.assign(opts,obj);
	render(newObj);
	event();
}
export default login;