/* [ ЗАПРЕТИТЬ SCROLL ] */
//window.scroll(0,0);
document.body.style.overflow = 'hidden';

/* [ ЗАПРЕТИТЬ ONCONTEXTMENU ] */
document.oncontextmenu = function(){ sx=0; sy=0; window.scroll(0,0); return false; }

/* [ ... ] */
let x = 200; 
let y = 400; 

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
  let menu = document.createElement('div');
  menu.setAttribute('id', 'menu');
  menu.style.width = '100%';
  menu.style.zIndex = '2';
  menu.style.position = 'fixed';
  menu.style.height = '30px';
  menu.style.textAlign = 'center';
  menu.style.lineHeight = '1.8';
  menu.style.background = 'whitesmoke';
  menu.style.border = '1px solid green';
  menu.innerHTML = '<b style="color:green;">'+x+'</b>';
  document.body.append(menu);
  setTimeout(() => { menu.remove(); }, 3000);
} 

/* [ INFO ] */
function setInfo(){
  let info = document.getElementById('info');
  info.style.width = '100%';
  info.style.height = '30px';
  info.style.position = 'fixed';
  info.style.zIndex = '2';
  info.style.textAlign = 'center';
  info.style.lineHeight = '1.8';
  info.style.background = 'whitesmoke';
  info.style.border = '1px solid black';
} setInfo();

/* [ CREATE USER ] */
let usr = document.createElement('img');
usr.style.margin = x+'px 0 0 '+y+'px'; 
usr.style.border = '1px solid black';
usr.style.position = 'absolute';
usr.style.zIndex = 1;
usr.style.width = '50px';
usr.style.height = '50px';
usr.src = 'img/0.png';
usr.setAttribute('id', 'user');
document.body.append(usr);

/* [ CREATE OBJECT ] */
function setWall(x,y,z){
  let obj = document.createElement('img');
  obj.style.margin = y+'px 0 0 '+x+'px';
  obj.style.border = '1px solid black';
  obj.style.position = 'absolute';
  obj.style.zIndex = 1;
  obj.style.width = '50px';
  obj.style.height = '50px';
  if(z){obj.style.background = z;}
  obj.setAttribute('class', 'wall');
  document.body.append(obj);
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
setStar(100,300);
setStar(400,600);

/* [ MARKER ] */
function marker(x,y,z){
  let div = document.createElement('div');
  div.style.margin = y+'px 0 0 '+x+'px';
  div.style.width = '2px';
  div.style.height = '2px';
  div.style.background = 'red';
  if(z){div.style.background = z;}
  div.style.position = 'absolute';
  div.style.zIndex = 3;
  document.body.append(div);
}

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
let elem = [];
let el = [];

function contact(){
  elem[0] = document.elementFromPoint(usr.getBoundingClientRect().x,usr.getBoundingClientRect().y-2);
  elem[1] = document.elementFromPoint(usr.getBoundingClientRect().x-2,usr.getBoundingClientRect().y);
  elem[2] = document.elementFromPoint(usr.getBoundingClientRect().x+50,usr.getBoundingClientRect().y-2);
  elem[3] = document.elementFromPoint(usr.getBoundingClientRect().x+52,usr.getBoundingClientRect().y);
  elem[4] = document.elementFromPoint(usr.getBoundingClientRect().x+52,usr.getBoundingClientRect().y+50);
  elem[5] = document.elementFromPoint(usr.getBoundingClientRect().x+50,usr.getBoundingClientRect().y+52);
  elem[6] = document.elementFromPoint(usr.getBoundingClientRect().x,usr.getBoundingClientRect().y+52);
  elem[7] = document.elementFromPoint(usr.getBoundingClientRect().x-2,usr.getBoundingClientRect().y+50);

  /* [ ... ] */
  if(x<50){x+=2;} if(x>1998){x-=2;}
  if(y<50){y+=2;} if(y>1998){y-=2;}

  for(let i=0; i<elem.length; i++){
    /* [ STAR ] */
    if(elem[i].classList == 'star'){
      setStar(parseInt(elem[i].getAttribute('x')),
              parseInt(elem[i].getAttribute('y'))); 
      elem[i].remove();
      new Audio('img/star.mp3').play(); 
      score[0]++; setMenu('+'+score[0]+' star');
      break;
    }

    /* [ WALL ] */
    if(elem[i].classList == 'wall'){
      el[0] = document.elementFromPoint(elem[i].getBoundingClientRect().x,elem[i].getBoundingClientRect().y-2);
      el[1] = document.elementFromPoint(elem[i].getBoundingClientRect().x-2,elem[i].getBoundingClientRect().y);
      el[2] = document.elementFromPoint(elem[i].getBoundingClientRect().x+50,elem[i].getBoundingClientRect().y-2);
      el[3] = document.elementFromPoint(elem[i].getBoundingClientRect().x+52,elem[i].getBoundingClientRect().y);
      el[4] = document.elementFromPoint(elem[i].getBoundingClientRect().x+52,elem[i].getBoundingClientRect().y+50);
      el[5] = document.elementFromPoint(elem[i].getBoundingClientRect().x+50,elem[i].getBoundingClientRect().y+52);
      el[6] = document.elementFromPoint(elem[i].getBoundingClientRect().x,elem[i].getBoundingClientRect().y+52);
      el[7] = document.elementFromPoint(elem[i].getBoundingClientRect().x-2,elem[i].getBoundingClientRect().y+50);

      if(el[0] == '[object HTMLImageElement]'){ x-=2; } else { el[0] = ''; }
      if(el[1] == '[object HTMLImageElement]'){ y-=2; } else { el[1] = ''; }
      if(el[2] == '[object HTMLImageElement]'){ x-=2; } else { el[2] = ''; }
      if(el[3] == '[object HTMLImageElement]'){ y+=2; } else { el[3] = ''; }
      if(el[4] == '[object HTMLImageElement]'){ y+=2; } else { el[4] = ''; }
      if(el[5] == '[object HTMLImageElement]'){ x+=2; } else { el[5] = ''; }
      if(el[6] == '[object HTMLImageElement]'){ x+=2; } else { el[6] = ''; }
      if(el[7] == '[object HTMLImageElement]'){ y-=2; } else { el[7] = ''; }
      break;
    } 
  }

  info.innerHTML = sx+'px 0 0 '+sy+'px';
  window.scroll(sx,sy);
  usr.style.margin = x+'px 0 0 '+y+'px';
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




