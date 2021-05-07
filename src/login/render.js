const render = ( opts={} )=>{
	let temp = `
		<form onsubmit='return false'>
			<input type="text" name="" placeholder="${opts.loginUser}" id='userName'>  <h5 id="userNameNone"  style="display: none;">账号错误</h5>
			<input type="password" name="" placeholder="${opts.loginPwd}" id='userPwd'><h5 id="loginPwdNone" style="display: none;">密码错误</h5>
			<input type="submit" value='${opts.loginBtnText}' id='loginBtn'>
		</form>
	`
	opts.main.innerHTML = temp;
}
export default render;
 
