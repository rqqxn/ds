/*图片左右滚动*/
$(function(){
     var len  = $(".num > li").length;  
	 var index = 0;
	 var adTimer;
	 $(".num li").mouseover(function(){
		index  =   $(".num li").index(this);
		showImg(index);
	 }).eq(0).mouseover();	
	 //滑入停止动画，滑出开始动画.
	 $('.ad').hover(function(){
			 clearInterval(adTimer);
		 },function(){
			 adTimer = setInterval(function(){
			    showImg(index)
				index++;
				if(index==len){index=0;}
			  } , 3000);
	 }).trigger("mouseleave");
})
//通过控制left ，来显示不同的幻灯片
function showImg(index){
    var adWidth = $(".ad").width();
	$(".slider").stop(true,false).animate({left:-adWidth*index},500);
	$(".num li").removeClass("on").eq(index).addClass("on");
}
