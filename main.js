$(function() {
	
	//generate items with random colored circles
	for(var i=0; i<50; i++) {
		var randomColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
		var item = '<div class="item"><div class="mini-circle" style="background: '+randomColor+'"></div><div class="text">Lorem Ipsum is simply dummy text of the</div></div>'
		$('.content .left').append(item);
	}
	
	$('body').css('display', 'block');
});