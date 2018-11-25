
NProgress.start();

NProgress.done();

$('.navs ul').prev('a').on('click', function () {
	$(this).next().slideToggle();
});


// 检测登录
$.ajax({
	url: '/api/employee/checkRootLogin',
	type: 'get',
	success: function (info) {
		// 未登录
		if(info.error) {
			location.href = '/admin/login.html?url=' + location.href;
			return;
		}
	}
})

// 退出登录
$('.fa-sign-out').parent().on('click', function () {
	$.ajax({
		url: '/api/employee/employeeLogout',
		type: 'get',
		success: function (info) {
			if(info.success) {
				location.href = '/';
			}
		}
	});
})