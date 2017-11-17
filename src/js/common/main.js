"use strict";

/**
 * 取地址栏变量
 * @param {string} name
 */
function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}


$(document).ready(function() {
	var setting = {
		view: {
			dblClickExpand: false,
			showLine: false
		},
		data: {
			simpleData: {
				enable: true
			}
		},
		callback: {
			onClick: onClick
		}
	};
	var zNodes = [
		//
		{ id:1, pId:0, name:"个人中心首页", open:true,url:'views/module/index/index.html?menuid=1',"target":"_self"},
		{ id:2, pId:0, name:"个人资料",open:true},
		{ id:3, pId:2, name:"基本资料"},
		{ id:4, pId:2, name:"安全设置"},
		{ id:5, pId:2, name:"消息通知",url:'views/module/user/msg.html?menuid=5',"target":"_self"},
		{ id:6, pId:2, name:"实名认证",url:'views/module/user/certification.html?menuid=6',"target":"_self"},
		{ id:7, pId:2, name:"操作日志",url:'views/module/user/log.html?menuid=7',"target":"_self"},
		//   
		{ id:8, pId:0, name:"仓储服务",open:true},
		//
		{ id:9, pId:8, name:"个人仓储"},
		{ id:10, pId:9, name:"订单管理"},
		{ id:11, pId:10, name:"求租订单",url:'views/module/warehousing/individual/seek_list.html?menuid=11',"target":"_self"},
		{ id:12, pId:10, name:"出租订单",url:'views/module/warehousing/individual/rent_list.html?menuid=12',"target":"_self"},
		{ id:13, pId:9, name:"求租管理"},
		{ id:14, pId:13, name:"已发布求租",url:'views/module/warehousing/individual/seek_send_list.html?menuid=14',"target":"_self"},
		{ id:15, pId:13, name:"求租发布",url:'views/module/warehousing/individual/seek_send_add.html?menuid=15',"target":"_self"},
		{ id:16, pId:9, name:"出租管理",url:'views/module/warehousing/individual/rent_administer.html?menuid=16',"target":"_self"},
		//
		{ id:17, pId:8, name:"企业仓储"},
		{ id:18, pId:17, name:"企业入驻"},
		{ id:19, pId:17, name:"资质申请"},
		{ id:20, pId:17, name:"资质申请"},
		{ id:21, pId:17, name:"出租管理"},
		{ id:22, pId:21, name:"已发布出租",url:'views/module/warehousing/enterprise/rent_list.html?menuid=22',"target":"_self"},
		{ id:23, pId:21, name:"出租发布",url:'views/module/warehousing/enterprise/rent_list_add.html?menuid=23',"target":"_self"},
		{ id:24, pId:17, name:"求租管理"},
		{ id:25, pId:24, name:"已发布求租",url:'views/module/warehousing/enterprise/seek_send_list.html?menuid=25',"target":"_self"},
		{ id:26, pId:24, name:"求租发布",url:'views/module/warehousing/enterprise/seek_send_add.html?menuid=26',"target":"_self"},
		{ id:27, pId:17, name:"订单管理"},
		{ id:28, pId:27, name:"求租订单",url:'views/module/warehousing/enterprise/seek_administer.html?menuid=28',"target":"_self"},
		{ id:29, pId:27, name:"出租订单",url:'views/module/warehousing/enterprise/rent_administer.html?menuid=29',"target":"_self"},
		{ id:30, pId:17, name:"子账号管理"},
		{ id:31, pId:17, name:"往来关系（二期）"},
		//
		{ id:32, pId:0, name:"物流服务",open:true},
		//
		{ id:33, pId:32, name:"个人物流"},
		{ id:34, pId:33, name:"订单管理"},
		{ id:35, pId:34, name:"车源订单"},
		{ id:36, pId:34, name:"货源订单"},
		{ id:37, pId:33, name:"车源管理"},
		{ id:38, pId:37, name:"已发布车源"},
		{ id:39, pId:38, name:"车源发布"},
		{ id:40, pId:33, name:"货源管理"},
		{ id:41, pId:40, name:"已发布货源"},
		{ id:42, pId:41, name:"货源发布"},
		//
		{ id:43, pId:32, name:"企业物流"},
		{ id:44, pId:43, name:"企业入驻"},
		{ id:45, pId:43, name:"资质申请"},
		{ id:46, pId:43, name:"车源管理"},
		{ id:47, pId:46, name:"已发布车源"},
		{ id:48, pId:47, name:"车源发布"},
		{ id:49, pId:43, name:"货源管理"},
		{ id:50, pId:49, name:"已发布货源"},
		{ id:51, pId:50, name:"货源发布"},
		{ id:52, pId:43, name:"订单管理"},
		{ id:53, pId:52, name:"车源订单"},
		{ id:54, pId:52, name:"货源订单"},
		{ id:55, pId:43, name:"子账号管理"},
		{ id:56, pId:43, name:"往来关系（二期）"},
		//
		{ id:57, pId:0, name:"政务服务管理",open:true},
		{ id:58, pId:57, name:"政务服务办理"}
	];
	
	
	//   整理链接
	//   
	for(var i in zNodes){
		if(zNodes[i].url && zNodes[i].url.indexOf('http') < 0){
			zNodes[i].url = location.href.substr(0,location.href.indexOf('personal-center/') + 16) + zNodes[i].url;
		}
	}
	
	

	function onClick(e,treeId, treeNode) {
		var zTree = $.fn.zTree.getZTreeObj("treeDemo");
		zTree.expandNode(treeNode);
	}

	var tree_obj = $.fn.zTree.init($("#treeDemo"), setting, zNodes);
	var node = tree_obj.getNodeByParam("id", GetQueryString('menuid') ? GetQueryString('menuid') : 1);
	tree_obj.selectNode(node);
	
	
	
	
	//=================  求租发布  ===================
	/**
	 * 上传图片
	 */
	$('.m-upfile-img .upfile-btn button[type=button]').on('click',function(){
		var that = $(this);
		//  input 容器
		var div_input  = that.parents('.m-upfile-img').eq(0).find('.upfile-input');
		//  请除最后一个空input
		if(div_input.find('input').last().val() == ''){div_input.find('input').last().remove();}
		//  限制上传5张
		if(div_input.find('input').length >= 5){return false;}
		//  创建input
		//  这里 name="file[]" 根据需要修改name值
		var dom_input = $('<input type="file" name="file[]" />');
		//  插入容器
		div_input.append(dom_input);
		//  模拟点击选择图片
		dom_input.click();
		//  input file 变化读取图片base64码
		dom_input.change(function(){
			//   FileReader
		    var reader = new FileReader(); 
		    reader.readAsDataURL(dom_input[0].files[0]); 
		    reader.onload = function(e){ 
		    	//   插入图片
		    	var dom_li = $('<li class="upfile-img"><img src="" /><i class="fa fa-times-circle"></i></li>');
		    	dom_li.find('img').attr('src',this.result);
		    	that.parents('ul').eq(0).append(dom_li);
		    	
		    } 
		});
		
	});
	/**
	 * 删除图片input
	 */
	$(document).on('click','.m-upfile-img .upfile-img i.fa',function(){
		var that = $(this);
		var dom_li = that.parent();
		//   删除input
		that.parents('.m-upfile-img').eq(0).find('.upfile-input input').eq(dom_li.index() - 1).remove();
		//   删除li
		dom_li.remove();
	});
	
	
	/**
	 * 提交表单
	 */
	$('#member_seek_enterprise_add').submit(function(){
		//   清除空上传图片
		$(this).find('.m-upfile-img .upfile-input input').each(function(){
			if($(this).val() == ''){
				$(this).remove();
			}
		});
		
		//   提交表单
		alert('提交表单');
		return false;
	});
	
	//=================  /求租发布  ===================
});