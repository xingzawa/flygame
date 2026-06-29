function updateClock(){

    const now=new Date();

    let h=now.getHours().toString().padStart(2,"0");
    let m=now.getMinutes().toString().padStart(2,"0");

    document.getElementById("clock").textContent=h+":"+m;

}

updateClock();

setInterval(updateClock,1000);
