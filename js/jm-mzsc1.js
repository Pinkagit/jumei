window.onload=function(){
	//获取元素到文档顶部的距离
	function getPos(obj) {
		
		var pos = {left:0, top:0};
		
		while (obj) {
			pos.left += obj.offsetLeft;
			pos.top += obj.offsetTop;
			obj = obj.offsetParent;
		}
		return pos;
	}

	//图片懒加载
	var ongo_Ul=document.getElementById('ongoing_a');
	var ongo_Img=ongo_Ul.getElementsByTagName('img');
	var ongo_L=ongo_Ul.getElementsByClassName('loading');

	//判断图片是否进入可视区
	function isInSight(obj){
		var OffsetTop=getPos(obj).top;
		var clientHeight=document.documentElement.clientHeight;
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		
		return OffsetTop-scrollTop<=clientHeight;
	}

	//加载图片
	function loadImg(obj,i){
		if(!obj.src){
			const source=obj.dataset.src;
			obj.src=source;
			hiddenLoad(i);
		}
	}

	function hiddenLoad(i){
		console.log(i);
		ongo_L[i].style.display='none';
	}

	//遍历图片
	function checkImg(){
		Array.from(ongo_Img).forEach((e,i)=>{
			if(isInSight(e)){
				loadImg(e,i);
			}
		});
	}

	setTimeout(checkImg,3000);

	window.onscroll=function(){
		setTimeout(checkImg,3000);
	}

	/*count_time*/
	var ohoudon=document.getElementById('huodon');
	var aOng_li=ohoudon.getElementsByTagName('li');

	var fn_timer0 = setInterval(function(){
		fnTime(fn_timer0,0,2017,10,10,10,39,05);
	},1000);
	var fn_timer1 = setInterval(function(){
		fnTime(fn_timer1,1,2017,10,10,10,39,29);
	},1000);
	var fn_timer2 = setInterval(function(){
		fnTime(fn_timer2,2,2017,10,10,10,39,30);
	},1000);
	var fn_timer3 = setInterval(function(){
		fnTime(fn_timer3,3,2017,10,10,10,39,40);
	},1000);
	var fn_timer4 = setInterval(function(){
		fnTime(fn_timer4,4,2017,10,14,15,0,0);
	},1000);
	var fn_timer5 = setInterval(function(){
		fnTime(fn_timer5,5,2017,10,15,15,0,0);
	},1000);
	var fn_timer6 = setInterval(function(){
		fnTime(fn_timer6,6,2017,10,16,15,0,0);
	},1000);
	var fn_timer7 = setInterval(function(){
		fnTime(fn_timer7,7,2017,9,18,15,0,0);
	},1000);
	var fn_timer8 = setInterval(function(){
		fnTime(fn_timer8,8,2017,10,19,15,0,0);
	},1000);
	var fn_timer9 = setInterval(function(){
		fnTime(fn_timer9,9,2017,10,20,15,0,0);
	},1000);

	function fnTime(fn_timer,fnnum,year,month,day,hours,minutes,seconds){
		var myTime=new Date();
		var toTime=new Date(year,month,day,hours,minutes,seconds);
		var count=toTime-myTime;
		var z=Math.floor(count/1000);
		var d=Math.floor(z/86400);
		var h=Math.floor(z%86400/3600);
		var m=Math.floor(z%86400%3600/60);
		var s=Math.floor(z%86400%3600%60);

		aOng_li[fnnum].getElementsByTagName('p')[0].innerHTML='距离活动结束 '+jl(d)+'天 '+jl(h)+'时 '+jl(m)+'分 '+jl(s)+'秒';

		if (d+h+m+s<=0) {
			aOng_li[fnnum].getElementsByTagName('p')[0].innerHTML='活动结束啦~';
			clearInterval(fn_timer);
		}
	}
	function jl(n){
		return n<10?'0'+n:''+n;
	}

}