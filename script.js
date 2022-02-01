mario=document.querySelector('.mario');
let j=0;
let b1=0;
let b=0,b2=0;
let l=0;
let w1=0,w2=0,w3=0,w4=0,p=0;
let dy=parseInt(window.getComputedStyle(mario, null).getPropertyValue('bottom'));
let dx=parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'));




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


setInterval(()=>{
    dx=parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'))
   document.onkeydown=function(e){
     if(e.keyCode==87&&w1==0&&w2==0&&w3==0&&w4==0&&j==0&&(dx<420||(dx>530&&dx<620))){
        dy=dy+70;
        b=1;
        j=1;
    }
    if(e.keyCode==87&&j==0&&w1==1&&dx<420&&dx>=300){
        dy=dy+70;
        b=1;
        j=1;
    }
     if(e.keyCode==87&&j==0){
        dy=dy+200;
        j=1;
    }

  /*  if(w1==0&&w2==0&&w3==0&&w4==0){
        l=1;
    }
    else{
        l=0;
    }*/
      if(e.keyCode==68&&(dx<780||dx>970||p==1)&&w1==0&&w2==0&&w3==0&&w4==0){
        dx=dx+30;
        mario.style.backgroundImage="url('mario.png')";
       } 
       else if(e.keyCode==68&&l==0){
          dx=dx+30;
          mario.style.backgroundImage="url('mario.png')";
       }
       if(e.keyCode==65&&(dx<780||dx>970||p==1)&&w1==0&&w2==0&&w3==0&&w4==0){
        dx=dx-30;
        mario.style.backgroundImage="url('mariol.png')";
       } 
       else if(e.keyCode==65&&l==0){
          dx=dx-30;
          mario.style.backgroundImage="url('mariol.png')";
       }
       mario.style.left=dx+"px";
       mario.style.bottom=dy+"px";
   }
},200)

setInterval(()=>{
    dx=parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(mario, null).getPropertyValue('bottom'));
   if(dy==228&&dx<=420&&dx>=400){
     dy=228;
     j=0; 
     w1=1;
     console.log("yes");
   }
   ///pipe
   if(dy==228&&dx<=970&&dx>=790){
    dy=150;
    j=0; 
    p=1;
  }
   if(dy==428&&w1==1&&dx<=320&&dx>=300){
    dy=428;
    j=0; 
    w2=1;
    w1=0;w3=0;w4=0;
  }
  if(dy==628&&w2==1&&dx<=330&&dx>=310){
    dy=628;
    j=0; 
    w3=1;
    w1=0;w2=0;w4=0;
  }
  /*if(w2==1&&dy>=600&&dx<=730&&dx>=700){
    dy=564;
    j=0; 
    w4=1;
    w1=0;w2=0;w3=0;
  }*/
  if(w2==1&&dx>=710&&dx<720&&j==1){
      dy=300;
      dx=725;
      w4=1;
      j=0;
      w1=0;w2=0;w3=0;
  }

   if(w1==1&&w2==0&&w3==0&&w4==0&& dx>420){
       dy=dy-200;
       w1=0;
   }
   ///pipe
   if(p==1 && (dx<790||dx>970)){
    dy=28;
    p=0;
}
   if(w2==1&&w1==0&&w3==0&&w4==0&& dx>720){
       dy=dy-400;
       w2=0;
       w1=0;
       w3=0;
       w4=0;
       console.log(dx,dy)
   }
   if(w2==1&&w1==0&&w3==0&&w4==0&& dx<=300){
    dy=dy-200;
    w2=0;
    w1=1;
    w3=0;
    w4=0;
    //dx=770;
   }
   if(w3==1&&w1==0&&w2==0&&w4==0&& dx>330){
    dy=dy-200;
    w2=1;
    w3=0;w4=0;w1=0;
   }
   if(w3==1&&w1==0&&w2==0&&w4==0&& dx<20){
    dy=dy-400;
    w1=1;
    w3=0;w2=0;w4=0
   }
   if(w4==1&&w1==0&&w2==0&&w3==0&& dx<710){
    dy=428;
    w2=1;
    w4=0;w1=0;w3=0;
    console.log(dx,dy)
   }
    if(j==1&&b==0){
       dy=dy-200;
       j=0;
   }
   if(j==1&&b==1){
       dy=dy-70;
       j=0;
       b=0;
   }
   mario.style.bottom=dy+"px";
   mario.style.left=dx+"px";
},700)
let score=0;
setInterval(()=>{
    dy=parseInt(window.getComputedStyle(mario, null).getPropertyValue('bottom'));
    dx=parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'));
    console.log(w1)
    if(w1==0&&w2==0&&w3==0&&w4==0&&dx>=80&&dx<=110){
        score++;
        c1.style.opacity=0;
    }
    if(w1==0&&w2==0&&w3==0&&w4==0&&dx>=280&&dx<=310){
        score++;
        c2.style.opacity=0;
    }
    if(w1==0&&w2==0&&w3==0&&w4==0&&dx>=480&&dx<=510){
        score++;
        c3.style.opacity=0;
    }
    if(w1==0&&w2==0&&w3==0&&w4==0&&dx>=740&&dx<=770){
        score++;
        c4.style.opacity=0;
    }
    if(w1==0&&w2==0&&w3==0&&w4==0&&dx>=1180&&dx<=1210&&dy==228){
        score++;
        c5.style.opacity=0;
    }
    if(w1==0&&w2==0&&w3==0&&w4==0&&dx>=890&&dx<=920&&dy==228){
        score++;
        c6.style.opacity=0;
    }
    if(w1==1&&w2==0&&w3==0&&w4==0&&dx>=180&&dx<=210){
        score++;
        c7.style.opacity=0;
    }
    if(w1==1&&w2==0&&w3==0&&w4==0&&dx>=80&&dx<=110){
        score++;
        c8.style.opacity=0;
        
    }
    if(w1==1&&w2==0&&w3==0&&w4==0&&dx>=280&&dx<=310){
        score++;
        c10.style.opacity=0;
        
    }
    if(w1==1&&w2==0&&w3==0&&w4==0&&dx>=380&&dx<=410){
        score++;
        c15.style.opacity=0;
        
    }
    if(w1==1&&w2==0&&w3==0&&w4==0&&dx>=-10&&dx<=20){
        score++;
        c9.style.opacity=0;
        
    }
    if(w1==0&&w2==1&&w3==0&&w4==0&&dx>=490&&dx<=520){
        score++;
        c9.style.opacity=0;
       
    }
    if(w1==0&&w2==1&&w3==0&&w4==0&&dx>=390&&dx<=420){
        score++;
        c9.style.opacity=0;
        
    }
    if(w1==0&&w2==1&&w3==0&&w4==0&&dx>=590&&dx<=620){
        score++;
        c9.style.opacity=0;
        
    }
    if(w1==0&&w2==1&&w3==0&&w4==0&&dx>=690&&dx<=720){
        score++;
        c9.style.opacity=0;
        
    }
},100)