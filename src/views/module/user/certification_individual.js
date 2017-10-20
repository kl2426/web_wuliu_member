layui.use(['laydate', 'laypage', 'layer', 'table', 'carousel', 'upload', 'element'], function() {
	var form = layui.form;
	var layer = layui.layer; //弹层
	var table = layui.table; //表格
	var element = layui.element; //元素操作
	var laydate = layui.laydate;
	var upload = layui.upload;

	//监听提交
	form.on('submit(demo1)', function(data) {
		layer.alert(JSON.stringify(data.field), {
			title: '最终的提交信息'
		})
		return false;
	});

	//普通图片上传
	var uploadInst = upload.render({
		elem: '#upfile_1',
		url: '/upload/',
		before: function(obj) {
			//预读本地文件示例，不支持ie8
			obj.preview(function(index, file, result) {
				$('#upfile_dom_1').attr('src', result); //图片链接（base64）
			});
		},
		done: function(res) {
			//如果上传失败
			if(res.code > 0) {
				return layer.msg('上传失败');
			}
			//上传成功
		},
		error: function() {
			//演示失败状态，并实现重传
			var demoText = $('#demoText1');
			demoText.html('<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-mini demo-reload">重试</a>');
			demoText.find('.demo-reload').on('click', function() {
				uploadInst.upload();
			});
		}
	});
	
	//普通图片上传
	var uploadInst = upload.render({
		elem: '#upfile_2',
		url: '/upload/',
		before: function(obj) {
			//预读本地文件示例，不支持ie8
			obj.preview(function(index, file, result) {
				$('#upfile_dom_2').attr('src', result); //图片链接（base64）
			});
		},
		done: function(res) {
			//如果上传失败
			if(res.code > 0) {
				return layer.msg('上传失败');
			}
			//上传成功
		},
		error: function() {
			//演示失败状态，并实现重传
			var demoText = $('#demoText2');
			demoText.html('<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-mini demo-reload">重试</a>');
			demoText.find('.demo-reload').on('click', function() {
				uploadInst.upload();
			});
		}
	});
	
	
	//普通图片上传
	var uploadInst = upload.render({
		elem: '#upfile_3',
		url: '/upload/',
		before: function(obj) {
			//预读本地文件示例，不支持ie8
			obj.preview(function(index, file, result) {
				$('#upfile_dom_3').attr('src', result); //图片链接（base64）
			});
		},
		done: function(res) {
			//如果上传失败
			if(res.code > 0) {
				return layer.msg('上传失败');
			}
			//上传成功
		},
		error: function() {
			//演示失败状态，并实现重传
			var demoText = $('#demoText3');
			demoText.html('<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-mini demo-reload">重试</a>');
			demoText.find('.demo-reload').on('click', function() {
				uploadInst.upload();
			});
		}
	});

});