var aIcons=document.getElementsByClassName('icon-down');
var aLi=document.getElementsByClassName('rotate');
var oMenu=document.getElementsByClassName('menu')[0];
var aBar=oMenu.getElementsByClassName('bar');
var oLogin=document.getElementById('loginPane');
var oInputBox=oLogin.getElementsByClassName('inputbox');
var aInputs=oLogin.getElementsByTagName('input');
var aUl=document.getElementsByClassName('xiala');
var flag=0;
for(var i=0;i<8;i++){
	aLi[i].index=i;
	aLi[i].onmouseover=function(){
		aIcons[this.index].style.transform='rotate(-180deg)';
		aUl[this.index].style.display='block';
	}
	aLi[i].onmouseout=function(){
		aIcons[this.index].style.transform='rotate(0deg)';
		aUl[this.index].style.display='none';
	}
}
aLi[8].onmouseover=function(){
	aIcons[8].style.transform='rotate(-180deg)';
	document.getElementById('topapp').style.display='block';
}
aLi[8].onmouseout=function(){
	aIcons[8].style.transform='rotate(0deg)';
	document.getElementById('topapp').style.display='none';
}
document.getElementById('login').onclick=function(e){
	e.stopPropagation();
	if(flag==0){
		document.getElementById('loginPane').style.display='block';
		flag=1;
	}else if(flag==1){
		document.getElementById('loginPane').style.display='none';
		flag=0;
	}
}
$(document).click(function(e){
 	var oPane = $('#loginPane');   // 设置目标区域
 	if(!oPane.is(e.target) && oPane.has(e.target).length === 0 &&flag==1){
 		document.getElementById('loginPane').style.display='none';
		flag=0;
  }
})
var flagBar=0;
var oNavList=document.getElementById('ntes-nav-list');
oMenu.onclick=function(){
	if(flagBar==0){
		aBar[0].style.top='22px';
		aBar[2].style.top='22px';
		aBar[0].style.transform='rotate(45deg)';
		aBar[1].style.display='none';
		aBar[2].style.transform='rotate(-45deg)';
		aBar[0].style.backgroundColor='rgb(207,19,20)';
		aBar[2].style.backgroundColor='rgb(207,19,20)';
		flagBar=1;
		oNavList.style.transform='scaleY(1)';
	}else if(flagBar==1){
		aBar[0].style.transform='rotate(0deg)';
		aBar[2].style.transform='rotate(0deg)';
		aBar[0].style.top='14px';
		aBar[2].style.top='30px';
		aBar[1].style.display='block';
		flagBar=0;
		aBar[0].style.backgroundColor='white';
		aBar[2].style.backgroundColor='white';
		oNavList.style.transform='scaleY(0)';
	}
};
for(var i=0;i<aInputs.length;i++){
	aInputs[i].index=i;
	aInputs[i].onfocus=function(){
		oInputBox[this.index].style.border='1px solid rgb(175,211,242)';
	}
	aInputs[i].onblur=function(){
		oInputBox[this.index].style.border='1px solid rgb(242,242,242)';
	}
}



//侧边分享栏
var sideShare=document.getElementsByClassName('post_topshare_wrap')[0];
var commentBar=document.getElementsByClassName('comment_bar')[0];
var left=sideShare.offsetLeft;
sideShare.style.position='absolute';
sideShare.style.left=left+'px';
sideShare.style.top='315px';
commentBar.style.left=left+'px';
commentBar.style.top='1530px';
window.onscroll=function(){
	var scrollTop=document.body.scrollTop;
	if(scrollTop>=275 && scrollTop<=1056){
		sideShare.style.position='fixed';
		sideShare.style.top='45px';
    }else if(scrollTop>1056){
    	sideShare.style.position='absolute';
		sideShare.style.top='1090px';
		if(scrollTop>=1455&&scrollTop<=2285){
			commentBar.style.position='fixed';
			commentBar.style.top='60px';
		}else if(scrollTop>2285){
			commentBar.style.position='absolute';
			commentBar.style.top='2350px';
		}
		else{
			commentBar.style.position='absolute';
			commentBar.style.top='1530px';
		}
    }else{
        sideShare.style.position='absolute';
		sideShare.style.top='315px';
		// commentBar.style.position='absolute';
		// commentBar.style.top='1530px';
    }
}

//轮播图
var oSlide=document.getElementById('slide');
var oLeft=document.getElementById('left');
var oRight=document.getElementById('right');
var oUnderline=document.getElementById('underline');
var width=window.getComputedStyle(oSlide)['width'];
oSlide.style.height=parseInt(width)*0.45+'px';
var pics=['../images/lixian.jpg','../images/gram.jpg','../images/jolin.jpg'];
// oSlide.style.height=oSlide.style.width*0.45;
var index=0;
var timer=null;
timer=setInterval(toRight,2000);
oSlide.onmouseover=function(){clearInterval(timer);}
oSlide.onmouseout=function(){timer=setInterval(toRight,2000);}
oLeft.onclick=toLeft;
oRight.onclick=toRight;
var str2='';
for(var i=0;i<pics.length;i++){
	str2+='<li></li>';
}
oUnderline.innerHTML=str2;
var underLi=oUnderline.getElementsByTagName('li');
underLi[0].style.backgroundColor='lightblue';
function clearColor(){
	for(var i=0;i<underLi.length;i++){
		underLi[i].style.backgroundColor='#ccc';
	}
}
for(var i=0;i<underLi.length;i++){
	underLi[i].index=i;
	underLi[i].onclick=function(){
		clearColor();
		oSlide.style.backgroundImage='url('+pics[this.index]+')';
		this.style.backgroundColor='lightblue';
		index=this.index;
	}
}
function toRight(){
	index++;
	if(index>=pics.length){
		index=0;
	}
	clearColor();
	underLi[index].style.backgroundColor='lightblue';
	oSlide.style.backgroundImage='url('+pics[index]+')';
}
function toLeft(){
	index--;
	if(index==-1){
		index=pics.length-1;
	}
	clearColor();
	underLi[index].style.backgroundColor='lightblue';
	oSlide.style.backgroundImage='url('+pics[index]+')';
}
//选项卡
var $TabTrigger=$('.tab-trigger');
var $TabPanel=$('.tab-panel');
$TabTrigger.mouseover(function(){
	var index=$(this).index();
	$(this).addClass('current').siblings().removeClass('current');
	$TabPanel.eq(index).addClass('selected').siblings().removeClass('selected');
});
//回到顶部
var scrollToTop=document.getElementById('scrollToTop');
scrollToTop.onclick=function(){
	window.scrollTo(0,0);
	commentBar.style.position='absolute';
	commentBar.style.top='1530px';
}
var oSee=document.getElementById('seeMore');
var oShow=document.getElementById('showMore');
var moreFlag=0;
oSee.onmouseover=function(){
	oShow.style.transform='scale(1)';
}
oSee.onmouseout=function(){
	oShow.style.transform='scale(0)';
}
oShow.onmouseover=function(){
	oShow.style.transform='scale(1)';
}
oShow.onmouseout=function(){
	oShow.style.transform='scale(0)';
}

document.getElementById('delete').onclick=function(){
	document.getElementById('imgad').remove();
}