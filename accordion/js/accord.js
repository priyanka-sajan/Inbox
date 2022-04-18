$(document).ready(function(){
	$(".accordionTab").click(function(){
		$(".accordionTab").each(function(){
			$(this).removeClass("active");
		});
		$(this).addClass("active");
	});			
}); 	