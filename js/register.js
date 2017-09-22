/*
* @Author: Marte
* @Date:   2017-09-13 08:25:35
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-15 17:09:09
*/

'use strict';
$(document).ready(function(){
    $('.tosignup a,.act a').hover(function(){
        $(this).css('text-decoration','underline');
    },function(){
        $(this).css('text-decoration','none');
    });
    $('#mobile').focus(function(){
        $(this).parents('.textbox_ui').find('.focus_text').css('display','block');
    }).blur(function(){
        $(this).parents('.textbox_ui').find('.focus_text').css('display','none');
    });
    $('#mobile_verify').focus(function(){
        $(this).parents('.textbox_ui').find('.focus_text').css('display','block');
    }).blur(function(){
        $(this).parents('.textbox_ui').find('.focus_text').css('display','none');
    });
    $('#password').focus(function(){
        $(this).parents('.textbox_ui').find('.focus_text').css('display','block');
    }).blur(function(){
        $(this).parents('.textbox_ui').find('.focus_text').css('display','none');
    });
    $('#password2').focus(function(){
        $(this).parents('.textbox_ui').find('.focus_text').css('display','block');
    }).blur(function(){
        $(this).parents('.textbox_ui').find('.focus_text').css('display','none');
    });
});