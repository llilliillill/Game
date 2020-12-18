/* [ ЗАПРЕТИТЬ SCROLL ] */
window.scrollTo(0,0);
document.body.style.overflow = 'hidden';

/* [ ... ] */
let x = 300;
let y = 300;

/* [ ... ] */
let score = [0];
//score[0] - stars

/* [ RANDOM ] */
function random(min,max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* [ INFO ] */
function setInfo(){
  let info = document.getElementById('info');
  info.style.width = '100%';
  info.style.height = '30px';
  info.style.position = 'fixed';
  info.style.textAlign = 'center';
  info.style.lineHeight = '1.8';
  info.style.border = '1px solid red';
} setInfo();

/* [ CREATE USER ] */
let usr = document.createElement('img');
usr.style.margin = x+'px 0 0 '+y+'px'; // [ ! ] \\
usr.style.border = '1px solid black';
usr.style.position = 'absolute';
usr.style.zIndex = 1;
usr.style.width = '50px';
usr.style.height = '50px';
usr.style.userSelect = 'none';
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
  let star = document.createElement('img');
  star.style.border = '1px solid black';
  star.style.margin = random(x,y)+'px 0 0 '
                     +random(x,y)+'px';
  star.style.zIndex = 1;
  star.style.position = 'absolute';
  star.style.width = '50px';
  star.style.height = '50px';
  star.src = 'img/star.png';
  star.setAttribute('x', x);
  star.setAttribute('y', y);
  star.setAttribute('class', 'star');
  document.body.append(star);
} 

setStar(0,200);
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

/* [ ... ] */
// user.onclick = function(){ // }

/* [ ... ] */
let elem = [];
let el = [];

function contact(){

  // let a1 = usr.getBoundingClientRect().x-2;
  // let a2 = usr.getBoundingClientRect().y-2;
  // let a3 = usr.getBoundingClientRect().x-2;
  // let a4 = usr.getBoundingClientRect().y+52;
  // let a5 = usr.getBoundingClientRect().x+52;
  // let a6 = usr.getBoundingClientRect().y-2;
  // let a7 = usr.getBoundingClientRect().x+52;
  // let a8 = usr.getBoundingClientRect().y+52;
  // elem[0] = document.elementFromPoint(a1,a2);
  // elem[1] = document.elementFromPoint(a3,a4);
  // elem[2] = document.elementFromPoint(a5,a6);
  // elem[3] = document.elementFromPoint(a7,a8);

  elem[0] = document.elementFromPoint(usr.getBoundingClientRect().x-2,usr.getBoundingClientRect().y-2);
  elem[1] = document.elementFromPoint(usr.getBoundingClientRect().x-2,usr.getBoundingClientRect().y+52);
  elem[2] = document.elementFromPoint(usr.getBoundingClientRect().x+52,usr.getBoundingClientRect().y-2);
  elem[3] = document.elementFromPoint(usr.getBoundingClientRect().x+52,usr.getBoundingClientRect().y+52);

  
  for(let i=0; i<elem.length; i++){
    /* [ STAR ] */
    if(elem[i].classList == 'star'){
      setStar(parseInt(elem[i].getAttribute('x')), 
              parseInt(elem[i].getAttribute('y'))); 
              elem[i].remove();

      //new Audio('img/star.mp3').play(); 
      score[0]++;
      info.innerHTML = '<b style="color:green;">+'+score[0]+' star</b>';
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

    } 
  }

  info.innerHTML = x+'px 0 0 '+y+'px';
  usr.style.margin = x+'px 0 0 '+y+'px';
}

/* [ MOVE ] */
let m = [0,0,0,0,1,1];
document.onkeydown = function(e){
  switch(e.code){
    case 'KeyW': 
      if(m[4]){ m[4] = 0; 
        m[0] = setInterval(() => { 
          contact(); x -= 2;
        }, 10); 
      } 
    break;
    case 'KeyS': 
      if(m[4]){ m[4] = 0; 
        m[1] = setInterval(() => {
          contact(); x += 2;
        }, 10);
      } 
    break;
  }
  switch(e.code){
    case 'KeyA': 
      if(m[5]){ m[5] = 0; 
        m[2] = setInterval(() => { 
          contact(); y -= 2;
        }, 10); 
      }
    break;
    case 'KeyD': 
      if(m[5]){ m[5] = 0; 
        m[3] = setInterval(() => { 
          contact(); y += 2;
        }, 10);
      }
    break;
  }
}
document.onkeyup = function(e){
  switch(e.code){
    case 'KeyW': clearInterval(m[0]); m[4] = 1; break;
    case 'KeyS': clearInterval(m[1]); m[4] = 1; break;
    case 'KeyA': clearInterval(m[2]); m[5] = 1; break;
    case 'KeyD': clearInterval(m[3]); m[5] = 1; break;
  } 
}



