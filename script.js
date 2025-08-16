let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".resetbtn");
let newbtn1=document.getElementById("newbtn");
let msg=document.getElementById("checkwinning");
let msgcontainer=document.querySelector(".msg-container");
let turn0= true; //playerx,player0
let winnerpattern=[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
];
const resetbtn1=()=>{
 turn0= true;
 enablebox();
 msgcontainer.classList.add("hiding");
};
boxes.forEach((box)=>{
box.addEventListener("click", ()=>{
    if(turn0){
        box.innerHTML='0';
        turn0=false;
    }else{
        box.innerHTML='x';
        turn0=true;
    }
    box.disabled='true';
    checkwiner();
});
});
const disablebox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enablebox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText='';
    }
}
const showwinner=(win)=>{
msg.innerText=`congratulation, Winner is ${win}`;
msgcontainer.classList.remove("hiding");
disablebox();
};
const checkwiner=()=>{
for(let pattern of winnerpattern){
   let pos1val=boxes[pattern[0]].innerText;
   let pos2val=boxes[pattern[1]].innerText;
   let pos3val=boxes[pattern[2]].innerText;

   if(pos1val !="" && pos2val !="" && pos3val !=""){
    if(pos1val === pos2val && pos2val === pos3val){
       
       showwinner(pos1val);
    }
   }

}
};
newbtn1.addEventListener("click",resetbtn1)
resetbtn.addEventListener("click",resetbtn1)
