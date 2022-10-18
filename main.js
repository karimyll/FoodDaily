function clock(){
   let date = new Date();
   let h = date.getHours();
   let m = date.getMinutes();

   if(m < 10){
    let m = "0" + m;
   }

   let time = h + ":" + m
   document.getElementById("clock").innerHTML = time

 setTimeout(clock, 1000)
}
clock();