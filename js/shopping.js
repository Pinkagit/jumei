/*
* @Author: Marte
* @Date:   2017-09-13 10:59:05
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-19 14:12:28
*/

'use strict';
$(document).ready(function(){
    $('.out,.query').hover(function(){
        $(this).css('color','#ed145b');
    },function(){
        $(this).css('color','#999999');
    });
    $('.cart_timer_out .cart_timer_tip').hover(function(){
        $('.pop_box').css('display','block');
    },function(){
        $('.pop_box').css('display','none');
    });
    $('.content_footer .cart_timer_tip').hover(function(){
        $('.pop_box').css('display','block');
    },function(){
        $('.pop_box').css('display','none');
    });
    $('.go_back_shopping,.clear_cart_all').hover(function(){
        $(this).css('color','#ed145b','text-decoration','underline');
    },function(){
        $(this).css('color','#333','text-decoration','none');
    });
    //点击商品按钮
    $('.cart_item_selector').click(function(){
        var goods = $(this).closest('.cart_groub_item').find('.cart_item_selector');
        var goodsS = $(this).closest('.cart_groub_item').find('.cart_item_selector:checked');
        var Shops = $(this).closest('.cart_groub_item').find('.cart_groub_selector');
        if (goods.length == goodsS.length) {
            Shops.prop('checked', true);
            if ($('.cart_item_selector').length == $('.cart_item_selector:checked').length) {
                $('#js_all_selector').prop('checked', true);
                Total();
            } else {
                $('#js_all_selector').prop('checked', false);
                Total();
            }
        } else {
            Shops.prop('checked', false);
            $('#js_all_selector').prop('checked', false);
            Total();
        }
    });
    //点击店铺按钮
    $('.cart_groub_selector').change(function(){
        if ($(this).prop('checked') == true) {
            $(this).parents('.cart_groub_item').find('.js_goods_selector').prop('checked', true);
            if ($('.cart_groub_selector').length == $('.cart_groub_selector:checked').length) {
                $('#js_all_selector').prop('checked', true);
                Total();
            } else {
                $('#js_all_selector').prop('checked', false);
                Total();
            }
        } else {
            $(this).parents('.cart_groub_item').find('.js_goods_selector').prop('checked', false);
            $('#js_all_selector').prop('checked', false);
            Total();
        }
    });
    //点击全选按钮
    $('#js_all_selector').click(function(){
        if ($(this).prop('checked') == true) {
            $('.js_goods_selector').prop('checked', true);
            Total();
        } else {
            $('.js_goods_selector').prop('checked', false);
            Total();
        }
        $('.cart_groub_selector').change();
    });
    //
    $('.increase_one').click(function(){
        var t=$(this).parent().find('input[class*=item_quantity]');
        t.val(parseInt(t.val())+1);
        if (t.val()<=1) {
            t.val(1);
        }
        $('.decrease_one').removeClass('disabled').css({cursor: "pointer",color: "#666"});
        Total();
    });
    $('.decrease_one').click(function(){
        var t=$(this).parent().find('input[class*=item_quantity]');
        t.val(parseInt(t.val())-1);
        if(t.val()<=1){
            t.val(1);
            $('.decrease_one').addClass('disabled').css({cursor: "not-allowed",color: "#ccc"});
        }
        Total();
    });
    //计算总价
    var Total=function Totalprice() {
        var allprice = 0;//总价
        var allonum = 0;//总件
        $('.cart_groub_item').each(function(){//循环每个店铺
            var oprice = 0;
            var satotal = 0;
            $(this).find('.cart_item_selector').each(function(){//循环店铺里面的商品
                if ($(this).is(':checked')) { //如果该商品被选中
                    var num = parseInt($(this).parents('.cart_item').find('.item_quantity').val());//得到商品数量
                    var price = parseInt($(this).parents('.cart_item').find('.jumei_price').text());//得到商品单价
                    var mprice = parseInt($(this).parents('.cart_item').find('.market_price').text());//得到商品原价
                    var cprice = mprice - price;//得到商品差价
                    var stotal = cprice * num;//得到节省的钱
                    var total = price * num;
                    oprice+= total;
                    allonum+= num;
                    satotal = stotal;
                }
                $(this).closest('.cart_groub_item').find('.groub_total_price').text(oprice.toFixed(2));//显示被选中商品的店铺总价
                $(this).closest('.cart_item').find('.item_saved_price').text(satotal.toFixed(2));
            });
            var oneprice = parseInt($(this).find('.groub_total_price').text());//得到每个店铺的总价
            allprice+= oneprice;//计算所有店铺的总价
        });
        $('.total_price').text(allprice.toFixed(2));//输出全部总价
        $('.total_amount').text(allonum);
    };
    // 删除商品
    $('.clear_cart_all').click(function(){
        $('.cart_item').remove();
        $('.groub_total_price').text('00.00');
        Total();
    });
    //点击删除按钮
    $('.delete_item').click(function(){
        $(this).closest('.cart_item').remove();
        var SC = $(this).closest('.cart_groub_item').find('.cart_item');
        if($('.cart_groub_item').find('.cart_item') == true) {
            Total();
        }else{
            $('.groub_total_price').text('00.00');
            Total();
        }
    });

    Total();
});
