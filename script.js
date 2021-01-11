/* [ GAME SATTINGS ] */
document.body.style.overflow = 'hidden';
document.oncontextmenu = function(){ 
  sx=0; sy=0; window.scroll(0,0); 
  document.location = 'index.html'; 
  return false; 
}

/* [ GAME FUNCTIONS ] */
function random(min,max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function audio(x,y){
  let a = new Audio('music/'+x+'.mp3');
  a.volume = '0.2';
  a.play();
  return (y) ? a : false;
} 

function setMenu(x,z){
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
  a.style.border = (z) ? '1px solid '+z : '1px solid green';
  a.innerHTML = (z) ? '<b style="color:'+z+';">'+
  x+'</b>' : '<b style="color:green;">'+x+'</b>';
  document.body.append(a);
  setTimeout(() => { a.remove(); }, 3000);
}

function setInfo(){
  let a = document.getElementById('info');
  a.style.width = '100%';
  a.style.height = '30px';
  a.style.position = 'fixed';
  a.style.zIndex = 5;
  a.style.textAlign = 'center';
  a.style.lineHeight = '1.8';
  a.style.background = 'whitesmoke';
  a.style.border = '1px solid black';
} setInfo();

function marker(x,y,z){
  let a = document.createElement('div');
  a.style.margin = y+'px 0 0 '+x+'px';
  a.style.width = '2px';
  a.style.height = '2px';
  a.style.background = (z) ? z : 'red';
  a.style.position = 'absolute';
  a.style.zIndex = 3;
  document.body.append(a);
} 

/* [ OBJECT GAME ] */
let score = [0,0]; 
// Scroll
let sx = 0, sy = 0; 







/* [ FIRE ] */

// Точка начала огня
let p = [0,0];
//Количкство патронов
let w = [30, 0, 0, 0, 0, 0, 0];

document.body.onclick = (e) => {
  //Если есть патроны
  if(w[0]>0){

    /* [ ... ] */
    audio('pistol/0'); w[0]--;
    //document.getElementById('info').innerHTML = w[0];

    // Анимация выстрела  
    u[1].src = 'img/usr/8/0.png';

    p[0] = x+25;
    p[1] = y+25;

    let x1 = 0, y1 = 0,
    k = (e.pageY-p[1])/(e.pageX-p[0]);

    let b = document.createElement('div');
    b.style.margin = p[1]+'px 0 0 '+p[0]+'px';
    b.style.width = '2px';
    b.style.height = '2px';
    b.style.zIndex = -1;
    b.style.position = 'absolute';
    b.style.background = 'red';
    document.body.append(b);

    let z = setInterval(() => {
      (e.pageX>p[0] ? x1+=10 : x1-=10 ); y1=(k*x1);
      if(y1>-500 && y1<500){ 
        
        b.style.margin = (y1+p[1])+'px 0 0 '+(x1+p[0])+'px';
        
        let w = document.elementFromPoint(b.getBoundingClientRect().x,b.getBoundingClientRect().y);

        /* [ ... ] */
        if(b.getBoundingClientRect().x<50){   b.remove(); } 
        if(b.getBoundingClientRect().y<50){   b.remove(); } 
        if(b.getBoundingClientRect().x>1998){ b.remove(); }
        if(b.getBoundingClientRect().y>1998){ b.remove(); }

        /* [ VRAG ] */
        if(w.classList == 'vrag'){ 
          let index = w.getAttribute('index');
          document.getElementsByClassName('zdorove')[index].style.display = 'block'; 
          v[5][index]-=5;
          document.getElementsByClassName('shkala')[index].style.width = v[5][index]+'px';

          if(v[5][index]>37.5){  
            document.getElementsByClassName('shkala')[index].style.background = 'greenyellow';
          } else if(v[5][index]>25){
            document.getElementsByClassName('shkala')[index].style.background = 'yellow';
          } else if(v[5][index]>12.5){
            document.getElementsByClassName('shkala')[index].style.background = 'orange';
          } else if(v[5][index]>0){
            document.getElementsByClassName('shkala')[index].style.background = 'red';
          } else if(v[5][index] == 0){
            w.style.display = 'none';
          }

          b.remove(); 
        }

        /* [ WALL ] */
        if(w.classList == 'wall' || w.classList == 'block'){ 
          b.remove(); 
        }

        /* [ WALL BACKGROUND WHITE ] */
        let color = ['orange','red','green','blue','pink',
        'brown','black','greenyellow','yellow','gray'];
        if(w.classList == 'wall' && w.style.background == 'white'){ 
          w.style.background = color[random(0,9)];
          w.style.transition = '2s ease';
          setTimeout(() => { 
            w.style.background = color[random(0,9)];
            w.style.transition = '3s ease';
          }, 3000);
          setTimeout(() => { 
            w.style.background = 'white';
            w.style.transition = '4s ease';
          }, 7000);
        }

        /* [ START MUSIC ] */
        if(w.classList == 'wall' && w.style.border == '1px solid orange'){
          audio(random(0,4));  
        }

      }
    },10);
    setTimeout(() => { clearInterval(z); b.remove(); },3000);

  /* [ ЕСЛИ НЕТ ПАТРОНОВ ] */
  } else { audio('pistol/1'); }

}


/* [ CREATE WALL ] */
function createWall(x,y,z){
  let a = document.createElement('div');
  a.style.margin = y+'px 0 0 '+x+'px';
  a.style.border = '1px solid black';
  a.style.position = 'absolute';
  a.style.zIndex = 2;
  a.style.width = '50px';
  a.style.height = '50px';
  a.style.background = (z) ? z : 'white';
  a.setAttribute('class', 'wall');
  document.body.append(a);
} 
//createWall(300,150,'gray');
createWall(600,200,'gray');
createWall(800,400,'pink');

/* [ WHITE ] */
createWall(595,350);
createWall(650,550);
createWall(705,255);



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
} createSong(50,50);



/* [ ACCOUTREMENT ] */
function accoutrement(x,y,z){ 
  setTimeout(() => {
    let a = document.createElement('div');
    a.style.margin = random(y,(y+200))+'px 0 0 '
                    +random(x,(x+200))+'px';
    a.style.zIndex = 1;
    a.style.position = 'absolute';
    a.style.width = '50px';
    a.style.height = '50px';
    a.style.background = 'url(img/'+z+'.png)';
    a.setAttribute('x', x);
    a.setAttribute('y', y);
    a.setAttribute('class', z);
    document.body.append(a);
  }, 1000); 
} 
accoutrement(200,250,'ammo');
accoutrement(200,250,'medic');
accoutrement(1050,150,'medic');
accoutrement(1050,450,'ammo');


/* [ CREATE BLOCK ] */
let block = [[340,220,'brown'],
             [400,270,'black'],
             [900,260,'greenyellow'],
             [1000,260,'yellow']];
function createBlock(z){
  for(let i=0; i<z.length; i++){
    let a = document.createElement('div');
    a.style.margin = z[i][1]+'px 0 0 '+z[i][0]+'px';
    a.style.border = '1px solid black';
    a.style.position = 'absolute';
    a.style.zIndex = 2;
    a.style.width = '50px';
    a.style.height = '50px';
    a.style.background = (z[i][2]) ? z[i][2] : 'white';
    a.setAttribute('class', 'block');
    a.setAttribute('index', i);
    document.body.append(a);
  }
} createBlock(block);





/* [ CREATE VRAG ] */
let v = {
  0: [[300,280, 'orange'],[500,450, 'blue'],
      [450,150, 'green' ],[150,500, '',   ]],
  1:  [0,1],
  2: document.getElementsByClassName('vrag'),
  3: [], 
  4: [], // delete
  5: []
}; 

function createVragi(){
  for(let i=0; i<v[0].length; i++){
    let a = document.createElement('div');
    a.style.margin = v[0][i][0]+'px 0 0 '+v[0][i][1]+'px';
    //a.style.border = (v[0][i][2]) ? '1px solid '
    //+v[0][i][2] : '1px solid red';
    a.style.position = 'absolute';
    a.style.zIndex = 0;
    a.style.width = '50px';
    a.style.height = '50px';
    a.style.background = 'url(img/usr/1/0.png)';
    a.setAttribute('index', i);
    a.setAttribute('class', 'vrag');
    document.body.append(a);

    let b = document.createElement('div');
    b.style.width = '50px';
    b.style.height = '5px';
    b.style.border = '1px solid green';
    b.style.position = 'absolute';
    b.style.margin = '-10px 0 0 0';
    b.style.display = 'none';
    b.setAttribute('class','zdorove');
    a.append(b);

    let c = document.createElement('div');
    c.style.background = 'greenyellow';
    c.style.width = '50px';
    c.style.height = '5px';
    c.setAttribute('class','shkala');
    b.append(c);

    v[3].push([0,0,0,0,0,0,0]); 
    v[4].push([0,0,0,0,0,0,0]);
    v[5].push(50);
  }
} createVragi();



/* [ ... ] */
function bot_fire(){
   /* [ ... ] */
  audio('pistol/0');

  for(let i=0;i<v[0].length; i++){

    let x1 = 0, y1 = 0,
    k = ((y+25)-(v[0][i][1]+25))/((x+25)-(v[0][i][0]+25));

    let b = document.createElement('div');
    b.style.margin = (v[0][i][1]+25)+'px 0 0 '+(v[0][i][0]+25)+'px';
    b.style.width = '2px';
    b.style.height = '2px';
    b.style.zIndex = -1;
    b.style.position = 'absolute';
    b.style.background = 'red';
    document.body.append(b);

    let z = setInterval(() => {
      ((x+25)>(v[0][i][0]+25) ? x1+=10 : x1-=10 ); y1=(k*x1);
      if(y1>-500 && y1<500){ 
        
        b.style.margin = (y1+(v[0][i][1]+25))+'px 0 0 '+(x1+(v[0][i][0]+25))+'px';
        
        let w = document.elementFromPoint(b.getBoundingClientRect().x,
                                          b.getBoundingClientRect().y);

        /* [ ... ] */
        if(b.getBoundingClientRect().x<50){   b.remove(); } 
        if(b.getBoundingClientRect().y<50){   b.remove(); } 
        if(b.getBoundingClientRect().x>1998){ b.remove(); }
        if(b.getBoundingClientRect().y>1998){ b.remove(); }

        /* [ VRAG ] */
        if(w.classList == 'user'){ 
          document.getElementById('zdorove').style.display = 'block'; 
          u[2]-=5;
          document.getElementById('shkala').style.width = u[2]+'px';

          if(u[2]>37.5){  
            document.getElementById('shkala').style.background = 'greenyellow';
          } else if(u[2]>25){
            document.getElementById('shkala').style.background = 'yellow';
          } else if(u[2]>12.5){
            document.getElementById('shkala').style.background = 'orange';
          } else if(u[2]>0){
            document.getElementById('shkala').style.background = 'red';
          } else if(u[2]==0){
            w.style.display = 'none';
          }

          b.remove(); 
        }

        /* [ WALL ] */
        if(w.classList == 'wall' || w.classList == 'block'){ 
          b.remove(); 
        }

      }
    },10);
    setTimeout(() => { clearInterval(z); b.remove(); },3000);
  }
} setInterval(()=>{ bot_fire(); },1000);

function run(){
    let a = setInterval(() => {
      for(let i=0; i<v[0].length; i++){
        
        v[3][i][0] = document.elementFromPoint(v[2][i].getBoundingClientRect().x-2, v[2][i].getBoundingClientRect().y);
        v[3][i][1] = document.elementFromPoint(v[2][i].getBoundingClientRect().x,   v[2][i].getBoundingClientRect().y-2);
        v[3][i][2] = document.elementFromPoint(v[2][i].getBoundingClientRect().x+50,v[2][i].getBoundingClientRect().y-2);
        v[3][i][3] = document.elementFromPoint(v[2][i].getBoundingClientRect().x+52,v[2][i].getBoundingClientRect().y);
        v[3][i][4] = document.elementFromPoint(v[2][i].getBoundingClientRect().x+52,v[2][i].getBoundingClientRect().y+50);
        v[3][i][5] = document.elementFromPoint(v[2][i].getBoundingClientRect().x+50,v[2][i].getBoundingClientRect().y+52);
        v[3][i][6] = document.elementFromPoint(v[2][i].getBoundingClientRect().x,   v[2][i].getBoundingClientRect().y+52);
        v[3][i][7] = document.elementFromPoint(v[2][i].getBoundingClientRect().x-2, v[2][i].getBoundingClientRect().y+50);

        /* [ ... ] */
        if(v[0][i][0]<50){v[0][i][0]+=2;} if(v[0][i][0]>1998){v[0][i][0]-=2;}
        if(v[0][i][1]<50){v[0][i][1]+=2;} if(v[0][i][1]>1998){v[0][i][1]-=2;}

        for(let j=0; j<v[3][i].length; j++){

          /* [ AMMO ] */
          if(v[3][i][j].classList == 'ammo'){
            accoutrement(parseInt(v[3][i][j].getAttribute('x')), parseInt(v[3][i][j].getAttribute('y')),'ammo');
            v[3][i][j].remove();

            /* [ ... ] */
            audio('pistol/2'); break;
          }

          /* [ MEDIC ] */
          if(v[3][i][j].classList == 'medic'){
            accoutrement(parseInt(v[3][i][j].getAttribute('x')), parseInt(v[3][i][j].getAttribute('y')),'medic');
            v[3][i][j].remove();

            /* [ ... ] */
            v[5][i] = 50;
            document.getElementsByClassName('shkala')[i].style.background = 'greenyellow';
            document.getElementsByClassName('shkala')[i].style.width = v[5][i]+'px';
            audio('star'); break;
          }

          /* [ WALL ] */
          if(v[3][i][j].classList == 'wall'){
            if(i == 0 || i == 7){ v[0][i][0]+=2; }
            if(i == 3 || i == 4){ v[0][i][0]-=2; }
            if(i == 1 || i == 2){ v[0][i][1]+=2; }
            if(i == 6 || i == 5){ v[0][i][1]-=2; }
            break;
          }

          /* [ BLOCK ] */
          // if(v[3][i][j].classList == 'block'){
          //   //let z = v[3][i][j].getAttribute('index');

          //   /* [ ... ] */
          //   document.getElementById('info').innerHTML = v[3][i][j];

          //   if(i == 0 || i == 7){ v[2][i].style.borderLeft   = '1px solid blue'; }
          //   if(i == 3 || i == 4){ v[2][i].style.borderRight  = '1px solid blue'; }
          //   if(i == 1 || i == 2){ v[2][i].style.borderTop    = '1px solid blue'; }
          //   if(i == 6 || i == 5){ v[2][i].style.borderBottom = '1px solid blue'; }
          //   // v[3][i][j].style.margin = block[z][1]+'px 0 0 '+block[z][0]+'px';  
          //   break;
          // }
        }

        if(v[1][1]){
          v[0][i][0]+=2;
          v[0][i][1]-=2;
          v[2][i].style.margin = v[0][i][1]+'px 0 0 '
                                +v[0][i][0]+'px';
          v[2][i].style.background = 'url(img/usr/5/'+v[1][0]+'.png)';
          (v[1][0]<4) ? v[1][0]++ : v[1][0] = 0;
        } else {
          v[0][i][0]-=2;
          v[0][i][1]+=2;
          v[2][i].style.margin = v[0][i][1]+'px 0 0 '
                                +v[0][i][0]+'px';
          v[2][i].style.background = 'url(img/usr/6/'+v[1][0]+'.png)';
          (v[1][0]<4) ? v[1][0]++ : v[1][0] = 0;
        }

      }
    }, 80);

    setTimeout(() => {
      clearInterval(a);
      for(let i=0; i<v[0].length; i++){
        v[2][i].style.background = 'url(img/usr/1/'+v[1][0]+'.png)';
      }
      v[1][1] = (v[1][1]) ? v[1][1] = 0 : v[1][1] = 1; run();
    }, 5000);

} run();





/* [ OBJECT USER ] */
let u = {
  0: [200,150],
  1: document.getElementsByClassName('user'),
  2: 50,
};
// Position
let x = 200; let  y = 150; 

/* [ CREATE USER ] */
function createUser(){
  let a = document.createElement('div');
  a.style.margin = y+'px 0 0 '+x+'px'; 
  a.style.border = '1px solid red';
  a.style.position = 'absolute';
  a.style.zIndex = 1;
  a.style.width = '50px';
  a.style.height = '50px';
  a.style.background = 'url(img/usr/1/0.png)';
  a.setAttribute('id', 'user');
  a.setAttribute('class', 'user');
  document.body.append(a);

  let b = document.createElement('div');
  b.style.width = '50px';
  b.style.height = '5px';
  b.style.border = '1px solid green';
  b.style.position = 'absolute';
  b.style.margin = '-10px 0 0 0';
  b.style.display = 'none';
  b.setAttribute('id','zdorove');
  a.append(b);

  let c = document.createElement('div');
  c.style.background = 'greenyellow';
  c.style.width = u[2]+'px';
  c.style.height = '5px';
  c.setAttribute('id','shkala');
  b.append(c);
} createUser();

/* [ CONTACT ] */
function contact(){
  let li = [];
  li[0] = document.elementFromPoint(u[1][0].getBoundingClientRect().x-2, u[1][0].getBoundingClientRect().y);
  li[1] = document.elementFromPoint(u[1][0].getBoundingClientRect().x,   u[1][0].getBoundingClientRect().y-2);
  li[2] = document.elementFromPoint(u[1][0].getBoundingClientRect().x+50,u[1][0].getBoundingClientRect().y-2);
  li[3] = document.elementFromPoint(u[1][0].getBoundingClientRect().x+52,u[1][0].getBoundingClientRect().y);
  li[4] = document.elementFromPoint(u[1][0].getBoundingClientRect().x+52,u[1][0].getBoundingClientRect().y+50);
  li[5] = document.elementFromPoint(u[1][0].getBoundingClientRect().x+50,u[1][0].getBoundingClientRect().y+52);
  li[6] = document.elementFromPoint(u[1][0].getBoundingClientRect().x,   u[1][0].getBoundingClientRect().y+52);
  li[7] = document.elementFromPoint(u[1][0].getBoundingClientRect().x-2, u[1][0].getBoundingClientRect().y+50);

  /* [ ... ] */
  if(x<50){x+=2;} if(x>1998){x-=2;}
  if(y<50){y+=2;} if(y>1998){y-=2;}

  for(let i=0; i<li.length; i++){

    /* [ AMMO ] */
    if(li[i].classList == 'ammo'){
      accoutrement(parseInt(li[i].getAttribute('x')),parseInt(li[i].getAttribute('y')),'ammo');
      li[i].remove();

      /* [ ДОБАВИТЬ ПОЛЗОВАТЕЛЮ 10 ПАТРОНОВ ] */
      audio('pistol/2');
      if(w[0]<120){ w[0] += 10; }
      break;
    }

    /* [ MEDIC ] */
    if(li[i].classList == 'medic'){
      accoutrement(parseInt(li[i].getAttribute('x')),parseInt(li[i].getAttribute('y')),'medic');
      li[i].remove(); 

      /* [ ... ] */
      u[2] = 50;
      document.getElementById('shkala').style.background = 'greenyellow';
      document.getElementById('shkala').style.width = u[2]+'px';
      audio('star'); break;
    }

    /* [ WALL ] */
    if(li[i].classList == 'wall'){
      if(i == 0 || i == 7){ x+=2; sx+=2; }
      if(i == 3 || i == 4){ x-=2; sx-=2; }
      if(i == 1 || i == 2){ y+=2; sy+=2; }
      if(i == 6 || i == 5){ y-=2; sy-=2; }
      break;
    }

    /* [ BLOCK ] */
    if(li[i].classList == 'block'){
      let j = li[i].getAttribute('index');
      if(i == 0 || i == 7){ block[j][0]-=2; }
      if(i == 3 || i == 4){ block[j][0]+=2; }
      if(i == 1 || i == 2){ block[j][1]-=2; }
      if(i == 6 || i == 5){ block[j][1]+=2; }
      li[i].style.margin = block[j][1]+'px 0 0 '
                          +block[j][0]+'px';
      break;
    }
  }

  /* [ ... ] */
  window.scroll(sx,sy); 
  u[1][0].style.margin = y+'px 0 0 '+x+'px';
}

/* [ MOVE ] */
let a = 0; let b = 0;
let c = 0; let d = 0;
document.onkeydown = function(e){
  switch(e.code){
    case 'KeyW': if(!a){ a = setInterval(() => { contact(); y-=2; sy-=2; }, 10); anim(e); } break;
    case 'KeyS': if(!a){ a = setInterval(() => { contact(); y+=2; sy+=2; }, 10); anim(e); } break;
    case 'KeyA': if(!b){ b = setInterval(() => { contact(); x-=2; sx-=2; }, 10); anim(e); } break;
    case 'KeyD': if(!b){ b = setInterval(() => { contact(); x+=2; sx+=2; }, 10); anim(e); } break;
  }
}
document.onkeyup = function(e){
  clearInterval(r); c = 0; d = 0; 
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
  if((e.code == 'KeyW' || 'KeyS' || 'KeyA' || 'KeyD') && (c != '')){
    if(c != d){ d = e.code; }
  } else {
    c = e.code;
  }

  if(c == 'KeyW'){ clearInterval(r); r = setInterval(() => { u[1][0].style.background = 'url(img/usr/0/'+n+'.png)'; (n<4) ? n++ : n = 0; }, 100); }
  if(c == 'KeyS'){ clearInterval(r); r = setInterval(() => { u[1][0].style.background = 'url(img/usr/1/'+n+'.png)'; (n<4) ? n++ : n = 0; }, 100); }
  if(c == 'KeyA'){ clearInterval(r); r = setInterval(() => { u[1][0].style.background = 'url(img/usr/2/'+n+'.png)'; (n<4) ? n++ : n = 0; }, 100); }
  if(c == 'KeyD'){ clearInterval(r); r = setInterval(() => { u[1][0].style.background = 'url(img/usr/3/'+n+'.png)'; (n<4) ? n++ : n = 0; }, 100); }

  if(c == 'KeyW' && d == 'KeyD' || d == 'KeyW' && c == 'KeyD'){ clearInterval(r); r = setInterval(() => { u[1][0].style.background = 'url(img/usr/5/'+n+'.png)'; (n<4) ? n++ : n = 0; }, 100); }
  if(c == 'KeyW' && d == 'KeyA' || d == 'KeyW' && c == 'KeyA'){ clearInterval(r); r = setInterval(() => { u[1][0].style.background = 'url(img/usr/4/'+n+'.png)'; (n<4) ? n++ : n = 0; }, 100); }
  if(c == 'KeyS' && d == 'KeyD' || d == 'KeyS' && c == 'KeyD'){ clearInterval(r); r = setInterval(() => { u[1][0].style.background = 'url(img/usr/7/'+n+'.png)'; (n<4) ? n++ : n = 0; }, 100); }
  if(c == 'KeyS' && d == 'KeyA' || d == 'KeyS' && c == 'KeyA'){ clearInterval(r); r = setInterval(() => { u[1][0].style.background = 'url(img/usr/6/'+n+'.png)'; (n<4) ? n++ : n = 0; }, 100); }
}

document.onclick = (e) => { 
  u[1][0].style.background = 
  (e.pageX>(y+50) && e.pageY>(x+50)) ? 'url(img/usr/7/'+n+'.png)' :
  (e.pageX<y && e.pageY>(x+50))      ? 'url(img/usr/6/'+n+'.png)' :
  (e.pageX>(y+50) && e.pageY<x)      ? 'url(img/usr/5/'+n+'.png)' :
  (e.pageX<y && e.pageY<x)           ? 'url(img/usr/4/'+n+'.png)' :
  (e.pageX>(y+50) && e.pageY>x)      ? 'url(img/usr/3/'+n+'.png)' :
  (e.pageX<y && e.pageY>x)           ? 'url(img/usr/2/'+n+'.png)' :
  (e.pageX>y && e.pageY>(x+50))      ? 'url(img/usr/1/'+n+'.png)' :
  (e.pageX>y && e.pageY<(x+50))      ? 'url(img/usr/0/'+n+'.png)' :
                                       'url(img/usr/1/'+n+'.png)' ;
}


