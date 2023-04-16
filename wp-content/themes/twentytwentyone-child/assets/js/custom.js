//Usecase Tab bar start-----------------

function openUsecase(evt, usecaseName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  if(usecaseName == "usecase1"){
    document.getElementById(usecaseName).style.backgroundColor = "#087AC9";
    if(window.innerWidth < 650){
      document.getElementsByClassName('tab1')[0].style.width = "193px";
      document.getElementsByClassName('tab1')[0].childNodes[0].style.display = "inline";
      document.getElementsByClassName('tab2')[0].style.width = "71px";
      document.getElementsByClassName('tab2')[0].childNodes[0].style.display = "none";
      document.getElementsByClassName('tab3')[0].style.width = "71px";
      document.getElementsByClassName('tab3')[0].childNodes[0].style.display = "none";
    }
  }
  if(usecaseName == "usecase2"){
      document.getElementById(usecaseName).style.backgroundColor = "#3CA1E1";
    if(window.innerWidth < 650){
      document.getElementsByClassName('tab1')[0].style.width = "71px";
      document.getElementsByClassName('tab1')[0].childNodes[0].style.display = "none";
      document.getElementsByClassName('tab2')[0].style.width = "193px";
      document.getElementsByClassName('tab2')[0].childNodes[0].style.display = "inline";
      document.getElementsByClassName('tab3')[0].style.width = "71px";
      document.getElementsByClassName('tab3')[0].childNodes[0].style.display = "none";
    }
  }
  if(usecaseName == "usecase3"){
      document.getElementById(usecaseName).style.backgroundColor = "#59BAF0";
    if(window.innerWidth < 650){
      document.getElementsByClassName('tab1')[0].style.width = "71px";
      document.getElementsByClassName('tab1')[0].childNodes[0].style.display = "none";
      document.getElementsByClassName('tab2')[0].style.width = "71px";
      document.getElementsByClassName('tab2')[0].childNodes[0].style.display = "none";
      document.getElementsByClassName('tab3')[0].style.width = "193px";
      document.getElementsByClassName('tab3')[0].childNodes[0].style.display = "inline";
    }
  }
  tablinks = document.getElementsByClassName("tabs-button");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  var targetcontent = document.getElementById(usecaseName);
  targetcontent.style.display = "flex";  
  evt.currentTarget.className += " active";
}

function initial(){
  if(window.pageYOffset < 98){
    document.getElementById("header").style.top = "0";
  }
}

//Hiding and showing header when scrolling down and up-------start----------
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var screen_width = screen.width;
  var currentScrollPos = window.pageYOffset;
  if (screen_width > 650){
    console.log(screen_width);
    console.log(screen_width);
    if (currentScrollPos < 10) {
      document.getElementById("header").style.top = "0";
    } else {
      document.getElementById("header").style.top = "-98px";
    }
  }
  prevScrollpos = currentScrollPos;
}

function headerVisible(event){
  let y = event.clientY;
  if(screen.width > 650){
    if(y < 98){
      document.getElementById("header").style.top = "0";
    }
    else{
      if(prevScrollpos > 2){
        console.log("cursor test");
        document.getElementById("header").style.top = "-98px";
      }
    }
  }
}
//Hiding and showing header when scrolling down and up-------end----------

function navFuc(){
  var x = document.getElementById("header");
  if (x.className === "header") {
    x.className += " responsive";
  }
}

function navClose(){
  var x = document.getElementById("header");
  if (x.className === "header responsive") {
    x.className = "header";
  }
}

function forResponsive(){
  var x = document.getElementById("header");
  x.className = "header";
}

$(document).ready(function(){

  // When the user clicks the button, open the modal 
  $(".news-category").click(function() {
    $("#news-popup-overlay")[0].style.display = "block";
    $("body").css('overflow', "hidden");
  });
  
  // When the user clicks on <span> (x), close the modal
  $(".popup-close").click(function() {
    $("#news-popup-overlay")[0].style.display = "none";
    $("body").css('overflow', "auto");
  });

  // When the user clicks anywhere outside of the modal, close it
  $(window).click(function(event) {
    if (event.target.className == "news-popup-overlay") {
      $("#news-popup-overlay")[0].style.display = "none";
      $("body").css('overflow', "auto");
    }
  })

//News Popup End----------------------
})