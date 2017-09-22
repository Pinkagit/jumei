window.onload=function(){
	function byId(id){
		return document.getElementById(id);
	}
var bannerimg1=byId('bannerimg1');
var banner=byId('banner');
var arr_banner=['../images/img/banner_1.jpg','../images/img/banner_2.jpg','../images/img/banner_3.jpg'];
var span=banner.getElementsByTagName('span');
var dots=byId('dots');
var lefta=byId('lefta');
var righta=byId('righta');
var mask_=document.getElementsByClassName('mask_');
var zhezhao2=document.getElementsByClassName('zhezhao2');
var innerBox=document.getElementsByClassName('innerBox');
var TabUl=byId('TabUl');
var TabLi=TabUl.getElementsByTagName('li');
var innerBox1=byId('innerBox1');
var innerBox2=byId('innerBox2');
var innerBox3=byId('innerBox3');
var innerBoxLi=innerBox1.getElementsByTagName('li');
var innerBoxLi2=innerBox2.getElementsByTagName('li');
var innerBoxLi3=innerBox3.getElementsByTagName('li');
var insertBox=document.getElementsByClassName('insertBox');
var insertBox2=document.getElementsByClassName('insertBox2');
var insertBox3=document.getElementsByClassName('insertBox3');
var advert=byId('advert');
var timer=null;var ysq=null;var num=0;
var slideList=byId('slideList');
var slideLis=slideList.getElementsByTagName('li');
var close=byId('closep');
var that,that2,that3= null;
var ysq2,ysq3,ysq4=null;
   //js开始
	clearInterval(timer);
	banner.onmouseenter=function(){
		clearInterval(timer);
	}
	banner.onmouseleave=function(){
		timer=setInterval(changeImg,3000);
}
	banner.onmouseleave();
	for(var i=0;i<arr_banner.length;i++){
		span[i].index=i;
		span[i].onclick=function(){
			for (var j = 0; j < span.length; j++) {
				span[j].className='';
			}
			span[this.index].className='active';
			changeImg();
		}
	}
	righta.onclick=function(){
			if(num>arr_banner.length){
				num=0;
			}
			changeImg();		
	}
	lefta.onclick=function(){
			num--;
			if(num<0){
				num=arr_banner.length-1;
			}
			num%=arr_banner.length
			bannerimg1.src=arr_banner[num];
			for(var i=0;i<span.length;i++){
				span[i].className='';
			}
			span[num].className='active';
	}
	function changeImg(){
			num++;
			num%=arr_banner.length
			bannerimg1.src=arr_banner[num];
			for(var i=0;i<span.length;i++){
				span[i].className='';
			}
			span[num].className='active';
		}
	fn();
	setInterval(fn,1000)
	function fn(){
	var nowTime=new Date();
	var newTime=new Date(2017,10,30,21,08,20);
	var t=Math.floor((newTime-nowTime)/1000);
	if(t>=0){
	var str="还剩下"+Math.floor(t/86400)+'天'+Math.floor(t%86400/3600)+"时"
	+Math.floor(t%86400%3600/60)+'分'+t%60+'秒';
		for(var i=0;i<mask_.length;i++){
			mask_[i].innerHTML=str;
		}
	}else{
		clearInterval(timer);
	}
}	
	fn1();
	setInterval(fn1,1000)
	function fn1(){
	var nowTime=new Date();
	var newTime=new Date(2017,11,30,0,30,14);
	var t=Math.floor((newTime-nowTime)/1000);
	if(t>=0){
	var str1="还剩下"+Math.floor(t/86400)+'天'+Math.floor(t%86400/3600)+"时"
	+Math.floor(t%86400%3600/60)+'分'+t%60+'秒';
		for(var i=0;i<zhezhao2.length;i++){
			zhezhao2[i].innerHTML=str1;
			}
		}else{
			clearInterval(timer);
		}
	}
			for(var i=0;i<TabLi.length;i++){
			TabLi[i].index=i;
			TabLi[i].onmouseover=function(){
				for(var j=0;j<TabLi.length;j++){
					innerBox[j].style.display='none';
			}
				innerBox[this.index].style.display='block';
						};  
	}
		for(var i=0;i<innerBoxLi.length;i++){
			innerBoxLi[i].index=i;
			innerBoxLi[i].onmouseover=function(){
				for(var j=0;j<innerBoxLi.length;j++){
					insertBox[j].style.display='none';
				}
				insertBox[this.index].style.display='block';
						that = this;
			}
					clearTimeout(ysq2);
					innerBoxLi[i].onmouseout=function(){
				ysq2=setTimeout(function(){
					insertBox[that.index].style.display='none';
				},2000)
			}
		}
		for(let i=0;i<innerBoxLi2.length;i++){
			innerBoxLi2[i].index=i;
			innerBoxLi2[i].onmouseover=function(){
				for(let j=0;j<innerBoxLi2.length;j++){
					insertBox2[j].style.display='none';
				}
				insertBox2[this.index].style.display='block';
				 	that2 = this;
			}
					clearTimeout(ysq3);
					innerBoxLi2[i].onmouseout=function(){
					ysq3=setTimeout(function(){
					insertBox2[that2.index].style.display='none';
				},2000)
			}
		}		
		for(var m=0;m<innerBoxLi3.length;m++){
			innerBoxLi3[m].index=m;
			innerBoxLi3[m].onmouseover=function(){
				for(var n=0;n<innerBoxLi3.length;n++){
					insertBox3[n].style.display='none';
				}
				insertBox3[this.index].style.display='block';
				that3 = this;
			}
					clearTimeout(ysq4);
					innerBoxLi3[m].onmouseout=function(){
				ysq4=setTimeout(function(){
					insertBox3[that3.index].style.display='none';
				},2000)
			}
		}
		setTimeout(function(){
			advert.style.display='inline-block';
				ysq=setTimeout(function(){
				advert.style.display='none';
			},3000)	;
				advert.onmouseover=function(){
					clearTimeout(ysq);
				}
		},2000);
			closep.onclick=function(){
				advert.style.display='none';
			}
			for(var i=0;i<slideLis.length;i++){
				slideLis[i].onmouseover=over(i);
				slideLis[i].onmouseout=out(i);
			}
			function over(n){
				function fn1(){
					slideLis[n].style.background='lightgreen';
					slideLis[n].style.color='#000';
				}
				return fn1;
			}
			function out(n){
				function fn1(){
					slideLis[n].style.background='';
					slideLis[n].style.color='#f09';
				}
				return fn1;
			}

			banner.onmouseover=function(){
				lefta.style.opacity='1';
				righta.style.opacity='1';
			}
			banner.onmouseout=function(){
				lefta.style.opacity='0';
				righta.style.opacity='0';
			}
}