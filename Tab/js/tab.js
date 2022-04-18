$(document).ready(function(){
	$(do$(".tabNav li").click(function(){
		var tabid = $(this).find("a").attr("href");
		$(".tabNav li,.tabs div.tab").removeClass("active");   
		$(".tab").hide();   
		$(tabid).show();    
		$(this).addClass("active"); 
	});		
}); 	