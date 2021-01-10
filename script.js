/* [ ЗАПРЕТИТЬ SCROLL ] */
document.body.style.overflow = 'hidden';

/* [ ЗАПРЕТИТЬ ONCONTEXTMENU ] */
document.oncontextmenu = function(){ 
  sx=0; sy=0; window.scroll(0,0); 
  document.location = 'index.html'; 
  return false; 
}

/* [ ... ] */
let x = 200; 
let y = 150; 

/* [ SCROLL ] */
let sx = 0; 
let sy = 0; 

/* [ ... ] */
let score = [0,0]; 

/* [ RANDOM ] */
function random(min,max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* [ MENU ] */
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
u.style.margin = y+'px 0 0 '+x+'px'; 
u.style.border = '1px solid black';
u.style.position = 'absolute';
u.style.zIndex = 1;
u.style.width = '50px';
u.style.height = '50px';
u.src = 'img/usr/1/0.png';
u.setAttribute('id', 'user');
document.body.append(u);


/* [ CREATE VRAG ] */
let v = {
  0: [[300,280, 'orange',[],[]],[500,450, 'blue',[],[]],
      [450,150, 'green', [],[]],[150,500, '',    [],[]]],
  1:  [0,1],
  2: document.getElementsByClassName('vrag'),
}; 

for(let i=0; i<v[0].length; i++){
  let vrg = document.createElement('img');
  vrg.style.margin = v[0][i][0]+'px 0 0 '+v[0][i][1]+'px';
  vrg.style.border = (v[0][i][2] != '') ?   
  '1px solid '+v[0][i][2] : '1px solid red';
  vrg.style.position = 'absolute';
  vrg.style.zIndex = 1;
  vrg.style.width = '50px';
  vrg.style.height = '50px';
  vrg.src = 'img/usr/1/0.png';
  vrg.setAttribute('class', 'vrag');
  document.body.append(vrg);
}

function run(){
    let a = setInterval(() => {
      for(let i=0; i<v[0].length; i++){
        v[0][i][3][0] = document.elementFromPoint(v[2][i].getBoundingClientRect().x,   v[2][i].getBoundingClientRect().y-2);
        v[0][i][3][1] = document.elementFromPoint(v[2][i].getBoundingClientRect().x-2, v[2][i].getBoundingClientRect().y);
        v[0][i][3][2] = document.elementFromPoint(v[2][i].getBoundingClientRect().x+50,v[2][i].getBoundingClientRect().y-2);
        v[0][i][3][3] = document.elementFromPoint(v[2][i].getBoundingClientRect().x+52,v[2][i].getBoundingClientRect().y);
        v[0][i][3][4] = document.elementFromPoint(v[2][i].getBoundingClientRect().x+52,v[2][i].getBoundingClientRect().y+50);
        v[0][i][3][5] = document.elementFromPoint(v[2][i].getBoundingClientRect().x+50,v[2][i].getBoundingClientRect().y+52);
        v[0][i][3][6] = document.elementFromPoint(v[2][i].getBoundingClientRect().x,   v[2][i].getBoundingClientRect().y+52);
        v[0][i][3][7] = document.elementFromPoint(v[2][i].getBoundingClientRect().x-2, v[2][i].getBoundingClientRect().y+50);
        
        /* [ ... ] */
        if(v[0][i][0]<50){v[0][i][0]+=2;} if(v[0][i][0]>1998){v[0][i][0]-=2;}
        if(v[0][i][1]<50){v[0][i][1]+=2;} if(v[0][i][1]>1998){v[0][i][1]-=2;}

        for(let j=0; j<v[0][i][3].length; j++){

          /* [ STAR ] */
          if(v[0][i][3][j].classList == 'star'){
            createStar(parseInt(v[0][i][3][j].getAttribute('x')),
                       parseInt(v[0][i][3][j].getAttribute('y')));
            v[0][i][3][j].remove(); 
            let str = new Audio('music/star.mp3');
            str.volume = '0.2';
            str.play();
            break;
          }

          /* [ WALL ] */
          if(v[0][i][3][j].classList == 'wall'){
            v[0][i][4][0] = document.elementFromPoint(v[0][i][3][j].getBoundingClientRect().x,   v[0][i][3][j].getBoundingClientRect().y-2);
            v[0][i][4][1] = document.elementFromPoint(v[0][i][3][j].getBoundingClientRect().x-2, v[0][i][3][j].getBoundingClientRect().y);
            v[0][i][4][2] = document.elementFromPoint(v[0][i][3][j].getBoundingClientRect().x+50,v[0][i][3][j].getBoundingClientRect().y-2);
            v[0][i][4][3] = document.elementFromPoint(v[0][i][3][j].getBoundingClientRect().x+52,v[0][i][3][j].getBoundingClientRect().y);
            v[0][i][4][4] = document.elementFromPoint(v[0][i][3][j].getBoundingClientRect().x+52,v[0][i][3][j].getBoundingClientRect().y+50);
            v[0][i][4][5] = document.elementFromPoint(v[0][i][3][j].getBoundingClientRect().x+50,v[0][i][3][j].getBoundingClientRect().y+52);
            v[0][i][4][6] = document.elementFromPoint(v[0][i][3][j].getBoundingClientRect().x,   v[0][i][3][j].getBoundingClientRect().y+52);
            v[0][i][4][7] = document.elementFromPoint(v[0][i][3][j].getBoundingClientRect().x-2, v[0][i][3][j].getBoundingClientRect().y+50);

            /* [ LEFT ] */
            if(v[0][i][4][1] == '[object HTMLImageElement]' || v[0][i][4][7] == '[object HTMLImageElement]' 
            || (v[0][i][4][1] == '[object HTMLImageElement]' && v[0][i][4][7] == '[object HTMLImageElement]')){
              v[0][i][0] = v[0][i][0]; v[0][i][1]-=2; 
            }

            /* [ RIGHT ] */
            if(v[0][i][4][3] == '[object HTMLImageElement]' || v[0][i][4][4] == '[object HTMLImageElement]' 
            || (v[0][i][4][3] == '[object HTMLImageElement]' && v[0][i][4][4] == '[object HTMLImageElement]')){
              v[0][i][0] = v[0][i][0];  v[0][i][1]+=2; 
            }

            /* [ TOP ] */
            if(v[0][i][4][0] == '[object HTMLImageElement]' || v[0][i][4][2] == '[object HTMLImageElement]' 
            || (v[0][i][4][0] == '[object HTMLImageElement]' && v[0][i][4][2] == '[object HTMLImageElement]')){
              v[0][i][0]-=2; v[0][i][1] = v[0][i][1]; 
            }

            /* [ BOTTOM ] */
            if(v[0][i][4][6] == '[object HTMLImageElement]' || v[0][i][4][5] == '[object HTMLImageElement]' 
            || (v[0][i][4][6] == '[object HTMLImageElement]' && v[0][i][4][5] == '[object HTMLImageElement]')){
              v[0][i][0]+=2; v[0][i][1] = v[0][i][1]; 
            }
            break;
          }

          /* [ BLOCK ] */
          if(v[0][i][3][j].classList == 'block'){
            v[0][i][4][0] = document.elementFromPoint(v[0][i][3][j].getBoundingClientRect().x,   v[0][i][3][j].getBoundingClientRect().y-2);
            v[0][i][4][1] = document.elementFromPoint(v[0][i][3][j].getBoundingClientRect().x-2, v[0][i][3][j].getBoundingClientRect().y);
            v[0][i][4][2] = document.elementFromPoint(v[0][i][3][j].getBoundingClientRect().x+50,v[0][i][3][j].getBoundingClientRect().y-2);
            v[0][i][4][3] = document.elementFromPoint(v[0][i][3][j].getBoundingClientRect().x+52,v[0][i][3][j].getBoundingClientRect().y);
            v[0][i][4][4] = document.elementFromPoint(v[0][i][3][j].getBoundingClientRect().x+52,v[0][i][3][j].getBoundingClientRect().y+50);
            v[0][i][4][5] = document.elementFromPoint(v[0][i][3][j].getBoundingClientRect().x+50,v[0][i][3][j].getBoundingClientRect().y+52);
            v[0][i][4][6] = document.elementFromPoint(v[0][i][3][j].getBoundingClientRect().x,   v[0][i][3][j].getBoundingClientRect().y+52);
            v[0][i][4][7] = document.elementFromPoint(v[0][i][3][j].getBoundingClientRect().x-2, v[0][i][3][j].getBoundingClientRect().y+50);
            let k = v[0][i][3][j].getAttribute('index');

            /* [ LEFT ] */
            if(v[0][i][4][1] == '[object HTMLImageElement]' || v[0][i][4][7] == '[object HTMLImageElement]' 
            || (v[0][i][4][1] == '[object HTMLImageElement]' && v[0][i][4][7] == '[object HTMLImageElement]')){
              block[k][1] = block[k][1];  block[k][0] +=2;
              v[0][i][3][j].style.margin = block[k][1]+'px 0 0 '+block[k][0]+'px';
            }

            /* [ RIGHT ] */
            if(v[0][i][4][3] == '[object HTMLImageElement]' || v[0][i][4][4] == '[object HTMLImageElement]' 
            || (v[0][i][4][3] == '[object HTMLImageElement]' && v[0][i][4][4] == '[object HTMLImageElement]')){
              block[k][1] = block[k][1];  block[k][0] -=2;
              v[0][i][3][j].style.margin = block[k][1]+'px 0 0 '+block[k][0]+'px';
            }

            /* [ TOP ] */
            if(v[0][i][4][0] == '[object HTMLImageElement]' || v[0][i][4][2] == '[object HTMLImageElement]' 
            || (v[0][i][4][0] == '[object HTMLImageElement]' && v[0][i][4][2] == '[object HTMLImageElement]')){
              block[k][1] +=2; block[k][0] = block[k][0];
              v[0][i][3][j].style.margin = block[k][1]+'px 0 0 '+block[k][0]+'px';
            }

            /* [ BOTTOM ] */
            if(v[0][i][4][6] == '[object HTMLImageElement]' || v[0][i][4][5] == '[object HTMLImageElement]' 
            || (v[0][i][4][6] == '[object HTMLImageElement]' && v[0][i][4][5] == '[object HTMLImageElement]')){
              block[k][1] -=2; block[k][0] = block[k][0];
              v[0][i][3][j].style.margin = block[k][1]+'px 0 0 '+block[k][0]+'px';
            }
            break;
          }
        }

        if(v[1][1]){
          v[0][i][0]+=2; 
          v[0][i][1]-=2; 
          v[2][i].style.margin = v[0][i][1]+'px 0 0 '
                                +v[0][i][0]+'px';
          v[2][i].src = 'img/usr/5/'+v[1][0]+'.png'; 
          (v[1][0]<4) ? v[1][0]++ : v[1][0] = 0;
        } else {
          v[0][i][0]-=2; 
          v[0][i][1]+=2;  
          v[2][i].style.margin = v[0][i][1]+'px 0 0 '
                               + v[0][i][0]+'px';
          v[2][i].src = 'img/usr/6/'+v[1][0]+'.png'; 
          (v[1][0]<4) ? v[1][0]++ : v[1][0] = 0; 
        }
      }
    }, 80);

    setTimeout(() => {
      clearInterval(a);
      for(let i=0; i<v[0].length; i++){
      v[2][i].src = 'img/usr/1/'+v[1][0]+'.png';}
      v[1][1] = (v[1][1]) ? v[1][1] = 0 : v[1][1] = 1; run(); 
    }, 5000);

} run();


/* [ FIRE ] */
//   weapon
// ['пистолет',
//   'пистолет пулемет',
//   'автомат',
//   'пулемет', 
//   'снайперская винтовка',
//   'гранатомет', 
//   'гранаты'];

/* [ КОЛ-ВО ПАТРОНОВ В ОРУЖИИ USERA ] */
let w = [0, 120, 120, 120, 120, 0, 0];

let p = [0,0];
let song = 0;
let audio = new Audio('music/'+random(0,2)+'.mp3');
audio.volume = '0.2';

document.body.onclick = (e) => {
  /* [ ЕСЛИ ЕСТЬ ПАТРОНЫ ] */
  if(w[0]>0){
    let fire = new Audio('music/pistol/0.mp3');
    fire.volume = '0.2';
    fire.play();
    w[0]--;
    document.getElementById('info').innerHTML = w[0];

    // Анимация выстрела  
    u.src = 'img/usr/8/0.png';

    p[0] = x+25;
    p[1] = y+25;

    let x1 = 0, y1 = 0, 
    k = (e.pageY-p[1])/(e.pageX-p[0]);

    let b = document.createElement('div');
    b.style.margin = p[1]+'px 0 0 '+p[0]+'px';
    b.style.width = '2px';
    b.style.height = '2px';
    b.style.zIndex = 0;
    b.style.position = 'absolute';
    b.style.background = 'red';
    document.body.append(b);

    let z = setInterval(() => {
      (e.pageX>p[0] ? x1+=10 : x1-=10 ); y1=(k*x1);
      if(y1>-500 && y1<500){ 
        
        b.style.margin = (y1+p[1])+'px 0 0 '+(x1+p[0])+'px';
        
        let w = document.elementFromPoint(b.getBoundingClientRect().x,
                                          b.getBoundingClientRect().y);

        /* [ ... ] */
        if(b.getBoundingClientRect().x<50){  b.remove();} 
        if(b.getBoundingClientRect().y<50){  b.remove();} 
        if(b.getBoundingClientRect().x>1998){b.remove();}
        if(b.getBoundingClientRect().y>1998){b.remove();}

        /* [ VRAG ] */
        if(w.classList == 'vrag'){ 
          w.style.display = 'none'; 
          //score[1]++; setMenu('+'+score[1]+' kill','red');
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

        /* [ WALL (GREENYELLOW) ] */
        if(w.classList == 'wall' && w.style.border == '1px solid orange'){
          if(!song){ 
            audio.play();
            song = 1; 
          } else { 
            audio.pause(); 
            audio = new Audio('music/'+random(0,4)+'.mp3');
            audio.volume = '0.2';
            song = 0; 
          }
        }

      }
    },10);
    setTimeout(() => { clearInterval(z); b.remove(); },3000);

  /* [ ЕСЛИ НЕТ ПАТРОНОВ ] */
  } else {
    let fire = new Audio('music/pistol/1.mp3');
    fire.volume = '0.2';
    fire.play();
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

/* [ WHITE ] */
createWall(595,350,'white');
createWall(650,550,'white');
createWall(705,255,'white');



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
} createSong(800,310);



/* [ CREATE STAR ] */
function createStar(x,y){ 
  setTimeout(() => {
    let a = document.createElement('img');
    a.style.border = '2px solid orange';
    a.style.borderRadius = '50%';
    a.style.margin = random(y,(y+200))+'px 0 0 '
                    +random(x,(x+200))+'px';
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
createStar(150,150);
createStar(1050,150);
createStar(1050,450);


/* [ CREATE BLOCK ] */
let block = [[340,200,'brown'],
             [400,200,'black'],
             [900,260,'greenyellow'],
             [1000,260,'yellow']];
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

/* [ MARKER ] */
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
      createStar(parseInt(li[i].getAttribute('x')),
                 parseInt(li[i].getAttribute('y')));
      li[i].remove(); 

      /* [ ПОЙМАНА ЗВЕЗДА ] */
      // let str = new Audio('music/star.mp3');
      // str.volume = '0.2';
      // str.play();
      //score[0]++; 
      //setMenu('+'+score[0]+' star'); 

      /* [ ДОБАВИТЬ ПОЛЗОВАТЕЛЮ 10 ПАТРОНОВ ] */
      let fire = new Audio('music/pistol/2.mp3');
      fire.volume = '0.2';
      fire.play();
      if(w[0]<120){ w[0] += 10; }
      document.getElementById('info').innerHTML = w[0]+' патронов';
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

      /* [ LEFT ] */
      if(lj[1] == '[object HTMLImageElement]' || lj[7] == '[object HTMLImageElement]' 
      || (lj[1] == '[object HTMLImageElement]' && lj[7] == '[object HTMLImageElement]')){
        x = x;  y-=2; sx-=2;
      }

      /* [ RIGHT ] */
      if(lj[3] == '[object HTMLImageElement]' || lj[4] == '[object HTMLImageElement]' 
      || (lj[3] == '[object HTMLImageElement]' && lj[4] == '[object HTMLImageElement]')){
        x = x;  y+=2; sx+=2;
      }

      /* [ TOP ] */
      if(lj[0] == '[object HTMLImageElement]' || lj[2] == '[object HTMLImageElement]' 
      || (lj[0] == '[object HTMLImageElement]' && lj[2] == '[object HTMLImageElement]')){
        x-=2; y = y; sy-=2;
      }

      /* [ BOTTOM ] */
      if(lj[6] == '[object HTMLImageElement]' || lj[5] == '[object HTMLImageElement]' 
      || (lj[6] == '[object HTMLImageElement]' && lj[5] == '[object HTMLImageElement]')){
        x+=2; y = y; sy+=2;
      }

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
  window.scroll(sx,sy); u.style.margin = y+'px 0 0 '+x+'px';
  //document.getElementById('info').innerHTML = ' x: '+x+' y: '+y;
}
//document.getElementById('info').innerHTML = ' x: '+x+' y: '+y;

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
  if((c == '' || d == '') && (c != '' && e.code != c)){
    if(c != d && e.code == 'KeyW' || 'KeyS' || 'KeyA' || 'KeyD'){ d = e.code; }
  } else {
    if(e.code == 'KeyW' || 'KeyS' || 'KeyA' || 'KeyD'){ c = e.code; }
  }

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