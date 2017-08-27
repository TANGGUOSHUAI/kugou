// window.onload = function(){

var timer = 0;
var progress = document.querySelector('.progressone');
var pro = document.querySelector('.progress');
var total  = document.querySelector('.total');
var hour = document.querySelector('.hour');
console.log(progress); // 3:45
var video = document.querySelector('audio');
console.log(video);
var sum = 0;
function run(){
	var aa = 0;
	var bb = 0;
	var aaa = 0;
	timer = setInterval(function(){
		// sum = setInterval(function(){
			sum++;
			progress.style.width = sum +'px';
			if(sum>226){
				sum = 226;
			progress.style.width =  0 +'px';
			// $('.pause').css('background-position','-65px -5px');
			$('.pause').css('background-position','-5px -5px');
			}
		// }100);
		// sum();
		},1000);
}
var audio = document.querySelector('audio');
console.log(audio);

$('.pause').click(function(){
	if(audio.paused){
		audio.play();
		run();
		$(this).css('background-position','-65px -65px');
	}else{
		audio.pause();
		clearInterval(timer);
		$(this).css('background-position','-65px -5px');
	}
})
var one = document.querySelector('.xiazai');
var two = document.querySelector('#mydiv');
console.log(one);
one.onclick=function(){
	alert(two.innerHTML);
}

$('.voice').click(function(){
	if(audio.muted){
		audio.muted=false;
		$('.voice').css('background-position','-64px -195px');
	}else{
		audio.muted=true;
		// console.log('111');
		$('.voice').css('background-position','-128px -195px');
	}
})
    video.ondurationchange=function(){
    	total.innerHTML = formatTime(video.duration);
   	 	hour.innerHTML = formatTime(video.currentTime);
   	 	console.log(formatTime(video.currentTime));
		function formatTime(time) {
        var minute = Math.floor(time / 60);
        if (minute < 10) {
            minute = '0' + minute;
        }
        var second = Math.floor(time % 60);
        if (second < 10) {
            second = '0' + second;
        }
        return minute + ':' + second;
    }
    var mark = true;
    video.ontimeupdate = function() {
        if (mark) {
            hour.innerHTML = formatTime(video.currentTime);
            var bi = video.currentTime / video.duration;
        }
    }
    }

    var right = document.querySelector('.right');
    var live = document.querySelector('.live');
    right.onclick = function(){
    	live.innerHTML = 'Time(live)';
    	pro.style.width = 157+'px';
    	$('.pause').css('background-postion','65px -65px')
    	console.log(video.currentSrc);
    	console.log(video.src);
    	video.src="../../assets/video/time.mp3";
    	video.autoplay = true;
    	clearInterval(timer);
    	timer = setInterval(function(){
		// sum = setInterval(function(){
			sum++;
			progress.style.width = sum +'px';
			if(sum>157){
				sum = 157;
			progress.style.width =  0 +'px';
			// $('.pause').css('background-position','-65px -5px');
			$('.pause').css('background-position','-5px -5px');
			}
		// }100);
		// sum();
		},1000);
    }