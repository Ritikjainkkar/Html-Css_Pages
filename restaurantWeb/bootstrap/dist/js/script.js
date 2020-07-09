$(function(){
	$("#navbarToggler").blur(function(event){
		console.log(window.innerWidth);
		var scr = window.innerWidth;
		if(scr < 768){
			$("#navbarToggleExternalContent").collapse('hide');
		}
	});
});