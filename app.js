const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
const home = document.querySelector(".sidebar-home");
const main_body = document.querySelector(".clock-logo");

home.addEventListener("click",function(){
  location.href='./index.html'
})


toggleBtn.addEventListener("click", function () {
  // if (sidebar.classList.contains("show-sidebar")) {
  //   sidebar.classList.remove("show-sidebar");
  // } else {
  //   sidebar.classList.add("show-sidebar");
  // }
  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

function showTime(evt, cityName) {
  var i, clock, linkbtn;
  clock = document.getElementsByClassName("jsc");
  for (i = 0; i < clock.length; i++) {
    clock[i].style.display = "none";
  }
  linkbtn = document.getElementsByClassName("linkbtn");
  for (i = 0; i <linkbtn.length; i++) {
    linkbtn[i].className = linkbtn[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
  const def = document.getElementById("default");
  sidebar.style.display='block';
}
document.getElementById("default").click();

// Driver Code for based on india time

function clock(countryhour,countrymin,countryutc){
  var date=new Date();
  var hour=date.getHours();
  var minute=date.getMinutes();
  var second=date.getSeconds();
  var section="AM";
  hour=hour+countryhour;
  minute=minute+countrymin;
  if(minute>60){
      minute=minute-60;
      hour=hour+1;
  }
  if(minute<0){
      minute=60+(minute);
      hour=hour-1;
  }
  if(hour==12){
      if(countryutc==true){
          section="PM";
      }
      else{
          section="AM";
      }
  }
  if(hour<=11){
      if(countryutc==true){
          section="AM";
      }
      else{
          section="PM";
      }
      //section="AM";
      if(hour==0){
          hour=12;
      }
      else if(hour<10){
          hour="0"+hour;
      }
  }
  if(hour>12){
      if(countryutc==true){
          section="PM";
      }
      else{
          section="AM";
      }
      //section="PM";
      hour=hour-12;
      if(hour<10){
          hour="0"+hour;
      }
  }
  if(minute<10){
      minute="0"+minute;
  }
  if(second<10){
      second="0"+second;
  }
  var time=hour+":"+minute+":"+second+" "+section;
  return time;
}
//india function
function india(){
  document.getElementById("india1").innerHTML=clock(0,0,true);
  setTimeout(india,1000);
  
}
india();

// london function

function london(){
  document.getElementById("london1").innerHTML=clock(-4,-30,true);
  setTimeout(london,1000);
  
}
london();

// mexico function

function mexico(){
  document.getElementById("mexico1").innerHTML=clock(1,30,false);
  setTimeout(mexico,1000);
  
}
mexico();


//New-York function

function newyork(){
  document.getElementById("newyork1").innerHTML=clock(2,30,false);
  setTimeout(newyork,1000);
  
}
newyork();

//  canada function

function canada(){
  document.getElementById("canada1").innerHTML=clock(2,30,false);
  setTimeout(canada,1000);
  
}
canada();


//  dhaka function


function dhaka(){
  document.getElementById("dhaka1").innerHTML=clock(0,30,true);
  setTimeout(dhaka,1000);
  
}
dhaka();


//   srilanka function


function srilanka(){
  document.getElementById("srilanka1").innerHTML=clock(0,0,true);
  setTimeout(srilanka,1000);
  
}
srilanka();


//  germany function


function germany(){
  document.getElementById("germany1").innerHTML=clock(-3,-30,true);
  setTimeout(germany,1000);
  
}
germany();


//  Pakistan function


function pakistan(){
  document.getElementById("pakistan1").innerHTML=clock(0,-30,true);
  setTimeout(pakistan,1000);
  
}
pakistan();


//  Tokyo function


function tokyo(){
  document.getElementById("tokyo1").innerHTML=clock(3,30,true);
  setTimeout(tokyo,1000);
  
}
tokyo();


//  Hong-Kong function


function hongkong(){
  document.getElementById("hongkong1").innerHTML=clock(2,30,true);
  setTimeout(hongkong,1000);
  
}
hongkong();


//   France Function


function france(){
  document.getElementById("france1").innerHTML=clock(-3,-30,true);
  setTimeout(france,1000);
  
}
france();


//  New-Zealand Function


function newzealand(){
  document.getElementById("newzealand1").innerHTML=clock(6,30,true);
  setTimeout(newzealand,1000);
  
}
newzealand();


const link_btn = document.querySelectorAll(".linkbtn");
const logo = document.getElementsByClassName("clock-logo");

for(var i=0;i<link_btn.length;i++){
  link_btn[i].addEventListener("click",function(){
    sidebar.classList.toggle("show-sidebar")
  })
}

const clock_btn =  document.querySelectorAll(".clock");

for(var i=0;i<clock_btn.length;i++){
  clock_btn[i].addEventListener("click",function(){
    sidebar.classList.toggle("show-sidebar")
  })
}


