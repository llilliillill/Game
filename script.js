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

/* [ AUDIO ] */
function audio(x,y){
  let a = new Audio('music/'+x+'.mp3');
  a.volume = '0.2';
  a.play();
  return (y) ? a : false;
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
let zdor = 50;

let u = document.createElement('div');
u.style.margin = y+'px 0 0 '+x+'px'; 
u.style.border = '1px solid red';
u.style.position = 'absolute';
u.style.zIndex = 1;
u.style.width = '50px';
u.style.height = '50px';
u.style.background = 'url(img/usr/1/0.png)';
u.setAttribute('id', 'user');
document.body.append(u);

let zdorove = document.createElement('div');
zdorove.style.width = '50px';
zdorove.style.height = '5px';
zdorove.style.border = '1px solid green';
zdorove.style.position = 'absolute';
zdorove.style.margin = '-10px 0 0 0';
zdorove.style.display = 'none';
zdorove.setAttribute('id','zdorove');
u.append(zdorove);

let shkala = document.createElement('div');
shkala.style.background = 'greenyellow';
shkala.style.width = zdor+'px';
shkala.style.height = '5px';
shkala.setAttribute('id','shkala');
zdorove.append(shkala);





/* [ FIRE ] */
let p = [0,0];

/* [ КОЛ-ВО ПАТРОНОВ В ОРУЖИИ USERA ] */
let w = [30, 0, 0, 0, 0, 0, 0];

document.body.onclick = (e) => {
  /* [ ЕСЛИ ЕСТЬ ПАТРОНЫ ] */
  if(w[0]>0){

    /* [ ... ] */
    audio('pistol/0'); w[0]--;
    //document.getElementById('info').innerHTML = w[0];

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
    b.style.zIndex = -1;
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
  a.style.zIndex = 1;
  a.style.width = '50px';
  a.style.height = '50px';
  a.style.background = (z) ? z : 'white';
  a.setAttribute('class', 'wall');
  document.body.append(a);
} 
createWall(300,150,'gray');
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

// accoutrement(200,250,'ammo');
// accoutrement(200,250,'medic');
// accoutrement(1050,150,'medic');
// accoutrement(1050,450,'ammo');


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
    a.setAttribute('class', 'none');
    a.setAttribute('index', i);
    document.body.append(a);
  }
}// createBlock(block);

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





/* [ CREATE VRAG ] */
let v = {
  0: [[300,280, 'orange'],[500,450, 'blue'],
      [450,150, 'green' ],[150,500, '',   ]],
  1:  [0,1],
  2: document.getElementsByClassName('vrag'),
  3: [], 4: [], 5: []
}; 

function createVragi(){
  for(let i=0; i<v[0].length; i++){
    let vrg = document.createElement('div');
    vrg.style.margin = v[0][i][0]+'px 0 0 '+v[0][i][1]+'px';
    //vrg.style.border = (v[0][i][2] != '') ? '1px solid '
    //+v[0][i][2] : '1px solid red';
    vrg.style.position = 'absolute';
    vrg.style.zIndex = 0;
    vrg.style.width = '50px';
    vrg.style.height = '50px';
    vrg.style.background = 'url(img/usr/1/0.png)';
    vrg.setAttribute('index', i);
    vrg.setAttribute('class', 'vrag');
    document.body.append(vrg);

    let zdorove = document.createElement('div');
    zdorove.style.width = '50px';
    zdorove.style.height = '5px';
    zdorove.style.border = '1px solid green';
    zdorove.style.position = 'absolute';
    zdorove.style.margin = '-10px 0 0 0';
    zdorove.style.display = 'none';
    zdorove.setAttribute('class','zdorove');
    vrg.append(zdorove);

    let shkala = document.createElement('div');
    shkala.style.background = 'greenyellow';
    shkala.style.width = '50px';
    shkala.style.height = '5px';
    shkala.setAttribute('class','shkala');
    zdorove.append(shkala);

    v[3].push([0,0,0,0,0,0,0]); 
    v[4].push([0,0,0,0,0,0,0]);
    v[5].push(50);
  }
} createVragi();

/* [ ЕСЛИ ЕСТЬ ПАТРОНЫ ] */
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
        if(w.id == 'user'){ 
          document.getElementById('zdorove').style.display = 'block'; 
          zdor-=5;
          document.getElementById('shkala').style.width = zdor+'px';

          if(zdor>37.5){  
            document.getElementById('shkala').style.background = 'greenyellow';
          } else if(zdor>25){
            document.getElementById('shkala').style.background = 'yellow';
          } else if(zdor>12.5){
            document.getElementById('shkala').style.background = 'orange';
          } else if(zdor>0){
            document.getElementById('shkala').style.background = 'red';
          } else if(zdor == 0){
            //w.style.display = 'none';
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
} //setInterval(()=>{ bot_fire(); },1000);

function run(){
    let a = setInterval(() => {
      for(let i=0; i<v[0].length; i++){
        v[3][i][0] = document.elementFromPoint(v[2][i].getBoundingClientRect().x,   v[2][i].getBoundingClientRect().y-2);
        v[3][i][1] = document.elementFromPoint(v[2][i].getBoundingClientRect().x-2, v[2][i].getBoundingClientRect().y);
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
            accoutrement(parseInt(v[3][i][j].getAttribute('x')),parseInt(v[3][i][j].getAttribute('y')),'ammo');
            v[3][i][j].remove(); 

            /* [ ... ] */
            audio('pistol/2'); break;
          }

          /* [ MEDIC ] */
          if(v[3][i][j].classList == 'medic'){
            accoutrement(parseInt(v[3][i][j].getAttribute('x')),parseInt(v[3][i][j].getAttribute('y')),'medic');
            v[3][i][j].remove(); 

            /* [ ... ] */
            v[5][i] = 50;
            document.getElementsByClassName('shkala')[i].style.background = 'greenyellow';
            document.getElementsByClassName('shkala')[i].style.width = v[5][i]+'px';
            audio('star'); break;
          }

          /* [ WALL ] */
          if(v[3][i][j].classList == 'wall'){
            v[4][i][0] = document.elementFromPoint(v[3][i][j].getBoundingClientRect().x,   v[3][i][j].getBoundingClientRect().y-2);
            v[4][i][1] = document.elementFromPoint(v[3][i][j].getBoundingClientRect().x-2, v[3][i][j].getBoundingClientRect().y);
            v[4][i][2] = document.elementFromPoint(v[3][i][j].getBoundingClientRect().x+50,v[3][i][j].getBoundingClientRect().y-2);
            v[4][i][3] = document.elementFromPoint(v[3][i][j].getBoundingClientRect().x+52,v[3][i][j].getBoundingClientRect().y);
            v[4][i][4] = document.elementFromPoint(v[3][i][j].getBoundingClientRect().x+52,v[3][i][j].getBoundingClientRect().y+50);
            v[4][i][5] = document.elementFromPoint(v[3][i][j].getBoundingClientRect().x+50,v[3][i][j].getBoundingClientRect().y+52);
            v[4][i][6] = document.elementFromPoint(v[3][i][j].getBoundingClientRect().x,   v[3][i][j].getBoundingClientRect().y+52);
            v[4][i][7] = document.elementFromPoint(v[3][i][j].getBoundingClientRect().x-2, v[3][i][j].getBoundingClientRect().y+50);

            /* [ LEFT ] */
            if(v[4][i][1] == '[object HTMLDivElement]' || v[4][i][7] == '[object HTMLDivElement]' 
            || (v[4][i][1] == '[object HTMLDivElement]' && v[4][i][7] == '[object HTMLDivElement]')){
              v[0][i][0] = v[0][i][0]; v[0][i][1]-=2; 
              //v[0][i][1] = v[0][i][1];  v[0][i][0]-=2;
            }

            /* [ RIGHT ] */
            if(v[4][i][3] == '[object HTMLDivElement]' || v[4][i][4] == '[object HTMLDivElement]' 
            || (v[4][i][3] == '[object HTMLDivElement]' && v[4][i][4] == '[object HTMLDivElement]')){
              v[0][i][0] = v[0][i][0];  v[0][i][1]+=2; 
              //v[0][i][1] = v[0][i][1];  v[0][i][0]+=2;
            }

            /* [ TOP ] */
            if(v[4][i][0] == '[object HTMLDivElement]' || v[4][i][2] == '[object HTMLDivElement]' 
            || (v[4][i][0] == '[object HTMLDivElement]' && v[4][i][2] == '[object HTMLDivElement]')){
              v[0][i][0]-=2; v[0][i][1] = v[0][i][1]; 
              //v[0][i][1]-=2; v[0][i][0] = v[0][i][0];
            }

            /* [ BOTTOM ] */
            if(v[4][i][6] == '[object HTMLDivElement]' || v[4][i][5] == '[object HTMLDivElement]' 
            || (v[4][i][6] == '[object HTMLDivElement]' && v[4][i][5] == '[object HTMLDivElement]')){
              v[0][i][0]+=2; v[0][i][1] = v[0][i][1]; 
              //v[0][i][1]+=2; v[0][i][0] = v[0][i][0];
            }
            break;
          }

          /* [ BLOCK ] */
          if(v[3][i][j].classList == 'block'){
            v[4][i][0] = document.elementFromPoint(v[3][i][j].getBoundingClientRect().x,   v[3][i][j].getBoundingClientRect().y-2);
            v[4][i][1] = document.elementFromPoint(v[3][i][j].getBoundingClientRect().x-2, v[3][i][j].getBoundingClientRect().y);
            v[4][i][2] = document.elementFromPoint(v[3][i][j].getBoundingClientRect().x+50,v[3][i][j].getBoundingClientRect().y-2);
            v[4][i][3] = document.elementFromPoint(v[3][i][j].getBoundingClientRect().x+52,v[3][i][j].getBoundingClientRect().y);
            v[4][i][4] = document.elementFromPoint(v[3][i][j].getBoundingClientRect().x+52,v[3][i][j].getBoundingClientRect().y+50);
            v[4][i][5] = document.elementFromPoint(v[3][i][j].getBoundingClientRect().x+50,v[3][i][j].getBoundingClientRect().y+52);
            v[4][i][6] = document.elementFromPoint(v[3][i][j].getBoundingClientRect().x,   v[3][i][j].getBoundingClientRect().y+52);
            v[4][i][7] = document.elementFromPoint(v[3][i][j].getBoundingClientRect().x-2, v[3][i][j].getBoundingClientRect().y+50);
            let k = v[3][i][j].getAttribute('index');

            /* [ LEFT ] */
            if(v[4][i][1] == '[object HTMLImageElement]' || v[4][i][7] == '[object HTMLImageElement]' 
            || (v[4][i][1] == '[object HTMLImageElement]' && v[4][i][7] == '[object HTMLImageElement]')){
              block[k][1] = block[k][1];  block[k][0]+=2;
              v[3][i][j].style.margin = block[k][1]+'px 0 0 '+block[k][0]+'px';
            }

            /* [ RIGHT ] */
            if(v[4][i][3] == '[object HTMLImageElement]' || v[4][i][4] == '[object HTMLImageElement]' 
            || (v[4][i][3] == '[object HTMLImageElement]' && v[4][i][4] == '[object HTMLImageElement]')){
              block[k][1] = block[k][1];  block[k][0]-=2;
              v[3][i][j].style.margin = block[k][1]+'px 0 0 '+block[k][0]+'px';
            }

            /* [ TOP ] */
            if(v[4][i][0] == '[object HTMLImageElement]' || v[4][i][2] == '[object HTMLImageElement]' 
            || (v[4][i][0] == '[object HTMLImageElement]' && v[4][i][2] == '[object HTMLImageElement]')){
              block[k][1]+=2; block[k][0] = block[k][0];
              v[3][i][j].style.margin = block[k][1]+'px 0 0 '+block[k][0]+'px';
            }

            /* [ BOTTOM ] */
            if(v[4][i][6] == '[object HTMLImageElement]' || v[4][i][5] == '[object HTMLImageElement]' 
            || (v[4][i][6] == '[object HTMLImageElement]' && v[4][i][5] == '[object HTMLImageElement]')){
              block[k][1]-=2; block[k][0] = block[k][0];
              v[3][i][j].style.margin = block[k][1]+'px 0 0 '+block[k][0]+'px';
            }
            break;
          }
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
                              + v[0][i][0]+'px';
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




/* [ CONTACT ] */
let li = []; let lj = [];
function contact(){
  li[0] = document.elementFromPoint(u.getBoundingClientRect().x,u.getBoundingClientRect().y-2);
  //marker(u.getBoundingClientRect().x,u.getBoundingClientRect().y-2);

  li[1] = document.elementFromPoint(u.getBoundingClientRect().x-2,u.getBoundingClientRect().y);
  //marker(u.getBoundingClientRect().x-2,u.getBoundingClientRect().y);

  li[2] = document.elementFromPoint(u.getBoundingClientRect().x+50,u.getBoundingClientRect().y-2);
  //marker(u.getBoundingClientRect().x+50,u.getBoundingClientRect().y-2);

  li[3] = document.elementFromPoint(u.getBoundingClientRect().x+52,u.getBoundingClientRect().y);
  //marker(u.getBoundingClientRect().x+52,u.getBoundingClientRect().y);

  li[4] = document.elementFromPoint(u.getBoundingClientRect().x+52,u.getBoundingClientRect().y+50);
  //marker(u.getBoundingClientRect().x+52,u.getBoundingClientRect().y+50);

  li[5] = document.elementFromPoint(u.getBoundingClientRect().x+50,u.getBoundingClientRect().y+52);
  //marker(u.getBoundingClientRect().x+50,u.getBoundingClientRect().y+52);

  li[6] = document.elementFromPoint(u.getBoundingClientRect().x,u.getBoundingClientRect().y+52);
  //marker(u.getBoundingClientRect().x,u.getBoundingClientRect().y+52);

  li[7] = document.elementFromPoint(u.getBoundingClientRect().x-2,u.getBoundingClientRect().y+50);
  //marker(u.getBoundingClientRect().x-2,u.getBoundingClientRect().y+50);

  //document.getElementById('info').innerHTML = li[2];

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
      zdor = 50;
      document.getElementById('shkala').style.background = 'greenyellow';
      document.getElementById('shkala').style.width = zdor+'px';
      audio('star'); break;
    }

    /* [ WALL ] */
    if(li[i].classList == 'wall'){
      lj[0] = document.elementFromPoint(li[i].getBoundingClientRect().x,li[i].getBoundingClientRect().y-2);
      //marker(li[i].getBoundingClientRect().x,li[i].getBoundingClientRect().y-2);

      lj[1] = document.elementFromPoint(li[i].getBoundingClientRect().x-2,li[i].getBoundingClientRect().y);
      //marker(li[i].getBoundingClientRect().x-2,li[i].getBoundingClientRect().y);

      lj[2] = document.elementFromPoint(li[i].getBoundingClientRect().x+50,li[i].getBoundingClientRect().y-2);
      //marker(li[i].getBoundingClientRect().x+50,li[i].getBoundingClientRect().y-2);

      lj[3] = document.elementFromPoint(li[i].getBoundingClientRect().x+52,li[i].getBoundingClientRect().y);
      //marker(li[i].getBoundingClientRect().x+52,li[i].getBoundingClientRect().y);

      lj[4] = document.elementFromPoint(li[i].getBoundingClientRect().x+52,li[i].getBoundingClientRect().y+50);
      //marker(li[i].getBoundingClientRect().x+52,li[i].getBoundingClientRect().y+50);

      lj[5] = document.elementFromPoint(li[i].getBoundingClientRect().x+50,li[i].getBoundingClientRect().y+52);
      //marker(li[i].getBoundingClientRect().x+50,li[i].getBoundingClientRect().y+52);

      lj[6] = document.elementFromPoint(li[i].getBoundingClientRect().x,li[i].getBoundingClientRect().y+52);
      //marker(li[i].getBoundingClientRect().x,li[i].getBoundingClientRect().y+52);

      lj[7] = document.elementFromPoint(li[i].getBoundingClientRect().x-2,li[i].getBoundingClientRect().y+50);
      //marker(li[i].getBoundingClientRect().x-2,li[i].getBoundingClientRect().y+50);
      //document.getElementById('info').innerHTML = lj[1];

      /* [ LEFT ] */
      if(lj[1] == '[object HTMLDivElement]' || lj[7] == '[object HTMLDivElement]' 
      || (lj[1] == '[object HTMLDivElement]' && lj[7]== '[object HTMLDivElement]')){
        x-=2; sx-=2;
        u.style.border = '1px solid greenyellow';
      } 

      /* [ RIGHT ] */
      else if(lj[3] == '[object HTMLDivElement]' || lj[4] == '[object HTMLDivElement]' 
      || (lj[3] == '[object HTMLDivElement]' && lj[4] == '[object HTMLDivElement]')){
        x+=2; sx+=2;
      } 

      /* [ TOP ] */
      else if(lj[0] == '[object HTMLDivElement]' || lj[2] == '[object HTMLDivElement]' 
      || (lj[0] == '[object HTMLDivElement]' && lj[2] == '[object HTMLDivElement]')){
        y-=2; sy-=2;
      } 

      // /* [ BOTTOM ] */
      else if(lj[6] == '[object HTMLDivElement]' || lj[5] == '[object HTMLDivElement]' 
      || (lj[6] == '[object HTMLDivElement]' && lj[5] == '[object HTMLDivElement]')){
        y+=2; sy+=2;
      }
      break;
    }

    /* [ BLOCK ] */
    // if(li[i].classList == 'block'){
    //   lj[0] = document.elementFromPoint(li[i].getBoundingClientRect().x,li[i].getBoundingClientRect().y-2);
    //   lj[1] = document.elementFromPoint(li[i].getBoundingClientRect().x-2,li[i].getBoundingClientRect().y);
    //   lj[2] = document.elementFromPoint(li[i].getBoundingClientRect().x+50,li[i].getBoundingClientRect().y-2);
    //   lj[3] = document.elementFromPoint(li[i].getBoundingClientRect().x+52,li[i].getBoundingClientRect().y);
    //   lj[4] = document.elementFromPoint(li[i].getBoundingClientRect().x+52,li[i].getBoundingClientRect().y+50);
    //   lj[5] = document.elementFromPoint(li[i].getBoundingClientRect().x+50,li[i].getBoundingClientRect().y+52);
    //   lj[6] = document.elementFromPoint(li[i].getBoundingClientRect().x,li[i].getBoundingClientRect().y+52);
    //   lj[7] = document.elementFromPoint(li[i].getBoundingClientRect().x-2,li[i].getBoundingClientRect().y+50);
    //   let j = li[i].getAttribute('index');

    //   /* [ LEFT ] */
    //   if(lj[1] == '[object HTMLImageElement]' || lj[7] == '[object HTMLImageElement]' 
    //   || (lj[1] == '[object HTMLImageElement]' && lj[7] == '[object HTMLImageElement]')){
    //     block[j][1] = block[j][1];  block[j][0] +=2;
    //     li[i].style.margin = block[j][1]+'px 0 0 '+block[j][0]+'px';
    //   }

    //   /* [ RIGHT ] */
    //   if(lj[3] == '[object HTMLImageElement]' || lj[4] == '[object HTMLImageElement]' 
    //   || (lj[3] == '[object HTMLImageElement]' && lj[4] == '[object HTMLImageElement]')){
    //     block[j][1] = block[j][1];  block[j][0] -=2;
    //     li[i].style.margin = block[j][1]+'px 0 0 '+block[j][0]+'px';
    //   }

    //   /* [ TOP ] */
    //   if(lj[0] == '[object HTMLImageElement]' || lj[2] == '[object HTMLImageElement]' 
    //   || (lj[0] == '[object HTMLImageElement]' && lj[2] == '[object HTMLImageElement]')){
    //     block[j][1] +=2; block[j][0] = block[j][0];
    //     li[i].style.margin = block[j][1]+'px 0 0 '+block[j][0]+'px';
    //   }

    //   /* [ BOTTOM ] */
    //   if(lj[6] == '[object HTMLImageElement]' || lj[5] == '[object HTMLImageElement]' 
    //   || (lj[6] == '[object HTMLImageElement]' && lj[5] == '[object HTMLImageElement]')){
    //     block[j][1] -=2; block[j][0] = block[j][0];
    //     li[i].style.margin = block[j][1]+'px 0 0 '+block[j][0]+'px';
    //   }
    
    //   break;
    // }

  }
  window.scroll(sx,sy); u.style.margin = y+'px 0 0 '+x+'px';
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

  //document.getElementById('info').innerHTML = ' c: '+c+' d: '+d;

  if(c == 'KeyW'){ clearInterval(r); r = setInterval(() => { u.style.background = 'url(img/usr/0/'+n+'.png)'; (n<4) ? n++ : n = 0; }, 100); }
  if(c == 'KeyS'){ clearInterval(r); r = setInterval(() => { u.style.background = 'url(img/usr/1/'+n+'.png)'; (n<4) ? n++ : n = 0; }, 100); }
  if(c == 'KeyA'){ clearInterval(r); r = setInterval(() => { u.style.background = 'url(img/usr/2/'+n+'.png)'; (n<4) ? n++ : n = 0; }, 100); }
  if(c == 'KeyD'){ clearInterval(r); r = setInterval(() => { u.style.background = 'url(img/usr/3/'+n+'.png)'; (n<4) ? n++ : n = 0; }, 100); }

  if(c == 'KeyW' && d == 'KeyD' || d == 'KeyW' && c == 'KeyD'){ clearInterval(r); r = setInterval(() => { u.style.background = 'url(img/usr/5/'+n+'.png)'; (n<4) ? n++ : n = 0; }, 100); }
  if(c == 'KeyW' && d == 'KeyA' || d == 'KeyW' && c == 'KeyA'){ clearInterval(r); r = setInterval(() => { u.style.background = 'url(img/usr/4/'+n+'.png)'; (n<4) ? n++ : n = 0; }, 100); }
  if(c == 'KeyS' && d == 'KeyD' || d == 'KeyS' && c == 'KeyD'){ clearInterval(r); r = setInterval(() => { u.style.background = 'url(img/usr/7/'+n+'.png)'; (n<4) ? n++ : n = 0; }, 100); }
  if(c == 'KeyS' && d == 'KeyA' || d == 'KeyS' && c == 'KeyA'){ clearInterval(r); r = setInterval(() => { u.style.background = 'url(img/usr/6/'+n+'.png)'; (n<4) ? n++ : n = 0; }, 100); }
}

document.onclick = (e) => { u.style.background =
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


