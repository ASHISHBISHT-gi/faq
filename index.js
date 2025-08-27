const plus_list=document.querySelectorAll(".plus");
const p_list=document.querySelectorAll("main>p");

let plus_status=[0,0,0,0];
p_list.forEach((p)=>{
    // p.style.display="none";
    p.classList.toggle("sec");
})
plus_list.forEach((plus,index)=>{
        plus.addEventListener('click',(e)=>{
            console.log(index);
            if(plus_status[index]==0){
                //change picture
                plus.src="./assets/images/icon-minus.svg"
                // p should be visible
                // p_list[index].style.display="block";
                p_list[index].classList.toggle("sec");
                plus_status[index]=1;
                console.log("ps1",plus_status);
            }else{
                // p_list[index].style.display="none";
                p_list[index].classList.toggle("sec");
                plus.src="./assets/images/icon-plus.svg";
                plus_status[index]=0;
                console.log("ps2",plus_status);
            }
        })
})
