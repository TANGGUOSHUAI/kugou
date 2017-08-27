$('.car').mouseover(function(){
	$('.select').css('display','block');
}).mouseout(function(){
	$('.select').css('display','none');
})
$('.select').mouseover(function(){
	$(this).css('display','block');
}).mouseout(function(){
	$(this).css('display','none');
})
window.onload = function(){
//检测手机号码
$('.message>.messagea').removeAttr("href");
$('.phone>td>input').mouseover(function(){
	$(this).css('border','1px solid #54ade7');
	$(this).css('backgroundColor','rgba(10,193,252,.1)');
}).mouseout(function(){
	$(this).css('border','1px solid #ccc');
	$(this).css('background','#F3F3F3');
})

$('.mima>td>input').mouseover(function(){
	$(this).css('border','1px solid #54ade7');
	$(this).css('backgroundColor','rgba(10,193,252,.1)');
}).mouseout(function(){
	$(this).css('border','1px solid #ccc');
	$(this).css('background','#F3F3F3');
})

$('.queren>td>input').mouseover(function(){
	$(this).css('border','1px solid #54ade7');
	$(this).css('backgroundColor','rgba(10,193,252,.1)');
}).mouseout(function(){
	$(this).css('border','1px solid #ccc');
	$(this).css('background','#F3F3F3');
})



$('.phone>td>input').focus(function(){
	var text= $(this).val();
	if(text===''){
		$('.phone>td>.counter').css('display','block');
	}else if(text!==''){
		$('.phone>td>.counter').css('display','none');
	}
	$(this).css('background','white');
	$(this).css('border','1px solid #54ade7');
}).blur(function(){
	var text = $(this).val();
	// console.log(text);
	var reg = /^[0-9]{11}$/g;
	if(text===''){
		$(this).css('background','#f3f3f3');
		$('.phone>td>.counter').css('display','none');
		$(this).css('border','1px solid #ccc');
		$('.phone>td>.right').css('display','none');
		$('.phone>td>.wrong').css('display','none');
		$('.message>td>.messagea').css('background','#ddd');
		$('.message>td>.messagea').removeClass('active');
	}else if(reg.test(text)){
		// console.log(text);
		$('.message>td>.messagea').css('background','#3db9ec');
		$('.message>td>.messagea').addClass('active');
		$('.message>td>.messagea').attr('cursor','pointer');
		$('.phone>td>.right').css('display','block');
		$('.phone>td>.wrong').css('display','none');
	}else{
		$('.phone>td>.right').css('display','none');
		$('.phone>td>.wrong').css('display','block');
		$('.message>td>.messagea').css('background','#ddd');
		$('.message>td>.messagea').removeClass('active');
	}
	$(this).css('background','#f3f3f3');
	$('.phone>td>.counter').css('display','none');
	$(this).css('border','1px solid #ccc');
})
//检测手机号码结束

//检测密码
$('.mima>td>input').focus(function(){
		// $('.mima>td>.right').css('display','block');
	var text = $(this).val();
	$(this).css('background','white');
	$(this).css('border','1px solid #54ade7');
	// var s =
	$('.mima>td>.counter').text("密码需由6-16位字母、数字和符号组成");
	if(text!==''){
	$('.mima>td>.counter').text("");
	}
}).blur(function(){
	$(this).css('border','1px solid #ccc');
	$(this).css('background','#f3f3f3');

	$('.mima>td>.counter').text("");
	var text = $(this).val();
	var reg = /^[0-9a-zA-Z_=]{6,16}$/g;
	if(text===""){
		$('.mima>td>.right').css('display','none');
		$('.mima>td>.wrong').css('display','none');

	}else if(reg.test(text)){
		$('.mima>td>.right').css('display','block');
		$('.mima>td>.counter').text("");
		$('.mima>td>.wrong').css('display','none');
	}else{
		$('.mima>td>.right').css('display','none');
		$('.mima>td>.counter').text("");
		$('.mima>td>.wrong').css('display','block');
	}

})

$('.mima>td>input').keyup(function(){
		var len = $('.mima>td>input').val().length; 
		console.log(len);
		console.log(len);
		if(len<6){

		return false;
		}else{

		console.log('111');
		var text = $(this).val();
		var reg1 = /[0-9]{6,16}$/g;
		var reg2 = /[0-9A-Za-z]{6,10}$/g;
		var reg3 = /^[0-9a-zA-Z_=]{6,16}$/g;
		if(reg1.test(text)){
			$('.risk>.ruo>#ruo').css('width','54px');
		}else if(reg2.test(text)){
			$('.risk>.zhong>#zhong').css('width','54px');
			$('.risk>.ruo>#ruo').css('width','54px');
			$('.risk>.ruo>#qiang').css('width','54px');
		
		}else if(reg3.test(text)){
			$('.risk>.qiang>#qiang').css('width','54px');
			$('.risk>.zhong>#zhong').css('width','54px');
		}
		}

	})
//检测密码结束
//检测确认密码开始
$('.queren>td>input').focus(function(){
	$('.queren>td>.counter').text('请再次输入密码');
	$(this).css('background','white');
}).blur(function(){
	$('.queren>td>.counter').text('');
	var aa = $('.mima>td>input').val();
	var bb = $('.queren>td>input').val();
	if(aa==bb){
		// console.log('111');
		$('.queren>td>.wrong').css('display','none');

		$('.queren>td>.right').css('display','block');
	}else{
		$('.queren>td>.wrong').css('display','block');
		$('.queren>td>.right').css('display','none');

	}

})


}