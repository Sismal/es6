import fetchMock from 'fetch-mock';
let body = document.body;
fetchMock.mock('/login',(url,params)=>{
	console.log(userNameNone)
	let param = params.params;
	if((param.name =='a')==false&&(param.pwd == 'a')==false){
		console.log('5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555')
		body.innerHTML=`<h1>账号密码输入有误</h1>`
		return {
			code:500,
			msg:'用户名+密码错误'
		}
	}else if((param.name =='a')==false){
		body.innerHTML=`<h1>账号输入错误</h1>`
		return {
			code:400,
			msg:'用户名错误'
		}
	}else if((param.pwd == 'a')==false){
		body.innerHTML=`<h1>密码输入错误</h1>`
			return {
				code:300,
				msg:'密码错误'
			}
	}else{
			body.innerHTML=`<h1>登陆成功</h1>`
			return {
				code:200,
				msg:'登录成功'
	}
}
})