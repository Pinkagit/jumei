window.onload=function () {
  //滚动条-固定导航栏
  var table_header_fixed=document.getElementById('table-header-fixed');
  var headerH=document.getElementsByTagName('header')[0];
  var headerHeight=headerH.offsetHeight;
  document.onscroll=function () {
      if(scroll().top>=headerHeight){
        table_header_fixed.style.display='block';
      }
      if(scroll().top<headerHeight){
        table_header_fixed.style.display='none';
      }
  }

  //小tab栏切换
  var tabSmallA=document.getElementsByClassName('filter')[0].getElementsByTagName('a');
  var tabSmallContent=document.getElementsByClassName('tabqiehuan');
  // console.log(tabSmallContent.length);
  for (var i = 0; i < tabSmallA.length; i++) {
    tabSmallA[i].index=i;
    tabSmallA[i].onclick=function () {
        for (var j = 0; j < tabSmallContent.length; j++) {
          tabSmallA[j].className='';
          tabSmallContent[j].style.display='none';
        }
        tabSmallA[this.index].className='curr';
        tabSmallContent[this.index].style.display='block';
    }
  }

  //大tab栏切换
  var tabBigA=document.getElementsByClassName('bigtab_col');
  var tabBigContent=document.getElementsByClassName('user-main');
  // console.log(tabBigA.length);
  // console.log(tabBigContent.length);
  for (var i = 0; i < tabBigA.length; i++) {
    tabBigA[i].index=i;
    tabBigA[i].onclick=function () {
        for (var j = 0; j < tabBigContent.length; j++) {
          tabBigA[j].className='bigtab_col';
          tabBigContent[j].style.display='none';
        }
        tabBigA[this.index].className='bigtab_col selected';
        tabBigContent[this.index].style.display='block';
    }
  }


  //验证用户名
  var nicknameA=document.getElementsByClassName('nickname')[0].getElementsByTagName('a')[0].innerHTML;
  var t_input=document.getElementsByClassName('t_input')[0];
  var valueMissing=document.getElementsByClassName('valueMissing')[0];
  var customError=document.getElementsByClassName('customError')[0];
  t_input.setAttribute('value', nicknameA);//把用户名给input中的value
  t_input.onblur=function () {
    // console.log(t_input.value);//获取表单中的内容
    t_input.style.borderColor='red';
      if (t_input.value=='') {
        valueMissing.style.display='inline-block';
        customError.style.display='none';
      }else if(t_input.value.length>=4 && t_input.value.length<=16){
        valueMissing.style.display='none';
        customError.style.display='none';
      }else{
        valueMissing.style.display='none';
        customError.style.display='inline-block';
      }
  }
  t_input.onfocus=function (){
    t_input.style.borderColor='rgba(0, 128, 0, 0.6)';
  }

  //验证年月日
  var year=document.getElementById('birthday_year');
  var month=document.getElementById('birthday_month');
  var day=document.getElementById('birthday_day');
  var otherError=document.getElementsByClassName('otherError')[0];

  var ok1=null,ok2=null,ok3=null;
  year.onfocus=function (){
    year.style.borderColor='rgba(0, 128, 0, 0.6)';
  }
  year.onblur=function () {
    year.style.borderColor='#eee';
      if (year.value=='') {
        ok1=false;
      }
      else{
        ok1=true;
      }
      yanzhengYMD();
  }
  month.onfocus=function (){
    month.style.borderColor='rgba(0, 128, 0, 0.6)';
  }
  month.onblur=function () {
    month.style.borderColor='#eee';
      if (month.value=='') {
        ok2=false;
      }
      else{
        ok2=true;
      }
      yanzhengYMD();
  }
  day.onfocus=function (){
    day.style.borderColor='rgba(0, 128, 0, 0.6)';
  }
  day.onblur=function () {
      day.style.borderColor='#eee';
      if (day.value=='') {
        ok3=false;
      }
      else{
        ok3=true;
      }
      yanzhengYMD();
  }
  function yanzhengYMD() {
      if(ok1 && ok2 && ok3){
        otherError.style.display='none';
      }else{
        otherError.style.display='inline-block';
      }
  }
}