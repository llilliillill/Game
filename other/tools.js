/* [ MOUSEMARCER ] */
// document.body.onclick = (e) => {
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
// for(let i=0; i<50; i++){
//   (e.pageX>p[0] ? x1+=10 : x1-=10 ); y1=(k*x1);
//   if(y1>-500 && y1<500){ 
//     marker((x1+p[0]),(y1+p[1]),'black');
//     let w = document.elementFromPoint((x1+p[0]),(y1+p[1]));
//   }
// }



/* [ ONMOUSEMOVE ] */
// document.onmousemove = (e) => {
//   document.getElementById('info').innerHTML = 'x: '+e.pageX+' y: '+e.pageY;
// }






/* [ ... ] */


/* [ ... ] */
// function bot_fire(){
//   /* [ ... ] */
//   audio('pistol/0');

//   for(let i=0; i<v[0].length; i++){
//     if(u[2]>0){

//     let x1 = 0, y1 = 0,
//     k = ((y+25)-(v[0][i][1]+25))/((x+25)-(v[0][i][0]+25));

//     let b = document.createElement('div');
//     b.style.margin = (v[0][i][1]+25)+'px 0 0 '+(v[0][i][0]+25)+'px';
//     b.style.width = '2px';
//     b.style.height = '2px';
//     b.style.zIndex = -1;
//     b.style.position = 'absolute';
//     b.style.background = 'red';
//     document.body.append(b);
    
//     let z = setInterval(() => {
//       ((x+25)>(v[0][i][0]+25) ? x1+=10 : x1-=10 ); y1=(k*x1);
//       if(y1>-500 && y1<500){ 
        
//         b.style.margin = (y1+(v[0][i][1]+25))+'px 0 0 '+(x1+(v[0][i][0]+25))+'px';
        
//         let w = document.elementFromPoint(b.getBoundingClientRect().x, b.getBoundingClientRect().y);

//         /* [ ... ] */
//         if(b.getBoundingClientRect().x<50){   b.remove(); } 
//         if(b.getBoundingClientRect().y<50){   b.remove(); } 
//         if(b.getBoundingClientRect().x>1998){ b.remove(); } 
//         if(b.getBoundingClientRect().y>1998){ b.remove(); } 

//         /* [ VRAG ] */
//         if(w.classList == 'user'){ 
//           document.getElementById('zdorove').style.display = 'block'; 
//           u[2]-=5;
//           document.getElementById('shkala').style.width = u[2]+'px';

//           if(u[2]>37.5){  
//             document.getElementById('shkala').style.background = 'greenyellow';
//           } else if(u[2]>25){
//             document.getElementById('shkala').style.background = 'yellow';
//           } else if(u[2]>12.5){
//             document.getElementById('shkala').style.background = 'orange';
//           } else if(u[2]>0){
//             document.getElementById('shkala').style.background = 'red';
//           } else if(u[2]==0){
//             w.style.display = 'none';
//           }

//           b.remove(); 
//         }

//         /* [ WALL ] */
//         if(w.classList == 'wall' || w.classList == 'block'){ 
//           b.remove(); 
//         }
//       }
//     },10);
//     setTimeout(() => { clearInterval(z); b.remove(); },3000);
//     } else { clearInterval(inter); }
//   }
// } 

// let inter = setInterval(() => { bot_fire(); },1000);


// function run(){
//     let a = setInterval(() => {
//       for(let i=0; i<v[0].length; i++){
        
//         v[3][i][0] = document.elementFromPoint(v[2][i].getBoundingClientRect().x-2, v[2][i].getBoundingClientRect().y);
//         v[3][i][1] = document.elementFromPoint(v[2][i].getBoundingClientRect().x,   v[2][i].getBoundingClientRect().y-2);
//         v[3][i][2] = document.elementFromPoint(v[2][i].getBoundingClientRect().x+50,v[2][i].getBoundingClientRect().y-2);
//         v[3][i][3] = document.elementFromPoint(v[2][i].getBoundingClientRect().x+52,v[2][i].getBoundingClientRect().y);
//         v[3][i][4] = document.elementFromPoint(v[2][i].getBoundingClientRect().x+52,v[2][i].getBoundingClientRect().y+50);
//         v[3][i][5] = document.elementFromPoint(v[2][i].getBoundingClientRect().x+50,v[2][i].getBoundingClientRect().y+52);
//         v[3][i][6] = document.elementFromPoint(v[2][i].getBoundingClientRect().x,   v[2][i].getBoundingClientRect().y+52);
//         v[3][i][7] = document.elementFromPoint(v[2][i].getBoundingClientRect().x-2, v[2][i].getBoundingClientRect().y+50);

//         /* [ ... ] */
//         if(v[0][i][0]<50){v[0][i][0]+=2;} if(v[0][i][0]>1998){v[0][i][0]-=2;}
//         if(v[0][i][1]<50){v[0][i][1]+=2;} if(v[0][i][1]>1998){v[0][i][1]-=2;}

//         for(let j=0; j<v[3][i].length; j++){

//           /* [ AMMO ] */
//           if(v[3][i][j].classList == 'ammo'){
//             accoutrement(parseInt(v[3][i][j].getAttribute('x')), parseInt(v[3][i][j].getAttribute('y')),'ammo');
//             v[3][i][j].remove();

//             /* [ ... ] */
//             audio('pistol/2'); break;
//           }

//           /* [ MEDIC ] */
//           if(v[3][i][j].classList == 'medic'){
//             accoutrement(parseInt(v[3][i][j].getAttribute('x')), parseInt(v[3][i][j].getAttribute('y')),'medic');
//             v[3][i][j].remove();

//             /* [ ... ] */
//             v[5][i] = 50;
//             document.getElementsByClassName('shkala')[i].style.background = 'greenyellow';
//             document.getElementsByClassName('shkala')[i].style.width = v[5][i]+'px';
//             audio('star'); break;
//           }

//           /* [ WALL ] */
//           if(v[3][i][j].classList == 'wall'){
//             if(i == 0 || i == 7){ v[0][i][0]+=2; }
//             if(i == 3 || i == 4){ v[0][i][0]-=2; }
//             if(i == 1 || i == 2){ v[0][i][1]+=2; }
//             if(i == 6 || i == 5){ v[0][i][1]-=2; }
//             break;
//           }

//           /* [ BLOCK ] */
//           // if(v[3][i][j].classList == 'block'){
//           //   //let z = v[3][i][j].getAttribute('index');

//           //   /* [ ... ] */
//           //   document.getElementById('info').innerHTML = v[3][i][j];

//           //   if(i == 0 || i == 7){ v[2][i].style.borderLeft   = '1px solid blue'; }
//           //   if(i == 3 || i == 4){ v[2][i].style.borderRight  = '1px solid blue'; }
//           //   if(i == 1 || i == 2){ v[2][i].style.borderTop    = '1px solid blue'; }
//           //   if(i == 6 || i == 5){ v[2][i].style.borderBottom = '1px solid blue'; }
//           //   // v[3][i][j].style.margin = block[z][1]+'px 0 0 '+block[z][0]+'px';  
//           //   break;
//           // }
//         }

//         if(v[1][1]){
//           v[0][i][0]+=2;
//           v[0][i][1]-=2;
//           v[2][i].style.margin = v[0][i][1]+'px 0 0 '
//                                 +v[0][i][0]+'px';
//           v[2][i].style.background = 'url(img/usr/5/'+v[1][0]+'.png)';
//           (v[1][0]<4) ? v[1][0]++ : v[1][0] = 0;
//         } else {
//           v[0][i][0]-=2;
//           v[0][i][1]+=2;
//           v[2][i].style.margin = v[0][i][1]+'px 0 0 '
//                                 +v[0][i][0]+'px';
//           v[2][i].style.background = 'url(img/usr/6/'+v[1][0]+'.png)';
//           (v[1][0]<4) ? v[1][0]++ : v[1][0] = 0;
//         }

//       }
//     }, 80);

//     setTimeout(() => {
//       clearInterval(a);
//       for(let i=0; i<v[0].length; i++){
//         v[2][i].style.background = 'url(img/usr/1/'+v[1][0]+'.png)';
//       }
//       v[1][1] = (v[1][1]) ? v[1][1] = 0 : v[1][1] = 1; run();
//     }, 5000);

// } run();