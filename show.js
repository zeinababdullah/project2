var circle =document.getElementById("circle");
var upBtn =document.getElementById("upBtn");
var downBtn =document.getElementById("downBtn");

var rotate_value = circle.style.transform;
var rotate_sum ;

upBtn.onclick = function(){
    rotate_sum = rotate_value + "rotate(-90deg)";
    circle.style.transform = rotate_sum;
    rotate_value = rotate_sum;
}
downBtn.onclick = function(){
    rotate_sum = rotate_value + "rotate(90deg)";
    circle.style.transform = rotate_sum;
    rotate_value = rotate_sum;
}
