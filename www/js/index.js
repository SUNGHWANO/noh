$(function(){

	$("#btnTopmain").click(function(){

		$("#contentMain").css({
			"display": "none"
		});

		$("#contentBox").css({
			"display": ""
		});

	});



	$("#btnNext").click(function(){	

		$("#contentBox").css({
			"display": "none"
		});

		$("#contentMain").css({
			"display": ""
		});

	});
});