const plus_list=document.querySelectorAll(".plus");
const p_list=document.querySelectorAll("main>p");

let plus_status=[0,0,0,0];
p_list.forEach((p)=>{
    p.style.display="none";
})
plus_list.forEach((plus,index)=>{
        plus.addEventListener('click',(e)=>{
            console.log(index);
            if(plus_status[index]==0){
                //change picture
                plus.src="./assets/images/icon-minus.svg"
                // p should be visible
                p_list[index].style.display="block";
                plus_status[index]=1;
            }else{
                p_list[index].style.display="none";
                plus.src="./assets/images/icon-plus.svg";
                plus_status[index]=0;
            }
        })
})
