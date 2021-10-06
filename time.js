// var date = new Date();

// var hours = date.getHours();
// var min = date.getMinutes();
// var sec = date.getSeconds();
// console.log(hours+":"+min + ":"+ sec);
 var box = document.querySelectorAll(".box");
 var hour = document.querySelector("#hour");
 var min = document.querySelector("#min");
 var sec = document.querySelector("#sec");
 var AM_PM = document.querySelector("#AM_PM");
 var click = document.querySelector("#sound");





 box.forEach((element)=>{
     element.onclick = ()=>{
         click.play();
     }
 })



 console.log(min.textContent);
 

setInterval(()=>{
    var date = new Date()
    var hours = date.getHours();
    var mins = date.getMinutes();
    var secs = date.getSeconds();
    
    if (hours < 12) {
        AM_PM.textContent = "AM";
    } else {
        AM_PM.textContent = "PM"
    }

    if(hours> 12){
      hours = hours -12;
    }

    if(secs<10){
        secs = "0" +secs;
    }
    if(mins<10){
        mins = "0" +mins;
    }
    if(hours<10){
        hours = "0" +hours;
    }
 

    hour.textContent = hours;
    min.textContent = mins;
    sec.textContent = secs;
      // console.log(hours+":"+min + ":"+ sec);
}, 1000);