document.addEventListener('DOMContentLoaded', function(){


// SVG pcurio
var SVGpcurio = document.querySelectorAll('.svg-pcurio');

for (i = 0; i < SVGpcurio.length; ++i) {
SVGpcurio[i].innerHTML = '<?xml version="1.0" encoding="utf-8"?>  <!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->  <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"    width="130.96px" height="269.877px" viewBox="0 0 130.96 269.877" enable-background="new 0 0 130.96 269.877"    xml:space="preserve">  <g>   <path fill="#231F20" d="M123.02,216.299c3.043,0,5.666-1.389,7.006-3.709c1.341-2.323,1.238-5.288-0.293-7.928l-55.711-96.509    l22.981-39.815h-11.36l-20.156,34.916L11.555,9.838h107.856L97.003,48.659h11.363l21.365-37.019    c1.531-2.64,1.633-5.604,0.293-7.931C128.686,1.389,126.062,0,123.02,0H7.945c-3.05,0-5.672,1.389-7.013,3.718    c-1.34,2.326-1.228,5.285,0.293,7.925l55.729,96.51l-6.945,12.029l5.682,9.835l9.797-16.969l53.926,93.41H48.169l-5.681,9.841    H123.02z"/>   <path fill="#231F20" d="M56.953,161.728L1.224,65.221c-1.521-2.637-1.631-5.601-0.292-7.928c1.341-2.323,3.963-3.711,7.014-3.711    h11.818l5.682,9.834H11.555l53.932,93.414l9.8-16.972l5.68,9.841l-6.942,12.028l22.981,39.812H85.642l-20.155-34.914l-53.932,93.41    H119.41l-22.406-38.814h11.361l21.368,37.016c1.529,2.644,1.632,5.607,0.291,7.93c-1.34,2.325-3.962,3.711-7.005,3.711H7.945    c-3.051,0-5.673-1.393-7.014-3.715c-1.339-2.326-1.229-5.29,0.292-7.932L56.953,161.728z"/>   <path fill="#231F20" d="M119.41,63.416l-32.763,56.76l5.681,9.841l37.405-64.799c1.529-2.643,1.632-5.605,0.291-7.928    c-1.34-2.326-3.962-3.709-7.005-3.709H42.488l5.682,9.835H119.41z"/>   <path fill="#231F20" d="M11.555,206.458l32.772-56.764l-5.681-9.838l-37.421,64.8c-1.521,2.64-1.633,5.604-0.293,7.931    c1.342,2.323,3.963,3.712,7.014,3.712h11.818l5.682-9.841H11.555z"/>  </g>  <g id="Layer_3">  </g>  <g id="Layer_2">  </g>  </svg>  ';
}


});;$(document).ready(function() {
	// navigation click actions	
	$('.scroll-link').on('click', function(event){
		event.preventDefault();
		var sectionID = $(this).attr("data-id");
		scrollToID('#' + sectionID, 750);
	});
	// scroll to top action
	$('.scroll-top').on('click', function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop:0}, 'slow'); 		
	});
	// mobile nav toggle
	$('#nav-toggle').on('click', function (event) {
		event.preventDefault();
		$('#main-nav').toggleClass("open");
	});
});
// scroll function
function scrollToID(id, speed){
	var offSet = 50;
	var targetOffset = $(id).offset().top - offSet;
	var mainNav = $('#main-nav');
	$('html,body').animate({scrollTop:targetOffset}, speed);
	if (mainNav.hasClass("open")) {
		mainNav.css("height", "1px").removeClass("in").addClass("collapse");
		mainNav.removeClass("open");
	}
}
if (typeof console === "undefined") {
    console = {
        log: function() { }
    };
}
