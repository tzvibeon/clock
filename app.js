
let clock=document.querySelector(".clock");
let timeCheck=()=>{
    

let now=new Date();
let hour=now.getHours();
let hrFormat=hour%12;
let AmOrPm = hour >= 12 ? 'PM' : 'AM';
let min=now.getMinutes();
let sec =now.getSeconds();
 clock.innerHTML=`
 <div class="col-md-3" offset-md-1">
  <div class="card-group">
    <div class="card border-success " style="max-width: 18rem;">
               <div class="card-header">Current Time</div>
               <div class="card-body text-success">
               <p class="card-title">${hrFormat} : ${min} : ${sec} ${AmOrPm}</p>
             
    </div>
 </div>
 </div>
 `

};
setInterval(timeCheck,1000);