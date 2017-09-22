// nav
// var nav_a=$('nav_a');
// var nav_gg=$('nav_gg');
$(function(){
	$('#nav_a').mouseenter(function (){
	$('#nav_gg').show();
});
$('#nav_gg').mouseenter(function (){
	$('#nav_gg').show();
});
$('#nav_a').mouseleave(function (){
	$('#nav_gg').hide();
});
$('#nav_gg').mouseleave(function (){
	$('#nav_gg').hide();
});


//left_aside
$('#hf').click(function(){
	$('#aside_mbhf').toggle();
	$('#trible').toggleClass('close');
	$('#trible').toggleClass('open');
});


$('.number_reduce').click(function(){
	var num=$('#buy_number').val();
	if (num==0) {return 0}
	num--;
	$('#buy_number').val(num);
})
$('.number_add').click(function(){
	var num=$('#buy_number').val();
	num++;
	$('#buy_number').val(num);
})
$('li[data-index="0"]').mouseover(function(){
	$('#goods').show();
	$('#backtrack').hide();
	$('#storage').hide();
	$('#consignment').hide();
	$('#package').hide();
	$('#serving').hide();
	$('#star').hide();
	$('#evaluate').hide();
})
$('li[data-index="1"]').mouseover(function(){
	$('#goods').hide();
	$('#backtrack').show();
	$('#storage').hide();
	$('#consignment').hide();
	$('#package').hide();
	$('#serving').hide();
	$('#star').hide();
	$('#evaluate').hide();
})
$('li[data-index="2"]').mouseover(function(){
	$('#goods').hide();
	$('#backtrack').hide();
	$('#storage').show();
	$('#consignment').hide();
	$('#package').hide();
	$('#serving').hide();
	$('#star').hide();
	$('#evaluate').hide();
})
$('li[data-index="3"]').mouseover(function(){
	$('#goods').hide();
	$('#backtrack').hide();
	$('#storage').hide();
	$('#consignment').show();
	$('#package').hide();
	$('#serving').hide();
	$('#star').hide();
	$('#evaluate').hide();
})
$('li[data-index="4"]').mouseover(function(){
	$('#goods').hide();
	$('#backtrack').hide();
	$('#storage').hide();
	$('#consignment').hide();
	$('#package').show();
	$('#serving').hide();
	$('#star').hide();
	$('#evaluate').hide();
})
$('li[data-index="5"]').mouseover(function(){
	$('#goods').hide();
	$('#backtrack').hide();
	$('#storage').hide();
	$('#consignment').hide();
	$('#package').hide();
	$('#serving').show();
	$('#star').hide();
	$('#evaluate').hide();
})
$('li[data-index="6"]').mouseover(function(){
	$('#goods').hide();
	$('#backtrack').hide();
	$('#storage').hide();
	$('#consignment').hide();
	$('#package').hide();
	$('#serving').hide();
	$('#star').show();
	$('#evaluate').hide();
})
$('li[data-index="7"]').mouseover(function(){
	$('#goods').hide();
	$('#backtrack').hide();
	$('#storage').hide();
	$('#consignment').hide();
	$('#package').hide();
	$('#serving').hide();
	$('#star').hide();
	$('#evaluate').show();
})
$(window).scroll(function(){
	if ($(this).scrollTop()>950) {
		$('.nav_bar_fixed').show();
	}
	else{
		$('.nav_bar_fixed').hide();
	}
})
$('.products_wrap li:nth-child(1)').mouseenter(function(){
	$('#lip1').show();
})
$('.products_wrap li:nth-child(1)').mouseleave(function(){
	$('#lip1').hide();
})
$('.products_wrap li:nth-child(2)').mouseenter(function(){
	$('#lip2').show();
})
$('.products_wrap li:nth-child(2)').mouseleave(function(){
	$('#lip2').hide();
})
$('.products_wrap li:nth-child(3)').mouseenter(function(){
	$('#lip3').show();
})
$('.products_wrap li:nth-child(3)').mouseleave(function(){
	$('#lip3').hide();
})
$('.products_wrap li:nth-child(4)').mouseenter(function(){
	$('#lip4').show();
})
$('.products_wrap li:nth-child(4)').mouseleave(function(){
	$('#lip4').hide();
})
$('.products_wrap li:nth-child(5)').mouseenter(function(){
	$('#lip5').show();
})
$('.products_wrap li:nth-child(5)').mouseleave(function(){
	$('#lip5').hide();
})
$('.products_wrap li:nth-child(6)').mouseenter(function(){
	$('#lip6').show();
})
$('.products_wrap li:nth-child(6)').mouseleave(function(){
	$('#lip6').hide();
})
})
