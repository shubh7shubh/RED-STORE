import axios from 'axios'
// import { ParseToken } from './functions'
// import {getCookie} from './sessions'


export const commonHeader = {
	"Content-Type": "application/json",
	lan: "en",
	platform: "3", //web
	city: "bengaluru",
	country: "India",
	ipaddress: "127.0.0.1",
	latitude: "13.344",
	longitude: "72.222",
};

/**
* @description
* @author pranjal
* @date 14/06/2022
* @params endpoint: string
* @params otherHeaders: object
 @return {} Promise
*/

export const getWithtoken =(endpoint)=>{
// axios.defaults.headers.common['authorization'] = ParseToken(
//     getCookie('token') || basicAuth
// );
return axios.get(endpoint,{
    headers:{...commonHeader}
})  
}


// export const postWithToken = (endpoint,data) => {
// 	axios.defaults.headers.common["authorization"] = ParseToken(
// 		getCookie("token") || basicAuth
// 	);
// 	return axios.post(getUrl(endpoint), data, {
// 		headers: { ...commonHeader},
// 	});
// };

export const postWithToken = (endpoint, data, otherHeaders)=> {
	// axios.defaults.headers.common["authorization"] = ParseToken(
	// 	getCookie("token") || basicAuth
	// );
	return axios.post(endpoint, data, {
		headers: { ...commonHeader, ...otherHeaders },
	});
};

export const deleteWithToken = (endpoint, otherHeaders)=> {
	// axios.defaults.headers.common["authorization"] = ParseToken(
	// 	getCookie("token") || basicAuth
	// );
	return axios.delete(endpoint, {
		headers: { ...commonHeader, ...otherHeaders },
	});
};