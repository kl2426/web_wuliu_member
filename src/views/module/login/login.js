"use strict";

$(document).ready(function(){
	//  登录
	//  form dom
	var login_dom = {
		dom_username:$("#form_login input[name=username]"),
		dom_password:$("#form_login input[name=password]"),
		dom_code:$("#form_login input[name=code]"),
		dom_remember:$("#form_login input[name=remember]")
	}
	
	//   登录提交
	$('#form_login').submit(function(){
		//  msg
		var dom_msg = $('#login_msg');
		//  清空提示
		dom_msg.html("");
		
		//  form data
		var username = login_dom.dom_username.val().trim();
		var password = login_dom.dom_password.val();
		var code = login_dom.dom_code.val();
		var remember = login_dom.dom_remember.val();
		
		//   验证用户名
		if(username.length < 1){
			dom_msg.html('用户名不能为空');
			return false;
		}
		//   验证密码
		if(password.length < 1){
			dom_msg.html('密码不能为空');
			return false;
		} 
		//   验证验证码
		if(code.length < 1){
			dom_msg.html('验证码不能为空');
			return false;
		}
		
		//   ajax 提交
		//alert(username + password + code)
		location.href = '../member/warehousing/seek_send.html';
		
		return false;
	});
	
	//   事件清空提示
	$('#code_img').add(login_dom.dom_username).add(login_dom.dom_password).add(login_dom.dom_code).on('click',function(){
		$('#login_msg').html("");
	});
	
	
	
	//=============================
	//  注册
	var register_dom = {
		dom_username:$("#form_register input[name=username]"),
		dom_code:$("#form_register input[name=code]"),
		dom_password:$("#form_register input[name=password]"),
		dom_password2:$("#password2")
	}
	
	//   登录提交
	$('#form_register').submit(function(){
		//  msg
		var dom_msg = $('#register_msg');
		//  清空提示
		dom_msg.html("");
		
		//  form data
		var username = register_dom.dom_username.val().trim();
		var code = register_dom.dom_code.val();
		var password = register_dom.dom_password.val();
		var password2 = register_dom.dom_password2.val();
		
		//   验证用户名
		if(!(/^(1[0-9])\d{9}$/.test(username))){
			dom_msg.html('手机号码输入不正确');
			return false;
		}
		//   验证验证码
		if(code.length < 1){
			dom_msg.html('验证码不能为空');
			return false;
		}
		//   验证密码
		if(password.length < 1){
			dom_msg.html('密码不能为空');
			return false;
		} 
		//   验证两次密码
		if(password !== password2){
			dom_msg.html('两次输入密码不一致');
			return false;
		}
		
		//   ajax 提交
		alert(username + code + password)
		
		
		return false;
	});
	
	
	//   事件清空提示
	$('#send_code').add(register_dom.dom_username).add(register_dom.dom_code).add(register_dom.dom_password).add(register_dom.dom_password2).on("click",function(){
		$('#register_msg').html("");
	});
	
	//   手机验证码
	$('#send_code').on('click',function(){
		var that = $(this);
		if(that[0].disabled == true){
			return false
		}else{
			that.attr('disabled','disabled');
		}
		//
		var temp_nb = 30;
		var my_timer = setInterval(function(){
			if(temp_nb >= 0){
				that.val('发送验证码（' + temp_nb + 's）');
				temp_nb = temp_nb - 1;
			}else{
				clearInterval(my_timer);
				my_timer = null;
				that.val('发送验证码');
				that.removeAttr('disabled');
			}
		},1000);
		
		//  ajax
		alert('send code')
	});
	
});