//function m() {
//    setInterval(n, 500);
//}

var moveX=-50;
var moveY=-50;

function n() {
    if(moveX <= 1180 || z == 39){
        var t = document.getElementById("d");
        var x = t.style.marginLeft;
        var y = parseInt(x, 10) || 0;
        t.style.marginLeft = y + 50 + "px";
        moveX = moveX + 50;
        
    }
}
function o() {
    if(moveX >= 0 || z == 37){
        var t = document.getElementById("d");
        var x = t.style.marginLeft;
        var y = parseInt(x, 10) || 0;
        t.style.marginLeft = y - 50 + "px";
        moveX = moveX - 50;
    }
}
function p() {
    if(moveY <= 350 || z == 40){
        var t = document.getElementById("d");
        var x = t.style.marginTop;
        var y = parseInt(x, 10) || 0;
        t.style.marginTop = y + 50 + "px";
        moveY = moveY + 50;
    }
}
function q() {
    if(moveY >= 0 || z == 38)
    {
        var t = document.getElementById("d");
        var x = t.style.marginTop;
        var y = parseInt(x, 10) || 0;
        t.style.marginTop = y - 50 + "px";
        moveY = moveY - 50;
    }
}

/*function check(event){
    
    if (z==37 || moveX >= 0){
        o();
    }
    else if (z==38 || moveY <= 450 ){
        p();
    }
    else if (z==39 || moveX <= 450){
        n();
    }
    else if (z==40 || moveY >= 0){
        q();
    }
}*/

document.addEventListener("keydown" , function(event){
    
    if(event.keyCode == 38)
    {
        q();
    }
    else if(event.keyCode == 39)
    {
        n();
    }
    else if(event.keyCode == 40)
    {
        p();
    }
    else if(event.keyCode == 37)
    {
        o();
    }
})