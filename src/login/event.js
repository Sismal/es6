import ajaxData from '../api/ajaxData'
const event = ()=>{
	let loginBtn = document.getElementById('loginBtn');
	let userName = document.getElementById('userName');
	let userPwd = document.getElementById('userPwd');
	loginBtn.onclick = async ()=>{
		let resData = await ajaxData('/login',{
			name:userName.value,
			pwd:userPwd.value
		})
	}	
}
export default event;