/*
* @Author: Marte
* @Date:   2017-09-06 11:11:38
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-18 19:34:53
*/

'use strict';
$(document).ready(function(){
    //页面中的DOM加载完毕时执行代码
    //a 标签
    $('.tosignup a').hover(function(){
        $(this).css('text-decoration','underline');
    },function(){
        $(this).css('text-decoration','none');
    });
    //focus
    $('#dynamic_mobile').focus(function(){
        // if ($('')) {};
        $('#login-dynamic-form .user .focus_text').css('display','block');
    }).blur(function(){
        $('#login-dynamic-form .user .focus_text').css('display','none');
    });
    $('#dynamic_password').focus(function(){
        $('.pass .focus_text').css('display','block');
    });
    $('#dynamic_password').blur(function(){
        $('.pass .focus_text').css('display','none');
    });

    //opactiy
    $('.a1').hover(function(){
        $('.a1').css('background','url("../images/icon.jpg")');
        },function(){
        $('.a1').css('background','url("../images/icon_light.jpg")');
    });
    $('.a2').hover(function(){
        $('.a2').css('background-image','url("../images/icon.jpg")','background-position','-57px 0');
        },function(){
        $('.a2').css('background-image','url("../images/icon_light.jpg")','background-position','-57px 0');
    });
    $('.a3').hover(function(){
        $('.a3').css('background-image','url("../images/icon.jpg")','background-position','--114px 0');
        },function(){
        $('.a3').css('background-image','url("../images/icon_light.jpg")','background-position','-114px 0');
    });
    $('.a4').hover(function(){
        $('.a4').css('background-image','url("../images/icon.jpg")','background-position','-169px 0');
        },function(){
        $('.a4').css('background-image','url("../images/icon_light.jpg")','background-position','-169px 0');
    });
    $('.a5').hover(function(){
        $('.a5').css('background-image','url("../images/icon.jpg")','background-position','-224px 0');
        },function(){
        $('.a5').css('background-image','url("../images/icon_light.jpg")','background-position','-224px 0');
    });
    $('.a6').hover(function(){
        $('.a6').css('background-image','url("../images/icon.jpg")','background-position','0 -54px');
        },function(){
        $('.a6').css('background-image','url("../images/icon_light.jpg")','background-position','0 -54px');
    });
    $('.a7').hover(function(){
        $('.a7').css('background-image','url("../images/icon.jpg")','background-position','-57px -54px');
        },function(){
        $('.a7').css('background-image','url("../images/icon_light.jpg")','background-position','-57px -54px');
    });
    $('.a8').hover(function(){
        $('.a8').css('background-image','url("../images/icon.jpg")','background-position','-114px -54px');
        },function(){
        $('.a8').css('background-image','url("../images/icon_light.jpg")','background-position','-114px -54px');
    });
    $('.a9').hover(function(){
        $('.a9').css('background-image','url("../images/icon.jpg")','background-position','-169px -54px');
        },function(){
        $('.a9').css('background-image','url("../images/icon_light.jpg")','background-position','-169px -54px');
    });
    $('.iconAccout span').click(function(){
        $('.iconAccout span i').toggleClass('slider');
        $('.icon-p').toggle("slow");
    })

    //form yanzheng
    // $.validator.addMethod("isMobile", function(value, element) {
    //     var length = value.length;
    //     var mobile = /^(13[0-9]{9})|(18[0-9]{9})|(14[0-9]{9})|(17[0-9]{9})|(15[0-9]{9})$/;
    //     return this.optional(element) || (length == 11 && mobile.test(value));
    // }, "请正确填写您的手机号码");
    /*$('#login-dynamic-form').validate({
        debug:false,
        onkeyup:false,
        rules: {
            userphone: {
                required: true,
                minlength: 11,
                isMobile: true
            },
            code: {
                required: true,
                digits : true
            }
        },
        messages: {
            userphone: {
                required: "请输入11位手机号码",
                minlength: "确认手机号码不能小于11个字符",
                isMobile: "请正确填写您的手机号码"
            },
            code: {
                required: "",
                digits: "验证码应该输入数字"
            }
        },


    });*/

});