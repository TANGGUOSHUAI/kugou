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

//鼠标移入图片显示阴影层开始

$('.big').mouseover(function() {
    $('.big>.bigshadow').css('display', "block");
})
$('.big').mouseout(function() {
    $('.big>.bigshadow').css('display', 'none');
})

$('.spicone').mouseover(function() {
    $('.spicone>.shadow').css('display', 'block');
}).mouseout(function() {
    $('.spicone>.shadow').css('display', 'none');
})


$('.spictwo').mouseover(function() {
    $('.spictwo>.shadow').css('display', 'block');
}).mouseout(function() {
    $('.spictwo>.shadow').css('display', 'none');
})


$('.spicthree').mouseover(function() {
    $('.spicthree>.shadow').css('display', 'block');
}).mouseout(function() {
    $('.spicthree>.shadow').css('display', 'none');
})

$('.spicfour').mouseover(function() {
    $('.spicfour>.shadow').css('display', 'block');
}).mouseout(function() {
    $('.spicfour>.shadow').css('display', 'none');
})

$('.right-pic>.top>.img').mouseover(function() {
    $('.right-pic>.top>.img>.imgshadow').css('display', 'block');
    // console.log('111');
}).mouseout(function() {
    $('.right-pic>.top>.img>.imgshadow').css('display', 'none');
})

$('.top>.list').mouseover(function() {
    $('.right-pic>.top>.img>.imgshadow').css('display', 'block');
}).mouseout(function() {
    $('.right-pic>.top>.img>.imgshadow').css('display', 'none');
})


$('.right-pic>.middle>.img').mouseover(function() {
    $('.right-pic>.middle>.img>.imgshadow').css('display', 'block');
    // console.log('111');
}).mouseout(function() {
    $('.right-pic>.middle>.img>.imgshadow').css('display', 'none');
})

$('.middle>.list').mouseover(function() {
    $('.right-pic>.middle>.img>.imgshadow').css('display', 'block');
}).mouseout(function() {
    $('.right-pic>.middle>.img>.imgshadow').css('display', 'none');
})



$('.right-pic>.bottom>.img').mouseover(function() {
    $('.right-pic>.bottom>.img>.imgshadow').css('display', 'block');
    // console.log('111');
}).mouseout(function() {
    $('.right-pic>.bottom>.img>.imgshadow').css('display', 'none');
})

$('.bottom>.list').mouseover(function() {
    $('.right-pic>.bottom>.img>.imgshadow').css('display', 'block');
}).mouseout(function() {
    $('.right-pic>.bottom>.img>.imgshadow').css('display', 'none');
})

//鼠标移入图片显示阴影层结束


//地区选项卡
var a = document.querySelectorAll('.new>ul>li>a');
console.log(a);
var div = document.querySelectorAll('.content>div');
console.log(div);
var len = a.length;
for (var i = 0; i < len; i++) {
    a[i].onmouseover = function() {
        for (var j = 0; j < 4; j++) {
            a[j].className = '';
            div[j].className = 'hide';
            // console.log(j);
        }
        var index = this.getAttribute('data-index');
        div[index].className = 'sex';
        a[index].className = 'active';
    }
}

//

$('.firstmusic>.topmusic>.icon-xiazai').mouseover(function() {
    $(this).css('color', '#009af3');
    // console.log('111');
}).mouseout(function() {
    $(this).css('color', 'gray');
})

$('.firstmusic>.topmusic>.icon-bofang').mouseover(function() {
    $(this).css('color', '#009af3');
    // console.log('111');
}).mouseout(function() {
    $(this).css('color', 'gray');
})



$('.righttwo>.youfour>a').mouseover(function() {
    $('.righttwo>div>.rto').css('display', 'inline-block');
    $('.righttwo>.youfour>.textone').css('color', '#009af3');
}).mouseout(function() {
    $('.righttwo>div>.rto').css('display', 'none');
    $('.righttwo>.youfour>.textone').css('color', '#444');
});
$('.righttwo>.youfour').mouseover(function() {
    $('.righttwo>div>.rto').css('display', 'inline-block');
}).mouseout(function() {
    $('.righttwo>div>.rto').css('display', 'none');
})


$('.righttwo>.youfive>.texttwo').mouseover(function(){
    $('.righttwo>.youfive>.texttwo').css('color','#009af3');
}).mouseout(function(){
    $('.righttwo>.youfive>.texttwo').css('color','black');
})



/*第二个选项卡*/

var b = document.querySelectorAll('.rightbox>.hotsinger>.hotsingerul>li>a');
console.log(b);
var c = document.querySelectorAll('.rightbox>.hotsinger>.details>div');
console.log(c);
var len = b.length;
for (var i = 0; i < len; i++) {
    b[i].onmouseover = function() {
        for (var j = 0; j < 4; j++) {
            c[j].className="hide";
            b[j].className="";
            console.log(j);
        }
        var index = this.getAttribute('data-index');
        c[index].className="detailsone";
        b[index].className="active";
    }
}





var d = document.querySelectorAll('.details>.detailsone>ul>li>a');
console.log(b);
var e = document.querySelectorAll('.details>.detailsone>.xxk>div');
console.log(e);
var len = d.length;
for (var i = 0; i < len; i++) {
    d[i].onmouseover = function() {
        for (var j = 0; j < len; j++) {
            e[j].className="remove";
            d[j].className="";
        }
        var index = this.getAttribute('data-index');
        e[index].className="xxkone";
        d[index].className="activeone";
    }
}





var f = document.querySelectorAll('.hide>.detailsone>ul>li>a');
console.log(b);
var g = document.querySelectorAll('.hide>.detailsone>.xxk>div');
console.log(e);
var len = d.length;
for (var i = 0; i < len; i++) {
    f[i].onmouseover = function() {
        for (var j = 0; j < 4; j++) {
            g[j].className="remove";
            f[j].className="";
        }
        var index = this.getAttribute('data-index');
        g[index].className="xxkone";
        f[index].className="activeone";
    }
}


