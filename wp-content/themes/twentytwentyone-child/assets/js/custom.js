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

//Hiding and showing header when scrolling down and up-------start----------
function initial(){
  if(window.pageYOffset < 98){
    document.getElementById("header").style.top = "0";
  }
}
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var screen_width = screen.width;
  var currentScrollPos = window.pageYOffset;
  if (screen_width > 650){
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
    var modal = $("#news-popup-overlay");
//news date part
    modal.find('h4').text($(this).find('h4').text());
//news category part
    modal.find('.news-category-group').empty();
    $(this).find('.news-category-group').clone().appendTo(modal.find('.news-category-group'));
//news tittle part
    modal.find('.news-header').text($(this).find('.news-article').text());
//news news content part
    modal.find('.news-article').text($(this).find('.news-content').text());
    modal.show();
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

//pagination ------------------start--------------------
  var curr_pagi_Num = 0;   //current pagination number
  var old_pagi_Num = 0;    //previous page number
  var curr_page = 0;  //current page number
  $('.page-num').click(function() {
    var btn_num = $(".page-num");
    curr_pagi_Num = $(this).index() - 1;
    curr_page = curr_page + (curr_pagi_Num - old_pagi_Num);
    console.log(curr_page);
    for (i = 0; i < btn_num.length; i++) {
      btn_num[i].className = btn_num[i].className.replace(" active", "");
    }  
    this.className += " active";
    old_pagi_Num = curr_pagi_Num;
    console.log(old_pagi_Num);
  })

  $('.page-next').click(function() {
    curr_page++;
    var btn_num = $(".page-num");
    curr_pagi_Num++;        
    if(curr_pagi_Num >= 5){
      for (i = 0; i < btn_num.length; i++) {
        btn_num[i].innerHTML = curr_page + i + 1;
      } 
      curr_pagi_Num -= 5;
    }
    btn_num[curr_pagi_Num].className += " active";
    btn_num[old_pagi_Num].className = btn_num[old_pagi_Num].className.replace(" active", "");
    old_pagi_Num = curr_pagi_Num;
  })

  $('.page-prev').click(function() {
    curr_page--;
    var btn_num = $(".page-num");
    curr_pagi_Num--;
    if(curr_pagi_Num < 0){
      if(curr_page < 0){
        curr_page++;
        curr_pagi_Num++;
        return;
      }
      for (i = 0; i < btn_num.length; i++) {
        btn_num[i].innerHTML = curr_page + i -3;
      } 
      curr_pagi_Num += 5;
    }
    btn_num[curr_pagi_Num].className += " active";
    btn_num[old_pagi_Num].className = btn_num[old_pagi_Num].className.replace(" active", "");
    old_pagi_Num = curr_pagi_Num;
  })
})