mario=document.querySelector('.mario');
let j=0;
let b1=0;
let b=0,b2=0,b3=0;
let l=1;
let w1=0,w2=0,w3=0,w4=0,p=0;
let dy=parseInt(window.getComputedStyle(mario, null).getPropertyValue('bottom'));
let dx=parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'));
let fl=0,fr=1;
gameover=document.querySelector(".gameover");


c1=document.querySelector('.coin1');
c2=document.querySelector('.coin2');
c3=document.querySelector('.coin3');
c4=document.querySelector('.coin4');
c5=document.querySelector('.coin5');
c6=document.querySelector('.coin6');
c7=document.querySelector('.coin7');
c8=document.querySelector('.coin8');
c9=document.querySelector('.coin9');
c10=document.querySelector('.coin10');
c11=document.querySelector('.coin11');
c12=document.querySelector('.coin12');
c13=document.querySelector('.coin13');
c14=document.querySelector('.coin14');
c15=document.querySelector('.coin15');
c16=document.querySelector('.coin16');
c17=document.querySelector('.coin17');
c18=document.querySelector('.coin18');
c19=document.querySelector('.coin19');
c20=document.querySelector('.coin20');
c21=document.querySelector('.coin21');
c22=document.querySelector('.coin22');
c23=document.querySelector('.coin23');
c24=document.querySelector('.coin24');
c25=document.querySelector('.coin25');
c26=document.querySelector('.coin26');
c27=document.querySelector('.coin27');
c28=document.querySelector('.coin28');
c29=document.querySelector('.coin29');
c30=document.querySelector('.coin30');


let mushroom=document.querySelector('.mushroom');
let key=document.querySelector('.key');
let pipe=document.querySelector('.pipe');
let my=parseInt(window.getComputedStyle(mushroom, null).getPropertyValue('bottom'));
let ky=parseInt(window.getComputedStyle(key, null).getPropertyValue('bottom'));

let bullet=document.querySelector('.bullet');
let bx=parseInt(window.getComputedStyle(bullet, null).getPropertyValue('left'));
let by=parseInt(window.getComputedStyle(bullet, null).getPropertyValue('bottom'));
let fire=0,bxtemp;

let bulletl=document.querySelector('.bulletl');
let blx=parseInt(window.getComputedStyle(bulletl, null).getPropertyValue('left'));
let bly=parseInt(window.getComputedStyle(bulletl, null).getPropertyValue('bottom'));
let firel=0,blxtemp;

let crab1=document.querySelector('.crab1');
let c1x=parseInt(window.getComputedStyle(crab1, null).getPropertyValue('left'));
let crabalive1=1;
let crab2=document.querySelector('.crab2');
let c2x=parseInt(window.getComputedStyle(crab2, null).getPropertyValue('left'));
let crabalive2=1;

setInterval(()=>{
    dx=parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'))
    dy=parseInt(window.getComputedStyle(mario, null).getPropertyValue('bottom'))
   /* if(w1==0&&w2==0&&w3==0&&w4==0){
        l=1;
    }*/
    if((dx<420||(dx>520&&dx<620))&&l==1){
        b=1;
    }
    else{
        b=0;
    }
    if(dx<420&&dx>=300&&w1==1){
        b1=1;
    }
    else{
        b1=0;
    }
    if(dx>=1050&&dx<=1141&&l==1){
        b3=1;
    }
    else{
        b3=0;
    }
    
   document.onkeydown=function(e){
     if(e.keyCode==87 && j==0 && b==0&&b1==0&&b3==0&&w4==0&&w3==0){
         dy=dy+200;
         j=1;
     }
     if(e.keyCode==87 && j==0&&w4==1){
        dy=dy+100;
        j=1;
    }
    if(e.keyCode==87 && j==0&&w3==1){
        dy=dy+60;
        j=1;
    }
     if(e.keyCode==87 && j==0 && b==1){
        dy=dy+70;
        j=1;
    }
    if(e.keyCode==87 && j==0 && b1==1){
        dy=dy+70;
        j=1;
    }
    if(e.keyCode==87 && j==0 && b3==1){
        dy=dy+80;
        j=1;
    }
     if(e.keyCode==68&&((dx<800||dx>900)&&p==0||w4==1)){
         dx=dx+30;
         mario.style.backgroundImage="url('mario.png')";
         fr=1;fl=0;
     }
    
     if(e.keyCode==68&&p==1){
        dx=dx+30;
        mario.style.backgroundImage="url('mario.png')";
        fr=1;fl=0;
    }
     if(e.keyCode==65&&((dx<820||dx>970)&&p==0||w4==1)){
        dx=dx-30;
        mario.style.backgroundImage="url('mariol.png')";
        fr=0;fl=1;
    }
    if(e.keyCode==65&&p==1){
        dx=dx-30;
        mario.style.backgroundImage="url('mariol.png')";
        fr=0;fl=1;
    }
    // if(e.keyCode==65&&p==1){
    //     dx=dx-30;
    //     mario.style.backgroundImage="url('mariol.png')";
    // }
    if(e.keyCode==32&&mushroomb==2&&fire==0&&fr==1){
        bullet.style.opacity="1";
         bullet.style.bottom=(dy+20)+"px";
         bullet.style.left=(dx+20)+"px";
         fire=1;
         bx=dx+20; bxtemp=dx;
    }
    if(e.keyCode==32&&mushroomb==2&&firel==0&&fl==1){
        bulletl.style.opacity="1";
         bulletl.style.bottom=(dy+20)+"px";
         bulletl.style.left=(dx+20)+"px";
         firel=1;
         blx=dx-20; blxtemp=dx;
    }

     mario.style.bottom=dy+"px";
   mario.style.left=dx+"px";
   }
   
},200)

let keyb=0,mushroomb=0;

setInterval(()=>{
    if((dx>520&&dx<620)&&l==1&&mushroomb==0&&j==1){
        mushroomb=1;
        mushroom.style.opacity="1";
        mushroom.style.animation="movemushroom linear 2s";
    }
    if((dx>=1111&&dx<=1141)&&l==1&&keyb==0&&j==1){
        keyb=1;
        key.style.opacity="1";
        key.style.animation="movekey linear 2s";
    }
},200)


setInterval(()=>{
    dx=parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(mario, null).getPropertyValue('bottom'));
    ///pipe
    if(j==1&&dx>780&&dx<815){
        dy=140;
        dx=811;
        p=1;
        j=0;
        l=0;
    }
    if(j==1&&dx>=961&&dx<980){
        dy=140;
        p=1;
        j=0;
        l=0;
    }
    if(p==1&&(dx>961||dx<=810)){
        dy=28;
        p=0;
        l=1;
        j=0;
        console.log(w1,w2,w3,w4,l)
    }
    /////wall1
    console.log(dx,dy);
    if(dy==228&&dx>=389&&dx<=421){
        dy=228;
        j=0;
        w1=1;w2=0;w3=0;w4=0;l=0;
        console.log(w1,w2,w3,w4);
    }
    if(dx>420&&w1==1){
        dy=28;
        w1=0;w2=0;w3=0;w4=0;l=1;
        console.log(w1,w2,w3,w4);
    }
    //// wall2
    if(dy==428&&w1==1&&dx<=320&&dx>=290){
        dy=428;
        j=0; 
        w2=1;
        w1=0;w3=0;w4=0;l=0;
        console.log(w1,w2,w3,w4);
      }
      if(w2==1&& dx<=280){
        dy=dy-200;
        w2=0;w1=1;w3=0;w4=0;l=0;
        console.log(w1,w2,w3,w4);
       }
//wall4
if(dy==628&&w2==1&&dx>=680&&dx<720){
    dy=550;dx=711;
    j=0; 
    w4=1;
    w1=0;w3=0;w2=0;l=0;
    console.log(w1,w2,w3,w4);
  }
if(w4==1&&dx<710&&j==0){
          dy=428;
           w1=0;w2=1;w3=0;w4=0;l=0;
           console.log(w1,w2,w3,w4);
}
/////
       if(w2==1&& dx>715&&j==0){
           dy=28;
           w1=0;w2=0;w3=0;w4=0;l=1;
           console.log(w1,w2,w3,w4);
       }
    //// wall 3
    if(dy==628&&w2==1&&dx<=330&&dx>=310){
        dy=628;
        j=0; 
        w3=1;
        w1=0;w2=0;w4=0;l=0;
        console.log(w1,w2,w3,w4);
      }
      if(w3==1&& dx>=340){
        dy=428; 
        w2=1;
        w3=0;w4=0;w1=0;l=0;
        console.log(w1,w2,w3,w4);
       }
       if(w3==1&& dx<=10){
        dy=228; 
        w1=1;
        w3=0;w4=0;w2=0;l=0;
        console.log(w1,w2,w3,w4);
       }

    ////// wall4
   /* if(dy==628&&w2==1&&dx<=690&&dx>720){
        dy=500;
        j=0; 
        w4=1;
        w1=0;w2=0;w3=0;l=0;
        console.log(w1,w2,w3,w4);
      }*/
    ///jump
    if(j==1&&l==1){
        dy=28;
        j=0;
    }
    if(j==1&&w1==1){
        dy=228;
        j=0;
    }
    if(j==1&&w2==1){
        dy=428;j=0;
    }
    if(j==1&&w3==1){
        dy=628;j=0;
    }
    if(j==1&&w4==1){
        dy=550;j=0;
    }
    if(j==1&&p==1){
        dy=dy-200;j=0;
    }
   mario.style.bottom=dy+"px";
   mario.style.left=dx+"px";
},700)
let score=0;
setInterval(()=>{
    dy=parseInt(window.getComputedStyle(mario, null).getPropertyValue('bottom'));
    dx=parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'));
    my=parseInt(window.getComputedStyle(mushroom, null).getPropertyValue('bottom'));
    //console.log(w1)
    if(w1==0&&w2==0&&w3==0&&w4==0&&dx>=85&&dx<=115){
        score++;
        c1.style.opacity=0;
    }
    if(w1==0&&w2==0&&w3==0&&w4==0&&dx>=285&&dx<=315){
        score++;
        c2.style.opacity=0;
    }
    if(w1==0&&w2==0&&w3==0&&w4==0&&dx>=485&&dx<=515){
        score++;
        c3.style.opacity=0;
    }
    if(w1==0&&w2==0&&w3==0&&w4==0&&dx>=745&&dx<=775){
        score++;
        c4.style.opacity=0;
    }
    if(w1==0&&w2==0&&w3==0&&w4==0&&dx>=1185&&dx<=1215&&dy==228){
        score++;
        c5.style.opacity=0;
    }
    if(w1==0&&w2==0&&w3==0&&w4==0&&dx>=885&&dx<=915){
        score++;
        c6.style.opacity=0;
    }
    if(w1==1&&w2==0&&w3==0&&w4==0&&dx>=185&&dx<=215){
        score++;
        c7.style.opacity=0;
    }
    if(w1==1&&w2==0&&w3==0&&w4==0&&dx>=85&&dx<=115){
        score++;
        c8.style.opacity=0;
        
    }
    if(w1==1&&w2==0&&w3==0&&w4==0&&dx>=285&&dx<=315){
        score++;
        c10.style.opacity=0;
        
    }
    if(w1==1&&w2==0&&w3==0&&w4==0&&dx>=385&&dx<=415){
        score++;
        c15.style.opacity=0;
        
    }
    if(w1==1&&w2==0&&w3==0&&w4==0&&dx>=-5&&dx<=25){
        score++;
        c9.style.opacity=0;
        
    }
    if(w1==0&&w2==1&&w3==0&&w4==0&&dx>=385&&dx<=415){
        score++;
        c11.style.opacity=0;
       
    }
    if(w1==0&&w2==1&&w3==0&&w4==0&&dx>=485&&dx<=515){
        score++;
        c12.style.opacity=0;
        
    }
    if(w1==0&&w2==1&&w3==0&&w4==0&&dx>=585&&dx<=615){
        score++;
        c13.style.opacity=0;
        
    }
    if(w2==1&&dx>=685&&dx<=715){
        score++;
        c14.style.opacity=0; 
    }
    if(w3==1&&dx>=5&&dx<=95){
        score++;
        c16.style.opacity=0; 
    }
    if(w3==1&&dx>=145&&dx<=175){
        score++;
        c17.style.opacity=0; 
    }
    if(w3==1&&dx>=225&&dx<=255){
        score++;
        c18.style.opacity=0; 
    }
    if(w3==1&&dx>=305&&dx<=335){
        score++;
        c19.style.opacity=0; 
    }
    if(w4==1&&dx>=765&&dx<=795){
        score++;
        c20.style.opacity=0; 
    }
    if(w4==1&&dx>=845&&dx<=875){
        score++;
        c21.style.opacity=0; 
    }
    if(w4==1&&dx>=925&&dx<=955){
        score++;
        c22.style.opacity=0; 
    }
    if(w4==1&&dx>=1005&&dx<=1035){
        score++;
        c23.style.opacity=0; 
    }
    if(w4==1&&dx>=1085&&dx<=1115){
        score++;
        c24.style.opacity=0; 
    }
    if(w4==1&&dx>=1165&&dx<=1195){
        score++;
        c25.style.opacity=0; 
    }
    if(w4==1&&dx>=1245&&dx<=1275){
        score++;
        c26.style.opacity=0; 
    }
    if(w4==1&&dx>=1325&&dx<=1355){
        score++;
        c27.style.opacity=0; 
    }
    if(w4==1&&dx>=1405&&dx<=1435){
        score++;
        c28.style.opacity=0; 
    }
    if(w4==1&&dx>=1485&&dx<=1515){
        score++;
        c29.style.opacity=0; 
    }
    if(l==1&&dy==228&&dx>=1010&&dx<=1040){
        score++;
        c30.style.opacity=0; 
    }
    if(l==1&&mushroomb==1&&my==38&&dx>=640&&dx<670){
        mushroomb=2;
        alert("use space to fire bullet");
        mushroom.style.opacity="0";
    }
    if(l==1&&keyb==1&&ky==30&&dx>=1171&&dx<=1201){
        keyb=2;
        alert("use exit pipe to clear level");
        key.style.opacity="0";
        pipe.style.opacity="1";
    }
    if(l==1 && dx>1600&&keyb==2){
        gameover.innerHTML="Level Clear";
        gameover.style.opacity="1";
        mario.style.opacity="0";
        keyb=3;
    }
},100)

// document.onkeydown=function(f){
//     bx=dx;by=dy+20;
//     if(f.keyCode==32&&mushroomb==2){
//         bullet.style.opacity="1";
//          bullet.style.bottom=by+"px";
//          bullet.style.left=bx+"px";
//     }
// }


setInterval(()=>{
    
    if(fire==1&&bx<=bxtemp+500){
        bx=bx+5;
        //bullet.style.bottom=by+"px";
        bullet.style.left=bx+"px";
    }
    // else if(fire==1&&bx<=bxtemp+500&&fl==1){
    //     bx=bx-5;
    //     //bullet.style.bottom=by+"px";
    //     bullet.style.left=bx+"px";
    // }
    else{
        fire=0;
        bullet.style.opacity="0";
        bx=0;
    }

    
},15);

setInterval(()=>{
    
    if(firel==1&&blx>=blxtemp-500){
        blx=blx-5;
        //bullet.style.bottom=by+"px";
        bulletl.style.left=blx+"px";
    }
    // else if(fire==1&&bx<=bxtemp+500&&fl==1){
    //     bx=bx-5;
    //     //bullet.style.bottom=by+"px";
    //     bullet.style.left=bx+"px";
    // }
    else{
        firel=0;
        bulletl.style.opacity="0";
        blx=0;
    }

    
},15);


setInterval(()=>{
    c1x=parseInt(window.getComputedStyle(crab1, null).getPropertyValue('left'));
    c2x=parseInt(window.getComputedStyle(crab2, null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(mario, null).getPropertyValue('bottom'));
    dx=parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'));
    bly=parseInt(window.getComputedStyle(bulletl, null).getPropertyValue('bottom'));
    by=parseInt(window.getComputedStyle(bullet, null).getPropertyValue('bottom'));
    if(bx>=c1x&&bx<=c1x+10&&crabalive1==1&&by==48&&dx>850){
        fire=0;
        alert("killed");
        bullet.style.opacity="0";
        crab1.style.opacity="0";
        bx=0; crabalive1=0;
    }
    if(bx>=c2x-10&&bx<=c2x+10&&crabalive2==1&&dy==550){
        fire=0;
        alert("killed");
        bullet.style.opacity="0";
        crab2.style.opacity="0";
        bx=0; crabalive2=0;
    }
    if(blx>=c1x&&blx<=c1x+10&&crabalive1==1&&bly==48){
        firel=0;
        alert("killed");
        bulletl.style.opacity="0";
        crab1.style.opacity="0";
        blx=0; crabalive1=0;
    }
    if(blx>=c2x-10&&blx<=c2x+10&&crabalive2==1&&bly==550){
        firel=0;
        alert("killed");
        bulletl.style.opacity="0";
        crab2.style.opacity="0";
        blx=0; crabalive2=0;
    }

    if(crabalive1==1&&dx>=c1x-20&&dx<=c1x+20&&dy==28){
        gameover.style.opacity="1";
        mario.style.opacity="0";
        crabalive1=0;
        crab1.style.opacity="0";
    }
    if(crabalive2==1&&dx>=c2x-20&&dx<=c2x+20&&dy==550){
        gameover.style.opacity="1";
        mario.style.opacity="0";
        crabalive2=0;
        crab2.style.opacity="0";
    }
},15);