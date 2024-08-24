let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let Doc = document.querySelector('.Doc');
 window.onscroll = function(){
     let value = scrollY;
    stars.style.left = value + 'px';
     moon.style.top = value*5.5 + 'px';
    mountains3.style.top = value*2 + 'px';
    mountains4.style.top = value*1.5 + 'px';
    river.style.top = value + 'px';
    boat.style.left = value * 3 + 'px';
    boat.style.top = value + 'px';
    Doc.style.fontSize = value + 'px';
    if(scrollY >= 84){
        Doc.style.fontSize = 84 + 'px';
        Doc.style.position = 'fixed';
        if(scrollY >= 598){
            Doc.style.display = 'none';
        }
        else{
            Doc.style.display = 'block';
        }
        if(scrollY >= 91){
            document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)';
        }else{
            document.querySelector('.main').style.background = 'linear-gradient(#7e0056,#3f0038)';
        }
   }
}










