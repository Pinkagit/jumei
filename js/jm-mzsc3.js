window.onload=function(){
	// 获得obj当前属性
	function getStyle(obj,attr){
		return obj.currentStyle?obj.currentStyle:getComputedStyle(obj)[attr];
	}

	/*navbottom*/
	var oUl1=document.getElementById('ul1');
	var aLi1=oUl1.getElementsByTagName('li');
	var oB_bottom=document.getElementById('border-bottom');
	var oldIndex=0;
	var Move_timer=null;
	var arrWidth=[];

	//为每个li加下划线跟随鼠标特效
	for (var i = 0; i < aLi1.length; i++) {
		aLi1[i].index=i;
		arrWidth.push(parseInt(getStyle(aLi1[i],'width')));
		aLi1[i].onmouseover=function(){
			clearInterval(Move_timer);
			var moveWidth=Move_width(this.index);
			var old_moveWidth=Move_width(oldIndex);
			Move_border(oldIndex,this.index,moveWidth,old_moveWidth);
			oldIndex=this.index;
		}
	}

	//获取在当前li位置oB_bottom所需要偏移的距离
	function Move_width(num){
		var sum=0;
		for (var i = 0; i < num; i++) {
			sum+=arrWidth[i]+20;
		}
		return sum;
	}
	//oB_bottom的运动函数
	function Move_border(_oldIndex,_index,distance,old_distance){
		var dis=old_distance;
		Move_timer=setInterval(function(){
			var speed=10;
			if (_oldIndex>_index) {
				 speed=-speed;
			}
			dis+=speed;
			if (distance>dis&&speed>0||distance<dis&&speed<0) {
				oB_bottom.style.left=dis+'px';
				oUl1.style.left=-dis+'px';
			}else{
				clearInterval(Move_timer);//到达指定位置清除定时器
				oB_bottom.style.left=distance+'px';
				oUl1.style.left=-distance+'px';
			}
			oB_bottom.style.width=arrWidth[_index]+'px';

		},10);
	}

	
	/*banner*/
	var oBan_img=document.getElementById('ban_img');
	var aBan_img=['../images/banner-01.jpg','../images/banner-02.jpg','../images/banner-03.jpg'];
	var oBan_left=document.getElementById('ban_left');
	var oBan_right=document.getElementById('ban_right');
	var oBan_bottom=document.getElementById('ban_bottom');
	var aBan_li=oBan_bottom.getElementsByTagName('li');
	var oBan=document.getElementById('banner');
	var x=0;
	var num=0;
	var oldLi=null;
	ban(num);
	//图片自动切换
	setTimeout(function(){
		Ban();
	},2000);
	var Ban_timer=null;
	function Ban(){
		Ban_timer=setInterval(function(){
			x++;
			x%=aBan_img.length;
			oldLi.className='';
			ban(x);
		},3000)
	}	
	//鼠标移入，清除定时器
	oBan.onmouseover=function(){
		clearInterval(Ban_timer);
	}
	// 鼠标移开，重启定时器
	oBan.onmouseout=function(){
		clearInterval(Ban_timer);
		Ban();
	}

	oBan_right.onclick=function(){
		x++;
		if (x==aBan_img.length) {x=0;}
		oldLi.className='';
		ban(x);
	}
	oBan_left.onclick=function(){
		x--;
		if (x==-1) {x=aBan_img.length-1;}
		oldLi.className='';
		ban(x);
	}
	for (var j = 0; j < aBan_li.length; j++) {
		aBan_li[j].index=j;
		aBan_li[j].onclick=function(){
			x=this.index;
			oldLi.className='';
			ban(this.index);
		}
	}
	function ban(num){
		oBan_img.src=aBan_img[num];
		aBan_li[num].className='active';
		oldLi=aBan_li[num];
	}
	/*sideTag*/
	var oSTag=document.getElementById('sideTag');
	var aSTag_li=oSTag.getElementsByTagName('li');
	var arryST=[];
	for (var i = 6; i > 0; i-=2) {
		arryST.push(i,-i);
	}
	arryST.push(0);


	for (var k = 0; k < aSTag_li.length; k++) {
		aSTag_li[k].index=k;
		var pos=parseInt(getStyle(aSTag_li[k],'left'));
		aSTag_li[k].onmouseover=function(){
			shake(this.index);
		}
	}
	function shake(n){
		var num=0;
		clearInterval(aSTag_li[n].timer);
		var timer=setInterval(function(){
			aSTag_li[n].style.left=pos+arryST[num]+'px';
			num++;
			if(num==arryST.length){
				clearInterval(aSTag_li[n].timer);
			}
		},90)
	}
	/* aside.left */
	var oYijicaidan=document.getElementById('yijicaidan');
	var oErjicaidan1=document.getElementById('erjicaidan1');
	var oErjicaidan2=document.getElementById('erjicaidan2');
	var oErjicaidan3=document.getElementById('erjicaidan3');
	var oErjicaidan4=document.getElementById('erjicaidan4');
	var oErjicaidan5=document.getElementById('erjicaidan5');
	var oErjicaidan6=document.getElementById('erjicaidan6');
	var oErjicaidan0=document.getElementById('erjicaidan0');
	var aLi=oYijicaidan.getElementsByTagName('li');
	var aSpan=oYijicaidan.getElementsByTagName('span');
	aLi[0].onmouseover=function(){
			oErjicaidan0.style.display='block';
			aSpan[0].style.display='block';
	}
	aLi[1].onmouseover=function(){
			oErjicaidan1.style.display='block';
			aSpan[1].style.display='block';
	}
	aLi[2].onmouseover=function(){
			oErjicaidan2.style.display='block';
			aSpan[2].style.display='block';
	}
	aLi[3].onmouseover=function(){
			oErjicaidan3.style.display='block';
			aSpan[3].style.display='block';
	}
	aLi[4].onmouseover=function(){
			oErjicaidan4.style.display='block';
			aSpan[4].style.display='block';
	}
	aLi[5].onmouseover=function(){
			oErjicaidan5.style.display='block';
			aSpan[5].style.display='block';
	}
	aLi[6].onmouseover=function(){
			oErjicaidan6.style.display='block';
			aSpan[6].style.display='block';
	}
	aLi[0].onmouseout=function(){
			oErjicaidan0.style.display='none';
			aSpan[0].style.display='none';
	}
	aLi[1].onmouseout=function(){
			oErjicaidan1.style.display='none';
			aSpan[1].style.display='none';
	}
	aLi[2].onmouseout=function(){
			oErjicaidan2.style.display='none';
			aSpan[2].style.display='none';
	}
	aLi[3].onmouseout=function(){
			oErjicaidan3.style.display='none';
			aSpan[3].style.display='none';
	}
	aLi[4].onmouseout=function(){
			oErjicaidan4.style.display='none';
			aSpan[4].style.display='none';
	}
	aLi[5].onmouseout=function(){
			oErjicaidan5.style.display='none';
			aSpan[5].style.display='none';
	}
	aLi[6].onmouseout=function(){
			oErjicaidan6.style.display='none';
			aSpan[6].style.display='none';
	}
	
	/*tab*/
	function byId(id){
		return document.getElementById(id);
	}
	var main=byId('main');
	var menu=byId('menu-content');
	var subMenu=byId('sub-menu');
	var menuItems=menu.getElementsByClassName('menu-item');
	var innerBox=subMenu.getElementsByClassName("inner-box");
	var lefta1=byId("lefta1");
	var righta1=byId("righta1");
	var lefta2=byId("lefta2");
	var righta2=byId("righta2");
	var lefta3=byId("lefta3");
	var righta3=byId("righta3");
	var lefta4=byId("lefta4");
	var righta4=byId("righta4");
	var lefta5=byId("lefta5");
	var righta5=byId("righta5");
	var lefta6=byId("lefta6");
	var righta6=byId("righta6");
	var index=0;
	
	for(var n=0;n<menuItems.length;n++){
		//给每一个menu-item定义data-index属性，作为索引值
		menuItems[n].setAttribute("data-index",n);
		menuItems[n].onmouseover=function(){
			var idx=this.getAttribute("data-index");
			for(var m=0;m<innerBox.length;m++){
				innerBox[m].style.display='none';
			}
			subMenu.className="sub-menu";

			innerBox[idx].style.display="block";
		}
	}
	menu.onmouseout=function(){
		subMenu.className='sub-menu hide';
	}
	subMenu.onmouseover=function(){
		this.className='sub-menu';
	}//subMenu是子菜单
	subMenu.onmouseout=function(){
		this.className='sub-menu hide';
	}
	righta1.onclick=function(){
		index++;
		if(index>=innerBox.length){
			index=0;
		}
		changeDiv();
	}
	lefta1.onclick=function(){
		index--;
		if(index<0){
			index=innerBox.length-1;
		}
		changeDiv();
	}
	righta2.onclick=function(){
		index++;
		if(index>=innerBox.length){
			index=0;
		}
		changeDiv();
	}
	lefta2.onclick=function(){
		index--;
		if(index<0){
			index=innerBox.length-1;
		}
		changeDiv();
	}
	righta3.onclick=function(){
		index++;
		if(index>=innerBox.length){
			index=0;
		}
		changeDiv();
	}	
	lefta3.onclick=function(){
		index--;
		if(index<0){
			index=innerBox.length-1;
		}
		changeDiv();
	}
	righta4.onclick=function(){
		index++;
		if(index>=innerBox.length){
			index=0;
		}
		changeDiv();
	}	
	lefta4.onclick=function(){
		index--;
		if(index<0){
			index=innerBox.length-1;
		}
		changeDiv();
	}
	righta5.onclick=function(){
		index++;
		if(index>=innerBox.length){
			index=0;
		}
		changeDiv();
	}	
	lefta5.onclick=function(){
		index--;
		if(index<0){
			index=innerBox.length-1;
		}
		changeDiv();
	}
	righta6.onclick=function(){
		index++;
		if(index>=innerBox.length){
			index=0;
		}
		changeDiv();
	}
	lefta6.onclick=function(){
		index--;
		if(index<0){
			index=innerBox.length-1;
		}
		changeDiv();
	}
	function changeDiv(){
		for(var i=0;i<innerBox.length;i++){
			//遍历banner下所有的div，及span，将div隐藏,将span清除类
			innerBox[i].style.display='none';
		}	
		//根据索引找到当前div并让他显示出来
		innerBox[index].style.display='block';
	}
	document.getElementById('sk2').onclick=function(){
		window.open('../html/productslist.html');
	}
	
}


