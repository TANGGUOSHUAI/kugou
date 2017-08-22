var index = 0;
var timer = 0;
var ul = document.querySelector('#content>.ppt>.ppt-ul');
var li = document.querySelectorAll('#content>.ppt>.ppt-ul>li');
var circle = document.querySelectorAll('#content>.ppt>.index>a');
console.log(circle);
var num = -663;
var len = li.length;
console.log(len);
function run(){
	timer = setInterval(function(){
		circle[index].className ="";
		index++;
		circle[0].className = 'smallshadow';
		if(index>len-1){
			index = 0;
			ul.style.left = 0;
		}else{
			circle[0].className = '';
			ul.style.left = num * index+'px';
			circle[index].className = 'smallshadow';
		}
	},2000)
	ul.onmouseover = function(){
		clearInterval(timer);
	}
	ul.onmouseout = function(){
		run();
	}
}
run()
for(var i = 0; i < len; i++){
		circle[i].onmouseover = function(){
		circle[index].className = '';
		index = this.getAttribute('data-index');
		ul.style.left= index * num +'px';
		circle[index].className = 'smallshadow';
	}
}
