let ajaxData = (url,obj)=>{
	return fetch(url,{
		method:'POST',
		headers:{
			"Content-type":'application/json'
		},
		params:obj
	}).then(data=>{
		return data.json();
	})
}
export default ajaxData;