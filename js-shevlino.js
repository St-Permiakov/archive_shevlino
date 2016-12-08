$(document).ready(function(){

$(".fancybox").fancybox();

//Плавное появление блоков	

$('.main-line').click(function(){
	$(this).next("div").slideToggle(500);
});

//Плавный скроллинг
$('.main-nav a').click(function(){
	var scroll_el = $(this).attr('href');
		if ($(scroll_el).length != 0) {
		$('html, body').animate({ scrollTop: $(scroll_el).offset().top - 50}, 500);
		};
		return false;
});

//Кнопка возврата к шапке
$(function() {
	$(window).scroll(function() {
	if($(this).scrollTop() != 0) {
		$('#toTop').fadeIn();
		$('.main-nav li').css('left','-45px');
	} else {
		$('.main-nav li').css('left','');
		$('#toTop').css('display','none');
		
	}
 });
	
	$('#toTop').click(function() {
	$('body,html').animate({scrollTop:0},800);
	});
 });


//Увеличение картинок
$(document).on("click", ".im", function () {
        if ($(this).attr("src") != "") {
            $("#im").attr("src", $(this).attr("src"));
            $("#FixedBlack").show().fadeTo(200, 1);
            $("#im").show().fadeTo(0.5, 1);
        }
    });

    $(document).on("click", "#FixedBlack", function () {
        $("#im").hide();
        $("#FixedBlack").stop(true).fadeTo(200, 0, function () {
            $("#FixedBlack").hide();
        });
    });
 
});

