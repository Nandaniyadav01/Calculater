let btns=document.querySelectorAll(".btn");
let display=document.querySelector(".dis");
for(let btn of btns){
   btn.addEventListener("click",()=>{
      display.value+=btn.value;  
   });
}
let acbtn=document.querySelector(".ac");
let de=document.querySelector(".de");

acbtn.addEventListener("click",()=>{
    display.value="";
});
de.addEventListener("click",()=>{
    display.value=display.value.toString().slice(0,-1);
});

let equal=document.querySelector(".equal");

equal.addEventListener("click",()=>{
    display.value=eval(display.value);
});
