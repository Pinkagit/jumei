function animate(obj,json,fn) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function() {
            var flag = true;
            for(var attr in json){
                var current = parseInt(getStyle(obj,attr));
                var step = ( json[attr] - current) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                obj.style[attr] = current  + step + "px" ;
                console.log(current);
                if(current != json[attr])
                {
                    flag =  false;
                }
            }
            if(flag)
            {
                clearInterval(obj.timer);
                if(fn)
                {
                    fn();
                }
            }
        },30)
}
function getStyle(obj,attr) {
    if(obj.currentStyle)
    {
        return obj.currentStyle[attr];
    }
    else
    {
        return window.getComputedStyle(obj,null)[attr];
    }
}
function scroll() {
    if(window.pageYOffset != null)  //  ie9+ 和其他浏览器
    {
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }
    else if(document.compatMode == "CSS1Compat")  // 声明的了 DTD
    // 检测是不是怪异模式的浏览器 -- 就是没有 声明<!DOCTYPE html>
    {
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return { //  剩下的肯定是怪异模式的
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}