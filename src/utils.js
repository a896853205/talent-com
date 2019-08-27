function setCookies(user_name, user_password, that) {
	let info = {
		user_name: user_name,
		user_password: user_password
	};
	//设置过期时间
	let expires = 2 * 24 * 60 * 60 * 1000;
	var date = new Date(+new Date() + expires);
	that.$cookies.set('user_data', info, date);
}

function getCookies(that) {
	let cookie = that.$cookies.get('user_data');
	return cookie
}

function isNumber(e) {
	return (typeof e) == 'number'
}

module.exports = {
	setCookies: setCookies,
	getCookies: getCookies,
	isNumber: isNumber
}
