var oMain=document.getElementsByClassName('main')[0];
var aDt=oMain.getElementsByTagName('dt');
var aDd=oMain.getElementsByTagName('dd');
var aB=oMain.getElementsByTagName('b');
var oUl=document.getElementById('news');
var aLi=oUl.getElementsByTagName('li');
var aDiv=oUl.getElementsByClassName('content');
var oNews=document.getElementsByClassName('newslist')[0];
for(var i=0;i<aLi.length;i++){
	aLi[i].style.height=40+parseFloat(getComputedStyle(aDiv[i]).height)+'px';
}
var oAnav=document.getElementsByClassName('Asidenav')[0];
oAnav.style.height=parseFloat(getComputedStyle(oNews).height)+'px';
function clear(){
	for(var j=0;j<aDt.length;j++){
			aDt[j].className='';
			aDd[j].style.display='none';
			aB[j].className='';
		}
}
for(var i=0;i<aDt.length;i++){
	aDt[i].index=i;
	aDt[i].onclick=function(){
		if(this.className==''){
			clear();
			aDt[this.index].className='active';
			aDd[this.index].style.display='block';
			aB[this.index].className='rotate';
		}
		else{
			clear();
			aDt[this.index].className='';
			aDd[this.index].style.display='none';
			aB[this.index].className='';
		}
	}
}
