let compseq=[];
let userseq=[];

let btns=["red","blue","orange","pink"];

let level =0;
let start = false

let h4= document.querySelector('h4');

document.addEventListener('keypress',function(){
 if(start == false){
    console.log("Key was pressed")
    start=true;
    levelUp()
    randomColor();
}
})

function levelUp(){
    userseq=[];
    level++;
    h4.innerText=`Level ${level}`;

}

// GENERATE THE WHITE FLASH FOR A SECONF FROM COMPUTER SIDE
function compFlash(btn){
btn.classList.add("compflash")  //dekh yha classlist se color generate kiya haii kyuki agr aishi hi color generate krte too kese krte ,ishme btn se direct access krke usko compFlash class add krr dega or add krne pe hi ushe color assign krr dega
// ab color hata bhi haii hal ki hal
setTimeout(function(){
    btn.classList.remove("compflash")
},250)
}

function userFlash(btn){
btn.classList.add("userFlash")   
setTimeout(function(){
    btn.classList.remove("userFlash")
},200)
}

// GENERATE A RANDOM COMOR FROM WHICH FALSH IS GENERATED
function randomColor(){
    let randnum=Math.floor(Math.random()*3);
    let ranidx=btns[randnum];
    let rancolor=document.querySelector(`.${ranidx}`)

    compFlash(rancolor);
    compseq.push(ranidx);
}

// NOW CHECKING THE INDEXES ARE equal or not
function checkAns(idx){
    if(userseq[idx]===compseq[idx]){
        if(userseq.length-1==compseq.length-1){
            levelUp()
            setTimeout(randomColor,1000 ) 
        }
    }
    else{
        h4.innerHTML=`Game Over! Your Score is <b>${level}</b> <br> Press any key to restart the game `;
        document.querySelector('body').style.backgroundColor="red"
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor="white"
        },250)
     

            reset()
    }
}


// GENERATE THE GREEN COLOR WHEN CLCIK ANY BTN
function click(){
    
    let btn = this;
       userFlash(btn);
       let color = btn.getAttribute('id')
     userseq.push(color)
    console.log(userseq)
       //yha function ke andr function me parenthesis lagaya to pehle se hi print ho jayega
           checkAns(userseq.length-1)
 }

let but=document.querySelectorAll('.btn')
for(btn of but){
    btn.addEventListener('click',click)   // agr me yha pe clcick pe parenthesis laga rha hu to wo pwhwlw se hi charo color ke this generate krr de rha haii

}

function reset(){
    start = false;
    userseq=[];
    compseq=[];
    level=0;
    
}


