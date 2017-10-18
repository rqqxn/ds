//01 网站换肤
$(function(){
	var $li =$("#skin li");
	$li.click(function(){
		switchSkin( this.id );
	});
	var cookie_skin = $.cookie("MyCssSkin");
	if (cookie_skin) {
		switchSkin(cookie_skin);
	}
});

function switchSkin(skinName){
	$("#"+skinName).addClass("selected")                //当前<li>元素选中
	.siblings().removeClass("selected");  //去掉其他同辈<li>元素的选中
    $("#cssfile").attr("href","css/skin/"+ skinName +".css"); //设置不同皮肤
	$.cookie( "MyCssSkin" ,  skinName , { path: '/', expires: 10 });
}

//导航效果（兼容IE6）
//$(function(){
//	   $("#navigation ul li:has(ul)").hover(function(){
//			$(this).children("ul").stop(true,true).slideDown("slow");
//      },function(){
//		    $(this).children("ul").stop(true,true).slideUp("slow");
//		});
//})



//新闻滚动
$(function(){
        var $this = $(".scrollNews");
		var scrollTimer;
		$this.hover(function(){
			  clearInterval(scrollTimer);
		 },function(){
		   scrollTimer = setInterval(function(){
						 scrollNews( $this );
					}, 3000 );
		}).trigger("mouseleave");
});

function scrollNews(obj){
    var $self = obj.find("ul:first"); 
    var lineHeight = $self.find("li:first").height(); //获取行高
    $self.animate({ "marginTop" : -lineHeight +"px" }, 600 , function(){
        $self.css({marginTop:0}).find("li:first").appendTo($self); //appendTo能直接移动元素
   	})
}

//模块展开和折叠 
$(function(){
	 $(".module_up_down").toggle(function(){
		var $self = $(this);
		$self.prev().slideToggle("slow",function(){
			$("img",$self).attr("src","img/down.png");
		});
	},function(){
		var $self = $(this);
		$self.prev().slideToggle("slow",function(){
			$("img",$self).attr("src","img/up.png");
		});
	})
})

$(function(){
	 $(".sort_up_down").toggle(function(){
		var $self = $(this);
		$self.parent().children("ul").slideToggle("slow",function(){
			$("img",$self).attr("src","img/sort_down.png");
		});
	},function(){
		var $self = $(this);
		$self.parent().children("ul").slideToggle("slow",function(){
			$("img",$self).attr("src","img/sort_up.png");
		});
	})
})


//Exhibitor right
var flag = "left";
function DY_scroll(wraper,prev,next,img,imga,speed,or){
	var prev = $(prev);
	var next = $(next);
	var img = $(img).find('ul');
	var w = img.find('li').outerWidth(true);
	next.click(function(){
		img.animate({'margin-left':-w},function(){
			img.find('li').eq(0).appendTo(img);
			img.css({'margin-left':0});
		});
		flag = "left";
	});
	prev.click(function(){
		img.find('li:last').prependTo(img);
		img.css({'margin-left':-w});
		img.animate({'margin-left':0});
		flag = "right";
	}); 
} 
DY_scroll('.hl_main5_content','.hl_scrool_leftbtn','.hl_scrool_rightbtn','.hl_main5_content1','.hl_main5_content1',2,true);// true为自动播放，不加此参数或false就默认不自动 


//price1
var flag = "left";
function DY_scroll(wraper,prev,next,img,imga,speed,or){
	var prev = $(prev);
	var next = $(next);
	var img = $(img).find('ul');
	var w = img.find('li').outerWidth(true);
	next.click(function(){
		img.animate({'margin-left':-w},function(){
			img.find('li').eq(0).appendTo(img);
			img.css({'margin-left':0});
		});
		flag = "left";
	});
	prev.click(function(){
		img.find('li:last').prependTo(img);
		img.css({'margin-left':-w});
		img.animate({'margin-left':0});
		flag = "right";
	}); 
} 
DY_scroll('.price1','.leftbtn','.rightbtn','.price1_content1','.price1_content1',2,true);// true为自动播放，不加此参数或false就默认不自动 






















