/* [ ЗАПРЕТИТЬ SCROLL ] */
document.body.style.overflow = 'hidden';

/* [ ЗАПРЕТИТЬ ONCONTEXTMENU ] */
document.oncontextmenu = function(){ sx=0; sy=0; window.scroll(0,0); return false; }

/* [ ... ] */
let x = 200; 
let y = 200; 

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
  setTimeout(() => { a.remove(); }, 3000);
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
u.src = 'img/0.png';
u.setAttribute('id', 'user');
document.body.append(u);

/* [ CREATE OBJECT ] */
function setWall(x,y,z){
  let a = document.createElement('img');
  a.style.margin = y+'px 0 0 '+x+'px';
  a.style.border = '1px solid black';
  a.style.position = 'absolute';
  a.style.zIndex = 1;
  a.style.width = '50px';
  a.style.height = '50px';
  if(z){a.style.background = z;}
  a.setAttribute('class', 'wall');
  document.body.append(a);
} 
setWall(600,200,'gray');
setWall(800,400,'pink');

/* [ CREATE STAR ] */
function setStar(x,y){ 
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
//setStar(100,300);
//setStar(400,600);


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
document.body.onclick = function(e){
  let a = document.createElement('div');
  a.style.margin = (e.clientY-13)+'px 0 0 '
                    +(e.clientX+1)+'px';
  a.style.zIndex = 4;
  a.style.width = '60px';
  a.style.height = '12px';
  a.style.fontSize = '10px';
  a.style.textAlign = 'center';
  a.style.position = 'absolute';
  a.style.border = '1px solid black';
  a.style.background = 'whitesmoke';
  a.setAttribute('class', 'mousemarker');
  a.innerHTML = 'x: '+e.clientX+' y: '+e.clientY;
  document.body.append(a);

  let b = document.createElement('div');
  b.style.margin = e.clientY+'px 0 0 '+e.clientX+'px';
  b.style.zIndex = 4;
  b.style.width = '2px';
  b.style.height = '2px';
  b.style.background = 'red';
  b.style.position = 'absolute';
  b.setAttribute('class', 'pointmarker');
  document.body.append(b);

  setTimeout(() => { 
    a.remove(); b.remove(); 
  }, 3000);
}



/* [ ... ] */
// user.onclick = function(){ 
//   window.scroll(scrollX,scrollY);
//   x = 300; y = 400; 
//   usr.style.margin = x+'px 0 0 '+y+'px';
// }



/* [ ... ] */
let li = [];
let lj = [];

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
      setStar(parseInt(li[i].getAttribute('x')),
              parseInt(li[i].getAttribute('y'))); 
      li[i].remove();
      new Audio('img/star.mp3').play(); 
      score[0]++; setMenu('+'+score[0]+' star');
      break;
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
  }

  info.innerHTML = 'scroll: '+sx+'px 0 0 '+sy+'px';
  window.scroll(sx,sy);
u.style.margin = x+'px 0 0 '+y+'px';
}

/* [ MOVE ] */
let a = 0; let b = 0;
document.onkeydown = function(e){
  switch(e.code){
    case 'KeyW': 
      if(!a){ a = setInterval(() => { contact(); x-=2; sy-=2; },10); }
    break;
    case 'KeyS': 
      if(!a){ a = setInterval(() => { contact(); x+=2; sy+=2; },10); }
    break;
    case 'KeyA': 
      if(!b){ b = setInterval(() => { contact(); y-=2; sx-=2; },10); }
    break;
    case 'KeyD': 
      if(!b){ b = setInterval(() => { contact(); y+=2; sx+=2; },10); }
    break;
  }
}
document.onkeyup = function(e){ 
  switch(e.code){
    case 'KeyW': clearInterval(a); a = 0; break;
    case 'KeyS': clearInterval(a); a = 0; break;
    case 'KeyA': clearInterval(b); b = 0; break;
    case 'KeyD': clearInterval(b); b = 0; break;
  } 
}




