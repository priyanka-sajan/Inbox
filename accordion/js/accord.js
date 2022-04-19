$(document).ready(function(){
	$(".accordionTab").click(function(){
		$(".content").slideUp();
		$(this).next(".content").stop(true).slideDown();
		$(this).addClass("active");
		$(".accordionTab").children().removeClass("fa-circle-chevron-down").addClass("fa-angle-up");
	});			
}); 	