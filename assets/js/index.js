//轮播图开始
var ppt = document.querySelector('#ppt');
console.log(ppt);
var imgli = document.querySelectorAll('#ppt>ul>img');
console.log(imgli);
var numli = document.querySelectorAll('#ppt>ol>a');
console.log(numli);
var right = document.querySelector('.right');
var left = document.querySelector('.left');
var len = imgli.length;
console.log(len);
var timer = 0;
var index = 0;

function run() {
    timer = setInterval(function() {
        imgli[index].style.display = "none";
        numli[index].className = "";
        index++;
        if (index > len - 1) {
            index = 0;
        }
        imgli[index].style.display = "block";
        numli[index].className = "active";
    }, 5000)
}
run();
ppt.onmouseover = function() {
    right.style.display = "block";
    left.style.display = "block";
}
ppt.onmouseout = function() {
    right.style.display = "none";
    left.style.display = "none";
}
for (var i = 0; i < numli.length; i++) {
    numli[i].onmouseover = function() {
        imgli[index].style.display = "none";
        numli[index].className = "";
        index = this.getAttribute('data-index');
        imgli[index].style.display = "block";
        numli[index].className = "active";
    }
}
right.onclick = function() {
    imgli[index].style.display = "none";
    numli[index].className = "";
    index++;
    if (index > imgli.length - 1) {
        index = 0;
    }
    imgli[index].style.display = "block";
    numli[index].className = "active";
}
left.onclick = function() {
    imgli[index].style.display = "none";
    numli[index].className = "";
    index--;
    if (index < 0) {
        index = imgli.length - 1;
    }
    imgli[index].style.display = "block";
    numli[index].className = "active";
}
//轮播图结束