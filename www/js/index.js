$(function(){
	
	$("#btnTopmain").click(function(){
		$("#contentBox").css({
			"display": ""
		});
		
		$("#content1").css({
			"display": "none"
		});
	});
	
	
	
	$("#btnNext").click(function(){
		$("#content1").css({
			"display": ""
		});
		
		$("#contentBox").css({
			"display": "none"
		});
	});
});