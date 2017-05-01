
$(function(){
	
	$('[data-toggle="tooltip"]').tooltip();
	function resize(){
		
		var windowwidth = $(window).width();
		
		$("#main_ad>.carousel-inner>.item").each(function(i,item){
			
			var $item = $(item);
			
			if(windowwidth<768){
				
				var $imag = $item.data("image-sm");
				//$item.css("backgroundImage","url("+$imag+")");
				$item.css("backgroundImage","url()");
				$item.html("<img src="+$imag+">");
			}
			else{
				
				$item.html("");
				var $imag = $item.data("image-lg");
				$item.css("backgroundImage","url("+$imag+")");
		
				
			}
			});	
	};
	
	
	$(window).on("resize",resize).trigger("resize");
	
	
	var $lis = $(".nav-tabs").children();
	
	var width =0;
	
     $lis.each(function(index,li){
		 
		 width = width+li.clientWidth;
		 });
		 
	
	$(window).on("resize",function(){
		
		if($(window).width()<768){
			
			$(".nav-tabs").css("width",width+20);
			$(".gundong").css("overflow-x","scroll");
		
	}else{
		
		$(".nav-tabs").css("width","100%");
		$(".gundong").css("overflow-x","");
	}
		});
	
	
	var $newlis = $("#news .nav-stacked").children();
	
		  $newlis.on("click",function(){
			  
			  $("#showshow").text($(this).data("show"));
			  
			  });  
			  
			  
	//移动端的滑动事件
	var touchst = null;
	var touchend = null;
	var touchoffset = 50;
	
	$("#main_ad").on("touchstart",function(e){
		
		touchst = e.originalEvent.touches[0].clientX;
	
		});		  
		
	$("#main_ad").on("touchmove",function(e){
		
		touched = e.originalEvent.touches[0].clientX;
	
		});	
		
	$("#main_ad").on("touchend",function(e){
		
		if(Math.abs(touched-touchst)>touchoffset){
			
			
			$(this).carousel(touched-touchst>0? "prev" : "next");
			
		}
	
		});	  
	
	
	
	});
		