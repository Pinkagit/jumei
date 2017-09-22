$(function(){
    var diqiuH=$(".diqiu").offset().top;
    $(window).scroll(function(){
        var scrollH=$(this).scrollTop();
        if(scrollH+100>=diqiuH){
            $(".diqiu").css({"animation":"1s diqiu","top":"850px"});
        }
    });
    });
$(function(){
    var qituH=$(".qitu").offset().top;
    $(window).scroll(function(){
        var scrollH=$(this).scrollTop();
        if(scrollH+400>=qituH){
            $(".qitu").css({"animation":"1s qitu","top":"1730px"});
        }
    });
    });
$(function(){
    var zhuanxiangyouhuiH=$(".zhuanxiangyouhui").offset().top;
    $(window).scroll(function(){
        var scrollH=$(this).scrollTop();
        if(scrollH+500>=zhuanxiangyouhuiH){
        	$("#img4").css({"animation":"2s zhuanxiangyouhui"});
        	$("#img5").css({"animation":"2s zhuanxiangyouhui 0.15s"});
        	$("#img6").css({"animation":"2s zhuanxiangyouhui 0.3s"});
        	$("#img7").css({"animation":"2s zhuanxiangyouhui 0.45s"});
        	$("#img8").css({"animation":"2s zhuanxiangyouhui 0.6s"});
        	$("#img9").css({"animation":"2s zhuanxiangyouhui 0.75s"});
        	$("#zhuanxiangyouhui_p").css({"animation":"2s zhuanxiangyouhui 0.9s"});
        	setTimeout(function(){
        		Tab();
			},2000);
        }
        function Tab(){
					$("#img4").css({"opacity":"1"});
        			$("#img5").css({"opacity":"1"});
        			$("#img6").css({"opacity":"1"});
        			$("#img7").css({"opacity":"1"});
        			$("#img8").css({"opacity":"1"});
        			$("#img9").css({"opacity":"1"});
        			$("#zhuanxiangyouhui_p").css({"opacity":"1"});
				}
    });
    });
$(function(){
    var bianjiezhifuH=$(".bianjiezhifu").offset().top;
    $(window).scroll(function(){
        var scrollH=$(this).scrollTop();
        if(scrollH+100>=bianjiezhifuH){
        	$("#img10").css({"animation":"1s shouji linear","left": "86px"});
        	$("#img11").css({"animation":"1s weixin linear","top": "537px"});
        	$("#img12").css({"animation":"1s tubiao linear","top": "178px"});
        	$("#img13").css({"animation":"1s zhifubao linear","left": "-389px"});
        	$("#img14").css({"animation":"1s idka linear","left": "-438px"});
        	$("#bianjiezhifu_p").css({"animation":"1s bianjiezhifu_p linear","top": "0","left": "-90px"});
        }
    });
    });
$(function(){
    var genzongwuliuH=$(".genzongwuliu").offset().top;
    $(window).scroll(function(){
        var scrollH=$(this).scrollTop();
        if(scrollH+400>=genzongwuliuH){
        	$("#img15").css({"animation":"1s genzongwuliu_b linear","left": "738px","top": "-65px"});
        	$("#img16").css({"animation":"1s genzongwuliu_s linear","left": "430px"});
        	$("#genzongwuliu_p").css({"animation":"1s genzongwuliu_p linear","top": "0px","left": "-90px"});
        }
    });
    });