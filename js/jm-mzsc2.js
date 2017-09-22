$(function(){
	 //meizhuan_server
	$(window).scroll(function(){
	     var sr= $(window).scrollTop();
	     if (sr>=1180) {
	         $('#meizhuan_server').css('transform', 'scale(1, 1)');
	     }else{
	          $('#meizhuan_server').css('transform', 'scale(1, 0)');
	     }
	    
	 });
});