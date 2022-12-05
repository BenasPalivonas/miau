let buttonBye=document.getElementById("buttonbye");
let buttonHello=document.getElementById("buttonhello");
let buttonMarry=document.getElementById("buttonMarry");
let buttonNo=document.getElementById("buttonNo");
let mainDiv=document.getElementById("mainDiv");
let secondDiv=document.getElementById("secondDiv");
let thirdDiv=document.getElementById("thirdDiv");
let oldInt=0
buttonBye.addEventListener("click",()=>{
    window.alert("NIGGER WHAT ?????")
})

buttonMarry.addEventListener("click",()=>{
   secondDiv.style.display="none";
   thirdDiv.style.display="flex";
})

buttonHello.addEventListener("click",()=>{

mainDiv.style.display="none";
secondDiv.style.display="flex";
});

buttonNo.addEventListener("mouseover",()=>{
    // const currentTop=buttonNo.getBoundingClientRect().top;
    // const currentBottom=buttonNo.getBoundingClientRect().bottom;
    // const currentLeft=buttonNo.getBoundingClientRect().left;
    // const currentRight=buttonNo.getBoundingClientRect().right;
    let rndInt = Math.floor(Math.random() * 5) + 1;
   
    if(oldInt==rndInt){
        if(rndInt<5){
            rndInt++;
        }
        else{
            rndInt--;
        }
    }

    oldInt=rndInt;
    if(rndInt==1){
        buttonNo.style.left="300px";
        buttonNo.style.right="300px";
        buttonNo.style.top="150px";
        buttonNo.style.bottom="300px";
    }
    if(rndInt==2){
        buttonNo.style.left="-700px";
        buttonNo.style.right="-400px";
        buttonNo.style.top="150px";
        buttonNo.style.bottom="900px";
    }
    if(rndInt==3){
        buttonNo.style.left="-900px";
        buttonNo.style.right="-300px";
        buttonNo.style.top="-600px";
        buttonNo.style.bottom="300px";
    }
    if(rndInt==4){
        buttonNo.style.left="-500px";
        buttonNo.style.right="300px";
        buttonNo.style.top="-200px";
        buttonNo.style.bottom="-300px";
    }
    if(rndInt==5){
        buttonNo.style.left="350px";
        buttonNo.style.right="-300px";
        buttonNo.style.top="-500px";
        buttonNo.style.bottom="-300px";
    }
})