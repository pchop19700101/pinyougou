//服务层
app.service('payLogService',function($http){
	    	
	//读取列表数据绑定到表单中
	this.findAll=function(){
		return $http.get('../payLog/findAll.php');
	};
	//分页 
	this.findByPagination=function(page,rows){
		return $http.get('../payLog/findByPagination.php?page='+page+'&rows='+rows);
	};
	//查询实体
	this.findById=function(id){
		return $http.get('../payLog/findById.php?id='+id);
	};
	//增加 
	this.add=function(entity){
		return  $http.post('../payLog/add.php',entity );
	};
	//修改 
	this.update=function(entity){
		return  $http.post('../payLog/update.php',entity );
	};
	//删除
	this.dele=function(ids){
		return $http.get('../payLog/delete.php?ids='+ids);
	};
	//搜索
	this.search=function(page,rows,searchEntity){
		return $http.post('../payLog/findWithConditionsByPagination.php?page='+page+"&rows="+rows, searchEntity);
	}    	
});
