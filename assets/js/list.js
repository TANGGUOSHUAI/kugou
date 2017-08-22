// $('.one').click(function(){
// 	$(this).css('background-position','-179px -149px')
// })


$('.hot').click(function() {
    $('.first').slideToggle("slow");
})

$('.feature').click(function() {
    $('.second').slideToggle("slow");
})

$('.global').click(function() {
    $('.third').slideToggle("slow");
})


var num = 0;
// var sum = 1;
$('.one').click(function(){
	num++;
	if(num%2==0){
		$(this).css('background-position','-179px -179px');
		$('.two').css('background-position','-179px -179px');

	}else{
		$(this).css('background-position','-179px -149px');
		$('.two').css('background-position','-179px -149px');
	}
})


	var aum = 0;
$('.two').click(function(){
	var sum = 1;
	sum++;
	aum++;
	// console.log($('.two').length);
	// for(var i = 0; i < $('.two').length; i++){
	// 	$('.two').click(function(){
	// 		// console.log($(this));
	// 	})
	// }
	if(sum%2==0){
		// console.log('111');
		$(this).css('background-position','-179px -149px');
		$('.one').css('background-position','-179px -149px');
		console.log('111');
	}else if(aum%2!=0){
		$('.one').css('background-position','-179px -179px');
		// $(this).css('background-position','-179px -179px');
		console.log('2222');

	}
})


// var two = document.querySelectorAll('.two');
// console.log(two);
// var one = document.querySelector('.one');
// console.log(one);
// var len = two.length;
// console.log(len);
// var sum = 0;
// // var a = 
// for(var i = 0; i<len;i++){
// 	two[i].onclick = function(){
// 		// sum++;
// 		two[i].style.backgroundPositionX = -20+'px';
// 	}
// }