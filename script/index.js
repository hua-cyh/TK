// 滚轮事件
var nav=document.getElementsByClassName("nav_bg")[0];
var content2=document.getElementsByClassName("content-2_bg")[0];
var movespeed=50;
var  time3;

window.onload=tab;
function tab(){
var s= window.navigator.appVersion;
if (s==="5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; InfoPath.3; rv:11.0) like Gecko") {
}else {
  window.onmousewheel = document.onmousewheel =  scrollFunc;  
}
}


   var scrollFunc = function (e) {
        time3=null;
        clearInterval(time3);
        e = e || window.event;
        if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件 

              if (e.wheelDelta > 0) { //当滑轮向上滚动时
                  if (window.scrollY>=(content2.offsetTop+movespeed)) { 
                  window.onmousewheel = document.onmousewheel = null;  
                  time3=setInterval(function () {
                           var a=window.scrollY;
                          GoGo(-movespeed);
                          if (window.scrollY<=(content2.offsetTop+movespeed)||a==window.scrollY) {
                            clearInterval(time3);
                            window.onmousewheel = document.onmousewheel = scrollFunc;  
                          }
                    }, 1);
                    }else {
                      window.onmousewheel = document.onmousewheel = null;  
                          time3=setInterval(function () {
                           var a=window.scrollY;
                          GoGo(-movespeed);
                          if (window.scrollY<=nav.offsetTop||a==window.scrollY) {
                            clearInterval(time3);
                            window.onmousewheel = document.onmousewheel = scrollFunc;  
                          }
                    }, 1);  
                    } 

              }else { //当滑轮向下滚动时
                  if (window.scrollY<content2.offsetTop) {
                      window.onmousewheel = document.onmousewheel = null;    
                      time3=setInterval(function () {
                                var a=window.scrollY;
                                GoGo(movespeed);
                                if ( (window.scrollY>=content2.offsetTop) ||(a==window.scrollY) ) {
                                    clearInterval(time3);
                                    window.onmousewheel = document.onmousewheel = scrollFunc;  
                                    i++;
                                }
                        }, 1);

                    }else{
                      window.onmousewheel = document.onmousewheel = null;  
                      time3=setInterval(function () {
                                var a=window.scrollY;
                                GoGo(movespeed);
                                if ( a==window.scrollY) {
                                    clearInterval(time3);
                                    window.onmousewheel = document.onmousewheel = scrollFunc;  
                                }
                        }, 1);

                    }
              }
        }

    }

function GoGo (yy) {
      window.scrollBy(0, yy);//yy即为滚动速度
}
                  