$(function (){

	$('.ui-loader').remove();
	$.event.special.swipe.horizontalDistanceThreshold = 50;
	console.log($.event.special.swipe.horizontalDistanceThreshold);
	var btnMenu = $("#btn-menu");
	var menuContainer = $("#menu-container");

	function closeMenu(e){
		if (menuContainer.css('left') == '0px'){
			menuContainer.animate({
				left: "-=256px"
			},150,function(){
				console.log("menu chiuso");
			});
			
			btnMenu.animate({
				left: "+=24px"
			},150);

		}
	}

	function openMenu(e){
		if (menuContainer.css('left') == '-256px'){
			menuContainer.animate({
				left: "+=256px"
			},150,function(){
				console.log("menu aperto");
			});
			
			btnMenu.animate({
				left: "-=24px"
			},150);

		}
	}

	btnMenu.click(function(e){
		//console.log("click sul bottone del menu");
		if (menuContainer.css('left') == '-256px'){
			menuContainer.animate({
				left: "+=256px"
			},150,function(){
				console.log("menu aperto");
			});
			
			btnMenu.animate({
				left: "-=24px"
			},150);

		}else{
			menuContainer.animate({
				left: "-=256px"
			},150,function(){
				console.log("menu chiuso");
			});

			btnMenu.animate({
				left: "+=24px"
			},150);
			
		}
	});

	var menuItems = $('.menu-item');
	menuItems.on("vmousedown", function(e){
		var target = $(e.target);
		target.css('background-color', 'white');
		target.css('color', '#68B5F5');
	});
	menuItems.on("vmouseup", function(e){
		var target = $(e.target);
		target.css('background-color', 'transparent');
		target.css('color', 'white');
	});
	menuItems.on('tap',function(e){
		var url = $(e.target).attr('href');
		var target = $('a[name='+url.slice(1)+']');
		
		$('html,body').animate({
			scrollTop: target.offset().top - 48
		},500);

		closeMenu();
	});

	$(window).on("swiperight",openMenu);

	$(window).on("swipeleft",closeMenu);
});