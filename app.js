const display=document.getElementById("display")
const button_set=document.querySelector("#buttons");
const btn_itm=document.querySelectorAll(".button-items");

btn_itm.forEach((i)=>{
    i.addEventListener("click",()=>{
        if(i.classList.contains("equal")){
            display.innerHTML=eval(display.innerHTML);
           
        }
        
        else{
                if(i.classList.contains("reset")){
                    display.innerHTML="";
                }else if(i.classList.contains("multiply")){
                    display.innerHTML+="*";

                }else if(i.classList.contains("power")){
                    display.innerHTML+="**";
                }
                else{
                    
                    display.innerHTML+=i.innerHTML; 
                }
            
        }
       
        
    })
})

