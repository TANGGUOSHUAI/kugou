$('.one').click(function(){
	$(this).css('background-position','-179px -149px')
})


$('.hot').click(function() {
    $('.first').slideToggle("slow");
})

$('.feature').click(function() {
    $('.second').slideToggle("slow");
})

$('.global').click(function() {
    $('.third').slideToggle("slow");
})