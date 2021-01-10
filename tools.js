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



