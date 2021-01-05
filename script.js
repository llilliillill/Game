/* [ ЗАПРЕТИТЬ SCROLL ] */
document.body.style.overflow = 'hidden';

/* [ ЗАПРЕТИТЬ ONCONTEXTMENU ] */
document.oncontextmenu = function(){ sx=0; sy=0; window.scroll(0,0); document.location = 'index.html'; return false; }

/* [ ... ] */
let x = 200; 
let y = 150; 

/* [ SCROLL ] */
let sx = 0; 
let sy = 0; 

/* [ ... ] */
let score = [0]; 

/* [ RANDOM ] */
function random(min,max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* [ MENU ] */
function setMenu(x){
  if(document.getElementById('menu')){
  document.getElementById('menu').remove();}
  let a = document.createElement('div');
  a.setAttribute('id', 'menu');
  a.style.width = '100%';
  a.style.zIndex = '2';
  a.style.position = 'fixed';
  a.style.height = '30px';
  a.style.textAlign = 'center';
  a.style.lineHeight = '1.8';
  a.style.background = 'whitesmoke';
  a.style.border = '1px solid green';
  a.innerHTML = '<b style="color:green;">'+x+'</b>';
  document.body.append(a);
  setTimeout(() => { a.remove(); }, 9000);
} 

/* [ INFO ] */
function setInfo(){
  let a = document.getElementById('info');
  a.style.width = '100%';
  a.style.height = '30px';
  a.style.position = 'fixed';
  a.style.zIndex = '2';
  a.style.textAlign = 'center';
  a.style.lineHeight = '1.8';
  a.style.background = 'whitesmoke';
  a.style.border = '1px solid black';
} setInfo();

/* [ CREATE USER ] */
let u = document.createElement('img');
u.style.margin = x+'px 0 0 '+y+'px'; 
u.style.border = '1px solid black';
u.style.position = 'absolute';
u.style.zIndex = 1;
u.style.width = '50px';
u.style.height = '50px';
u.src = 'img/usr/1/0.png';
u.setAttribute('id', 'user');
document.body.append(u);

/* [ CREATE VRAG ] */
function setVrag(x,y){
  let a = document.createElement('img');
  a.style.margin = x+'px 0 0 '+y+'px';
  a.style.border = '1px solid red';
  a.style.position = 'absolute';
  a.style.zIndex = 1;
  a.style.width = '50px';
  a.style.height = '50px';
  a.src = 'img/usr/1/0.png';
  a.setAttribute('class', 'vrag');
  document.body.append(a);
} 

let il = [450,300,450,600]; let m = 0; let g = 1;
let v = document.getElementsByClassName('vrag');
setVrag(il[0],il[1]); setVrag(il[2],il[3]);

function ii(){
  if(g){
    let a = setInterval(() => {
      il[0]-=2; il[1]+=2; v[0].style.margin = il[0]+'px 0 0 '+il[1]+'px';
      v[0].src = 'img/usr/5/'+m+'.png'; (m<4) ? m++ : m = 0;

      il[2]-=2; il[3]+=2; v[1].style.margin = il[2]+'px 0 0 '+il[3]+'px';
      v[1].src = 'img/usr/5/'+m+'.png'; (m<4) ? m++ : m = 0;
    }, 80);

    setTimeout(() => {
      clearInterval(a);
      v[0].src = 'img/usr/1/'+m+'.png';
      v[1].src = 'img/usr/1/'+m+'.png';
      g = 0; ii();
    }, 5000);
   
  } else {
    let a = setInterval(() => { 
      il[0]+=2; il[1]-=2; v[0].style.margin = il[0]+'px 0 0 '+il[1]+'px';
      v[0].src = 'img/usr/6/'+m+'.png'; (m<4) ? m++ : m = 0; 

      il[2]+=2; il[3]-=2; v[1].style.margin = il[2]+'px 0 0 '+il[3]+'px';
      v[1].src = 'img/usr/6/'+m+'.png'; (m<4) ? m++ : m = 0; 
    }, 80);

    setTimeout(() => {
      clearInterval(a);
      v[0].src = 'img/usr/1/'+m+'.png'; 
      v[1].src = 'img/usr/1/'+m+'.png'; 
      g = 1; ii();
    }, 5000);
   
  }
} ii();



/* [ ONMOUSEMOVE ] */
document.onmousemove = (e) => {
  document.getElementById('info').innerHTML = 'x: '+e.pageX+' y: '+e.pageY;
}



/* [ FIRE ] */
let p = [0,0,0];

let song = 0;
let audio = new Audio('music/'+random(0,2)+'.mp3');
audio.volume = '0.2';

document.body.onmousedown = (e) => {
  let o = setInterval(() => {
  
    let b = document.createElement('div');
    b.style.margin = (x+25)+'px 0 0 '+(y+25)+'px';
    b.style.width = '2px';
    b.style.height = '2px';
    b.style.zIndex = 0;
    b.style.position = 'absolute';
    b.style.background = 'red';
    document.body.append(b);

    p[0] = (x+25); 
    p[1] = (y+25);
    p[2] = (e.pageX>(y+50) && e.pageY>(x+50)) ? '1' :
           (e.pageX<y && e.pageY>(x+50))      ? '2' :
           (e.pageX>(y+50) && e.pageY<x)      ? '3' :
           (e.pageX<y && e.pageY<x)           ? '4' :
           (e.pageX>(y+50) && e.pageY>x)      ? '5' :
           (e.pageX<y && e.pageY>x)           ? '6' :
           (e.pageX>y && e.pageY>(x+50))      ? '7' :
           (e.pageX>y && e.pageY<(x+50))      ? '8' : '' ;

    //setMenu(p[2]);

    let fire = new Audio('img/fire.mp3');
    fire.volume = '0.2';
    fire.play();
    
    let z = setInterval(() => { 

      switch(p[2]){
        case '1':  p[0]++;  p[1]++;  break;
        case '2':  p[0]++;  p[1]--;  break;
        case '3':  p[0]--;  p[1]++;  break;
        case '4':  p[0]--;  p[1]--;  break;
        case '5': p[0]=p[0]; p[1]++; break;
        case '6': p[0]=p[0]; p[1]--; break;
        case '7': p[0]++; p[1]=p[1]; break;
        case '8': p[0]--; p[1]=p[1]; break;
      }

      b.style.margin = p[0]+'px 0 0 '+p[1]+'px';

      let w = document.elementFromPoint(b.getBoundingClientRect().x,b.getBoundingClientRect().y);

      /* [ ... ] */
      if(b.getBoundingClientRect().x<50){  b.remove();} 
      if(b.getBoundingClientRect().y<50){  b.remove();} 
      if(b.getBoundingClientRect().x>1998){b.remove();}
      if(b.getBoundingClientRect().y>1998){b.remove();}

      /* [ VRAG ] */
      if(w.classList == 'vrag'){ 
        w.style.display = 'none'; 
        setTimeout(() => { 
          w.style.display = 'block'; 
        }, 3000); 
        b.remove(); 
      }

      /* [ WALL ] */
      if(w.classList == 'wall' || w.classList == 'block'){ 
        b.remove(); 
      }

      /* [ WALL (WHITE) ] */
      if(w.classList == 'wall' && w.style.background == 'white'){
        w.style.border = '1px solid orange'; 
        w.style.background = 'orange';
        w.style.transition = '2s ease';
        setTimeout(() => { 
          w.style.background = 'red';
          w.style.border = '1px solid red'; 
          w.style.transition = '3s ease';
        }, 3000);
        setTimeout(() => { 
          w.style.background = 'white';
          w.style.border = '1px solid gray'; 
          w.style.transition = '4s ease';
        }, 7000);
      }

      /* [ WALL (GREENYELLOW) ] */
      if(w.classList == 'wall' && w.style.border == '1px solid orange'){
        if(!song){ 
          audio.play();
          song = 1; 
        } else { 
          audio.pause(); 
          audio = new Audio('music/'+random(0,3)+'.mp3');
          audio.volume = '0.2';
          song = 0; 
        }
      }

    }, 10);

    setTimeout(() => {
      clearInterval(z); b.remove();
    }, 5000);

  }, 100); 

  document.body.onmouseup = () => { 
    clearInterval(o); 
  }
}


/* [ CREATE WALL ] */
function createWall(x,y,z){
  let a = document.createElement('img');
  a.style.margin = y+'px 0 0 '+x+'px';
  a.style.border = '1px solid black';
  a.style.position = 'absolute';
  a.style.zIndex = 1;
  a.style.width = '50px';
  a.style.height = '50px';
  a.style.background = (z) ? z : 'gray';
  a.setAttribute('class', 'wall');
  document.body.append(a);
} 
createWall(600,200);
createWall(800,400,'pink');
createWall(700,250,'white');



/* [ CREATE SONG ] */
function createSong(x,y){
  let a = document.createElement('img');
  a.style.margin = y+'px 0 0 '+x+'px';
  a.style.border = '1px solid orange';
  a.style.position = 'absolute';
  a.style.zIndex = 1;
  a.style.width = '50px';
  a.style.height = '50px';
  a.src = 'music/music.png';
  a.setAttribute('class', 'wall');
  document.body.append(a);
} createSong(800,330);



/* [ CREATE STAR ] */
function createStar(x,y){ 
  setTimeout(() => {
    let a = document.createElement('img');
    a.style.border = '2px solid orange';
    a.style.borderRadius = '50%';
    a.style.margin = random(x,y)+'px 0 0 '
                      +random(x,y)+'px';
    a.style.zIndex = 1;
    a.style.position = 'absolute';
    a.style.width = '50px';
    a.style.height = '50px';
    a.src = 'img/star.png';
    a.setAttribute('x', x);
    a.setAttribute('y', y);
    a.setAttribute('class', 'star');
    document.body.append(a);
  }, 1000); 
} 
//createStar(100,300);
//createStar(400,600);

/* [ CREATE BLOCK ] */
let block = [[300,200,'brown'],[400,200,'black']];
function createBlock(z){
  for(let i=0; i<z.length; i++){
    let a = document.createElement('img');
    a.style.margin = z[i][1]+'px 0 0 '+z[i][0]+'px';
    a.style.border = '1px solid black';
    a.style.position = 'absolute';
    a.style.zIndex = 1;
    a.style.width = '50px';
    a.style.height = '50px';
    a.style.background = (z[i][2]) ? z[i][2] : 'white';
    a.setAttribute('class', 'block');
    a.setAttribute('index', i);
    document.body.append(a);
  }
} createBlock(block);

//function setBlock(x,y){};

/* [ MARKER ] */
function marker(x,y,z){
  let a = document.createElement('div');
  a.style.margin = y+'px 0 0 '+x+'px';
  a.style.width = '2px';
  a.style.height = '2px';
  a.style.background = 'red';
  if(z){a.style.background = z;}
  a.style.position = 'absolute';
  a.style.zIndex = 3;
  document.body.append(a);
} //marker(200,100,'green');

/* [ MOUSEMARCER ] */
// document.body.onclick = function(e){
//   let a = document.createElement('div');
//   a.style.margin = (sy+e.clientY-13)+'px 0 0 '
//                         +(sx+e.clientX+1)+'px';
//   a.style.zIndex = 4;
//   a.style.width = '60px';
//   a.style.height = '12px';
//   a.style.fontSize = '10px';
//   a.style.textAlign = 'center';
//   a.style.position = 'absolute';
//   a.style.border = '1px solid black';
//   a.style.background = 'whitesmoke';
//   a.innerHTML = 'x: '+e.clientX+' y: '+e.clientY;
//   document.body.append(a);

//   let b = document.createElement('div');
//   b.style.margin = sy+e.clientY+'px 0 0 '+sx+e.clientX+'px';
//   b.style.zIndex = 4;
//   b.style.width = '2px';
//   b.style.height = '2px';
//   b.style.background = 'red';
//   b.style.position = 'absolute';
//   document.body.append(b);

//   setTimeout(() => {
//     a.remove(); b.remove();
//   }, 3000);
// }

/* [ ... ] */
// user.onclick = function(){
//   window.scroll(scrollX,scrollY);
//   x = 300; y = 400;
//   usr.style.margin = x+'px 0 0 '+y+'px';
// }

/* [ ... ] */
let li = []; let lj = [];
function contact(){
  li[0] = document.elementFromPoint(u.getBoundingClientRect().x,u.getBoundingClientRect().y-2);
  li[1] = document.elementFromPoint(u.getBoundingClientRect().x-2,u.getBoundingClientRect().y);
  li[2] = document.elementFromPoint(u.getBoundingClientRect().x+50,u.getBoundingClientRect().y-2);
  li[3] = document.elementFromPoint(u.getBoundingClientRect().x+52,u.getBoundingClientRect().y);
  li[4] = document.elementFromPoint(u.getBoundingClientRect().x+52,u.getBoundingClientRect().y+50);
  li[5] = document.elementFromPoint(u.getBoundingClientRect().x+50,u.getBoundingClientRect().y+52);
  li[6] = document.elementFromPoint(u.getBoundingClientRect().x,u.getBoundingClientRect().y+52);
  li[7] = document.elementFromPoint(u.getBoundingClientRect().x-2,u.getBoundingClientRect().y+50);

  /* [ ... ] */
  if(x<50){x+=2;} if(x>1998){x-=2;}
  if(y<50){y+=2;} if(y>1998){y-=2;}

  for(let i=0; i<li.length; i++){

    /* [ STAR ] */
    if(li[i].classList == 'star'){
      setStar(parseInt(li[i].getAttribute('x')),parseInt(li[i].getAttribute('y')));
      li[i].remove(); new Audio('img/star.mp3').play();
      score[0]++; setMenu('+'+score[0]+' star'); break;
    }

    /* [ WALL ] */
    if(li[i].classList == 'wall'){
      lj[0] = document.elementFromPoint(li[i].getBoundingClientRect().x,li[i].getBoundingClientRect().y-2);
      lj[1] = document.elementFromPoint(li[i].getBoundingClientRect().x-2,li[i].getBoundingClientRect().y);
      lj[2] = document.elementFromPoint(li[i].getBoundingClientRect().x+50,li[i].getBoundingClientRect().y-2);
      lj[3] = document.elementFromPoint(li[i].getBoundingClientRect().x+52,li[i].getBoundingClientRect().y);
      lj[4] = document.elementFromPoint(li[i].getBoundingClientRect().x+52,li[i].getBoundingClientRect().y+50);
      lj[5] = document.elementFromPoint(li[i].getBoundingClientRect().x+50,li[i].getBoundingClientRect().y+52);
      lj[6] = document.elementFromPoint(li[i].getBoundingClientRect().x,li[i].getBoundingClientRect().y+52);
      lj[7] = document.elementFromPoint(li[i].getBoundingClientRect().x-2,li[i].getBoundingClientRect().y+50);

      if(lj[0] == '[object HTMLImageElement]'){ x-=2; sy-=2; } else { lj[0] = ''; }
      if(lj[1] == '[object HTMLImageElement]'){ y-=2; sx-=2; } else { lj[1] = ''; }
      if(lj[2] == '[object HTMLImageElement]'){ x-=2; sy-=2; } else { lj[2] = ''; }
      if(lj[3] == '[object HTMLImageElement]'){ y+=2; sx+=2; } else { lj[3] = ''; }
      if(lj[4] == '[object HTMLImageElement]'){ y+=2; sx+=2; } else { lj[4] = ''; }
      if(lj[5] == '[object HTMLImageElement]'){ x+=2; sy+=2; } else { lj[5] = ''; }
      if(lj[6] == '[object HTMLImageElement]'){ x+=2; sy+=2; } else { lj[6] = ''; }
      if(lj[7] == '[object HTMLImageElement]'){ y-=2; sx-=2; } else { lj[7] = ''; }
      break;
    }

    /* [ BLOCK ] */
    if(li[i].classList == 'block'){
      lj[0] = document.elementFromPoint(li[i].getBoundingClientRect().x,li[i].getBoundingClientRect().y-2);
      lj[1] = document.elementFromPoint(li[i].getBoundingClientRect().x-2,li[i].getBoundingClientRect().y);
      lj[2] = document.elementFromPoint(li[i].getBoundingClientRect().x+50,li[i].getBoundingClientRect().y-2);
      lj[3] = document.elementFromPoint(li[i].getBoundingClientRect().x+52,li[i].getBoundingClientRect().y);
      lj[4] = document.elementFromPoint(li[i].getBoundingClientRect().x+52,li[i].getBoundingClientRect().y+50);
      lj[5] = document.elementFromPoint(li[i].getBoundingClientRect().x+50,li[i].getBoundingClientRect().y+52);
      lj[6] = document.elementFromPoint(li[i].getBoundingClientRect().x,li[i].getBoundingClientRect().y+52);
      lj[7] = document.elementFromPoint(li[i].getBoundingClientRect().x-2,li[i].getBoundingClientRect().y+50);
      let j = li[i].getAttribute('index');

      /* [ LEFT ] */
      if(lj[1] == '[object HTMLImageElement]' || lj[7] == '[object HTMLImageElement]' 
      || (lj[1] == '[object HTMLImageElement]' && lj[7] == '[object HTMLImageElement]')){
        block[j][1] = block[j][1];  block[j][0] +=2; 
        li[i].style.margin = block[j][1]+'px 0 0 '+block[j][0]+'px';
      }

      /* [ RIGHT ] */
      if(lj[3] == '[object HTMLImageElement]' || lj[4] == '[object HTMLImageElement]' 
      || (lj[3] == '[object HTMLImageElement]' && lj[4] == '[object HTMLImageElement]')){
        block[j][1] = block[j][1];  block[j][0] -=2; 
        li[i].style.margin = block[j][1]+'px 0 0 '+block[j][0]+'px';
      }

      /* [ TOP ] */
      if(lj[0] == '[object HTMLImageElement]' || lj[2] == '[object HTMLImageElement]' 
      || (lj[0] == '[object HTMLImageElement]' && lj[2] == '[object HTMLImageElement]')){
        block[j][1] +=2; block[j][0] = block[j][0];
        li[i].style.margin = block[j][1]+'px 0 0 '+block[j][0]+'px';
      }

      /* [ BOTTOM ] */
      if(lj[6] == '[object HTMLImageElement]' || lj[5] == '[object HTMLImageElement]' 
      || (lj[6] == '[object HTMLImageElement]' && lj[5] == '[object HTMLImageElement]')){
        block[j][1] -=2; block[j][0] = block[j][0];
        li[i].style.margin = block[j][1]+'px 0 0 '+block[j][0]+'px';
      }
    
      break;
    }
  }
  window.scroll(sx,sy); u.style.margin = x+'px 0 0 '+y+'px';
}

/* [ MOVE ] */
let a = 0; let b = 0;
let c = 0; let d = 0;
document.onkeydown = function(e){
  switch(e.code){
    case 'KeyW': if(!a){ a = setInterval(() => { contact(); x-=2; sy-=2; }, 10); anim(e); } break; //sy-=2;
    case 'KeyS': if(!a){ a = setInterval(() => { contact(); x+=2; sy+=2; }, 10); anim(e); } break; //sy+=2;
    case 'KeyA': if(!b){ b = setInterval(() => { contact(); y-=2; sx-=2; }, 10); anim(e); } break; //sx-=2;
    case 'KeyD': if(!b){ b = setInterval(() => { contact(); y+=2; sx+=2; }, 10); anim(e); } break; //sx+=2;
  }
}
document.onkeyup = function(e){
  c = 0; d = 0; clearInterval(r);
  switch(e.code){
    case 'KeyW': clearInterval(a); a = 0; break;
    case 'KeyS': clearInterval(a); a = 0; break;
    case 'KeyA': clearInterval(b); b = 0; break;
    case 'KeyD': clearInterval(b); b = 0; break;
  }
}

/* [ ANIMATION ] */
let n = 0; let r = 0;
function anim(e){
  if(c == '' || d == ''){ if(c != '' && e.code != c){
    if(c != d){ if(e.code == 'KeyW' || 'KeyS' || 'KeyA' || 'KeyD'){ d = e.code; } }
  } else {
    if(e.code == 'KeyW' || 'KeyS' || 'KeyA' || 'KeyD'){ c = e.code; }
  }}

  if(c == 'KeyW'){ clearInterval(r); r = setInterval(() => { u.src = 'img/usr/0/'+n+'.png'; (n<4) ? n++ : n = 0; }, 100); }
  if(c == 'KeyS'){ clearInterval(r); r = setInterval(() => { u.src = 'img/usr/1/'+n+'.png'; (n<4) ? n++ : n = 0; }, 100); }
  if(c == 'KeyA'){ clearInterval(r); r = setInterval(() => { u.src = 'img/usr/2/'+n+'.png'; (n<4) ? n++ : n = 0; }, 100); }
  if(c == 'KeyD'){ clearInterval(r); r = setInterval(() => { u.src = 'img/usr/3/'+n+'.png'; (n<4) ? n++ : n = 0; }, 100); }

  if(c == 'KeyW' && d == 'KeyD' || d == 'KeyW' && c == 'KeyD'){ clearInterval(r); r = setInterval(() => { u.src = 'img/usr/5/'+n+'.png'; (n<4) ? n++ : n = 0; }, 100); }
  if(c == 'KeyW' && d == 'KeyA' || d == 'KeyW' && c == 'KeyA'){ clearInterval(r); r = setInterval(() => { u.src = 'img/usr/4/'+n+'.png'; (n<4) ? n++ : n = 0; }, 100); }
  if(c == 'KeyS' && d == 'KeyD' || d == 'KeyS' && c == 'KeyD'){ clearInterval(r); r = setInterval(() => { u.src = 'img/usr/7/'+n+'.png'; (n<4) ? n++ : n = 0; }, 100); }
  if(c == 'KeyS' && d == 'KeyA' || d == 'KeyS' && c == 'KeyA'){ clearInterval(r); r = setInterval(() => { u.src = 'img/usr/6/'+n+'.png'; (n<4) ? n++ : n = 0; }, 100); }
}
document.onclick = (e) => { u.src =
  (e.pageX>(y+50) && e.pageY>(x+50)) ? 'img/usr/7/'+n+'.png' :
  (e.pageX<y && e.pageY>(x+50))      ? 'img/usr/6/'+n+'.png' :
  (e.pageX>(y+50) && e.pageY<x)      ? 'img/usr/5/'+n+'.png' :
  (e.pageX<y && e.pageY<x)           ? 'img/usr/4/'+n+'.png' :
  (e.pageX>(y+50) && e.pageY>x)      ? 'img/usr/3/'+n+'.png' :
  (e.pageX<y && e.pageY>x)           ? 'img/usr/2/'+n+'.png' :
  (e.pageX>y && e.pageY>(x+50))      ? 'img/usr/1/'+n+'.png' :
  (e.pageX>y && e.pageY<(x+50))      ? 'img/usr/0/'+n+'.png' :
                                       'img/usr/1/'+n+'.png' ;
  //document.getElementById('info').innerHTML = 'x: '+e.pageX+' y: '+e.pageY;
}