layui.use(['laydate', 'laypage', 'layer', 'table', 'carousel', 'upload', 'element'], function() {
	var form = layui.form;
	var layer = layui.layer; //弹层
	var table = layui.table; //表格
	var element = layui.element; //元素操作



	//监听工具条
	table.on('tool(demo)', function(obj) { //注：tool是工具条事件名，test是table原始容器的属性 lay-filter="对应的值"
		var data = obj.data //获得当前行数据
			,
			layEvent = obj.event; //获得 lay-event 对应的值
		if(layEvent === 'pay') {
			layer.confirm('确认付款？', function(index) {
				obj.del(); //删除对应行（tr）的DOM结构
				layer.close(index);
				//向服务端发送删除指令
			});
		} else if(layEvent === 'del') {
			layer.confirm('真的删除行么', function(index) {
				obj.del(); //删除对应行（tr）的DOM结构
				layer.close(index);
				//向服务端发送删除指令
			});
		}
	});

});