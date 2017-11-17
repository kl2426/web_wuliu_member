layui.use(['laydate', 'laypage', 'layer', 'table', 'carousel', 'upload', 'element'], function() {
	var form = layui.form;
	var layer = layui.layer; //弹层
	var table = layui.table; //表格
	var element = layui.element; //元素操作
	var laydate = layui.laydate;
	var upload = layui.upload;

	//常规用法
	laydate.render({
		elem: '#date_1'
	});
	laydate.render({
		elem: '#date_2'
	});

	//多图片上传
	upload.render({
		elem: '#upfile_1',
		url: '/upload/',
		multiple: true,
		before: function(obj) {
			//预读本地文件示例，不支持ie8
			obj.preview(function(index, file, result) {
				$('#upfile_dom_1').append('<img src="' + result + '" alt="' + file.name + '" class="layui-upload-img">')
			});
		},
		done: function(res) {
			//上传完毕
		}
	});

	//监听提交
	form.on('submit(demo1)', function(data) {
		layer.alert(JSON.stringify(data.field), {
			title: '最终的提交信息'
		})
		return false;
	});

});