  let gameSeq=[];
  let userSeq=[];

  let started = false;
  let level = 0;
  let highest =0;
  let h2 = document.querySelector("h2");
  let col = ["red","green","purple","yellow"];


  document.addEventListener("keypress",function(event){
     if(event.code== "Space" && started==false){
        console.log("game is started");
        started = true;
        levelup();
     
     }

     
  })


  function levelup(){
userSeq =[];
level++;
h2.innerText = `Level = ${level}`;

let randonnum = Math.floor(Math.random()*4);
let randomcol = col[randonnum];
gameSeq.push(randomcol);
console.log(gameSeq);

let randbtn = document.querySelector(`.${randomcol}`);
btnflash(randbtn);

  }

  function btnflash(btn){
   btn.classList.add("flash");
   setTimeout(function(){
    btn.classList.remove("flash");
   },100);
  }

  let allbtn = document.querySelectorAll(".btn");

  function btnpress(){
    let btn = this;
    if(started==true){
    btnflash(btn);}
    userSeq.push(btn.getAttribute("id"));
    
    check(userSeq.length-1);
  }

  for(allbtn of allbtn){
    allbtn.addEventListener("click",btnpress);
  }
  

  function check(idx){
    
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        if(level > highest){
            highest=level;
        }
        h2.innerHTML =`GAME OVER! Your score:${level} <br>Press space to restart</br> Highest Score:${highest}`;
        if(started == true){
        document.querySelector("body").classList.add("wrong");
        setTimeout(function(){
            document.querySelector("body").classList.remove("wrong");

        },100);}
        reset();
       
    }
  }
  function reset(){
    userSeq=[];
    gameSeq = [];
    level =0;
    started = false;
  }
