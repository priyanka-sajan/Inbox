$(document).ready(function () {
  $('.link').click(function () {
    $('.link').removeClass('active');
    $(this).addClass('active');
    tab = $(this).attr('href');
    $('.tabs .active').removeClass('active');
    $(tab).addClass('active');
  });
});







// $(document).ready(function(){
// 	$(do$(".tabNav li").click(function(){
// 		var tabid = $(this).find("a").attr("href");
// 		$(".tabNav li,.main-container div.tab").removeClass("active");   
// 		$(".tab").hide();   
// 		$(tabid).show();    
// 		$(this).addClass("active"); 
// 	});		
// }); 	