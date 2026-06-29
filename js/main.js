function updateClock(){

    const now=new Date();

    let h=now.getHours().toString().padStart(2,"0");
    let m=now.getMinutes().toString().padStart(2,"0");

    document.getElementById("clock").textContent=h+":"+m;

}

updateClock();

setInterval(updateClock,1000);

const startButton=document.getElementById("start");
const startMenu=document.getElementById("start-menu");

let opened=false;

startButton.onclick=()=>{

    opened=!opened;

    startMenu.style.display=opened?"block":"none";

};

document.addEventListener("click",(e)=>{

    if(
        !startMenu.contains(e.target) &&
        e.target!==startButton
    ){

        opened=false;

        startMenu.style.display="none";

    }

});
