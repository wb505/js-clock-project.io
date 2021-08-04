
setInterval(() => {
  
  var hour = document.querySelector('.hour');
  var minute = document.querySelector('.minute');
  var second = document.querySelector('.second');
  
  
  
  d = new Date();
  
  htime = d.getHours();
  mtime = d.getMinutes();
  stime = d.getSeconds();
  console.log(stime);
  console.log(mtime);
  hrot = 30 * htime + mtime/2;
  mrot = 6 * mtime;
  srot = 6 * stime;
  
  hour.style.transform = `rotate(${hrot}deg)`;
  minute.style.transform = `rotate(${mrot}deg)`;
  second.style.transform = `rotate(${srot}deg)`;
  

  
  
},1000);



  //====digital clock====

/*
setInterval(() =>{
  let dh = document.querySelector(".d-h");
  let dm = document.querySelector(".d-m");
  let ds = document.querySelector(".d-s");
   
  d = new Date();
  let dt = d.toLocaleTimeString();
let  h = dt.getHours();
let  m = dt.getMinutes();
let  s = dt.getSeconds();
   
  dh.innerHTML = h;
  dm.innerHTML = m;
  ds.innerHTML = s;
},1000
);*/


  //====digital clock====

const clock = () => {
  let dh = document.querySelector(".d-h");
  let dm = document.querySelector(".d-m");
  let ds = document.querySelector(".d-s");
  let ampm = document.querySelector(".ampm");
  
  
 let d = new Date();
 
  let  h = d.getHours();
  let  m = d.getMinutes();
  let  s = d.getSeconds();
   var am ="AM"
   
   if(h > 12){
      h = h - 12;
      am = "PM";
   }
   
   if(h < 10){
     h = '0' + h;
   }
   
   if(m < 10){
     m = '0' + m;
     
   }
   
   if(s < 10){
     s = '0' + s;
   }
   
   
  
  dh.innerHTML = h;
  dm.innerHTML = m;
  ds.innerHTML = s;
  ampm.innerHTML = am;
};

setInterval(clock,1000);