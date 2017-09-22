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

    //小图片转换且显示隐藏下一栏
    var $myJM_a=$('.myJM a');
    var $more_more_a=$('.more_more a');
    var $sub_nav01=$('.myJM .sub_nav');
    // var $sub_nav_li=$('.myJM .sub_nav a');
    var $sub_nav02=$('.more_more .sub_nav');
    var $sub_nav_ul01=$('.myJM .sub_nav ul');
    var $sub_nav_ul02=$('.more_more .sub_nav ul');
    var clock=null,clock02=null;

    //我的聚美--显示隐藏
    $myJM_a.hover(function () {
        clearTimeout(clock);
        $sub_nav01.slideDown();
        $(this).parent('.myJM').css('backgroundColor','#fff');
    },function () {
        clock=setTimeout(function(){
          $sub_nav01.slideUp();
          $myJM_a.parent('.myJM').css('backgroundColor','#eee');
        },1000)
    });
    $sub_nav01.hover(function () {
        $(this).show();
    },function () {
        $(this).hide();
    })

    //更多---显示隐藏
    $more_more_a.hover(function () {
        clearTimeout(clock02);
        $sub_nav02.stop().slideDown();
        $(this).parent('.more_more').css('backgroundColor','#fff');
    },function () {
        clock02=setTimeout(function(){
          $sub_nav02.stop().slideUp();
          $more_more_a.parent('.more_more').css('backgroundColor','#eee');
        },1000)
    });
    $sub_nav02.hover(function () {
        $(this).show();
    },function () {
        $(this).hide();
    })


    //美妆商城--二级导航
    var $meizhuang=$('.meizhuang a');
    var $mz_imglist=$('.meizhuangshangchengerji');
    var clock03=null;
    $('.meizhuang').hover(function () {
        $(this).find('.meizhuangshangchengerji').stop().slideDown();
    },function () {
        $(this).find('.meizhuangshangchengerji').stop().slideUp();
    })

    var $imgs=$('.nav_right_list ul li a img');
    $imgs.hover(function () {
        $(this).parent('.nav_right_list ul li').find('span').show();
    },function () {
        $(this).parent('.nav_right_list ul li').find('span').hide();
    })

    //点击返回顶部
    var $to_top=$('.to_top');
    var flog=true;
    $to_top.click(function () {
        if (flog) {
            flog=false;
            $('body,html').animate({scrollTop: 0}, 1000,function(){
                flog=true;
            });
        }
    })

    //右侧边栏--用户名--显示页面
    var $ibar_login_box=$('.ibar_login_box');
    var $user=$('.user');
    var $ibar_close_btn=$('.ibar_close_btn');
    var clock11=null;
    $user.hover(function () {
        clearTimeout(clock11);
        $ibar_login_box.show();
    },function () {
        clock11=setTimeout(function(){
          $ibar_login_box.hide();
        },3000)
    });
    $ibar_login_box.hover(function () {
        clearTimeout(clock11);$(this).show();
    },function () {
        $(this).hide();
    })
    $ibar_close_btn.click(function () {
        $ibar_login_box.hide();
    })


    //我的财富--滑动效果
    var $ibar_wealth_tooltip=$('.ibar_wealth_tooltip');
    var $wealth=$('.wealth');
    var $love=$('.love');
    var $seed=$('.seed');
    var $kefuzhongxin=$('.kefuzhongxin');
    $wealth.hover(function () {
        $ibar_wealth_tooltip.eq(0).show();
        $ibar_wealth_tooltip.eq(0).stop().animate({"left":"-92","opacity":"1",},1000);
    },function () {
        $ibar_wealth_tooltip.eq(0).hide();
        $ibar_wealth_tooltip.eq(0).stop().animate({"left":"-200","opacity":"0"},100);
    })
    $love.hover(function () {
        $ibar_wealth_tooltip.eq(1).show();
        $ibar_wealth_tooltip.eq(1).stop().animate({"left":"-92","opacity":"1"},1000);
    },function () {
        $ibar_wealth_tooltip.eq(1).hide();
        $ibar_wealth_tooltip.eq(1).stop().animate({"left":"-200","opacity":"0"},100);
    })
    $seed.hover(function () {
        $ibar_wealth_tooltip.eq(2).show();
        $ibar_wealth_tooltip.eq(2).stop().animate({"left":"-92","opacity":"1"},1000);
    },function () {
        $ibar_wealth_tooltip.eq(2).hide();
        $ibar_wealth_tooltip.eq(2).stop().animate({"left":"-200","opacity":"0"},100);
    })
    $kefuzhongxin.hover(function () {
        $ibar_wealth_tooltip.eq(3).show();
        $ibar_wealth_tooltip.eq(3).stop().animate({"left":"-92","opacity":"1"},1000);
    },function () {
        $ibar_wealth_tooltip.eq(3).hide();
        $ibar_wealth_tooltip.eq(3).stop().animate({"left":"-200","opacity":"0"},100);
    })
})
    // var footer=document.querySelector('footer');
    // var  footerTopA=document.querySelectorAll('footer>.footer_top a');
    // var  footerTopP=document.querySelectorAll('footer>.footer_top a p');
    // for (var i = 0; i < footerTopA.length; i++) {
    //   var index=i;
    //   footerTopA[i].onmouseover=function () {
    //       footerTopP[index].style.color='#333';
    //     };
    // }


