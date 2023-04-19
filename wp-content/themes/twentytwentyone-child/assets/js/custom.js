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
  
//contactus verify button click event
  $('#contactus-sending').click(function(){
    $('#contactus-popup-overlay').hide();
    var modal = $("#contactus-verify-overlay");
    modal.show();
    $("body").css('overflow', "hidden");
  })

//contactus modify button click event
  $('.contactus-modify').click(function(){
    $('#contactus-popup-overlay').hide();
    $("body").css('overflow', "auto");
  })

// When the user clicks on <span> (x), close the modal
  $(".popup-close").click(function() {
    $("#news-popup-overlay")[0].style.display = "none";
    $("#contactus-popup-overlay")[0].style.display = "none";
    $("#contactus-verify-overlay")[0].style.display = "none";
    $("body").css('overflow', "auto");
  });

// When the user clicks anywhere outside of the modal, close it
  $(window).click(function(event) {
    if (event.target.className == "news-popup-overlay") {
      $("#news-popup-overlay")[0].style.display = "none";
      $("body").css('overflow', "auto");
    }
    if (event.target.className == "contactus-popup-overlay") {
      $("#contactus-popup-overlay")[0].style.display = "none";
      $("body").css('overflow', "auto");
    }
    if (event.target.className == "contactus-verify-overlay") {
      $("#contactus-verify-overlay")[0].style.display = "none";
      $("body").css('overflow', "auto");
    }
  })

//News Popup End----------------------

//news pagination start-------------------
  var article_num = $('.news-category').length;
  var display_num = 6;
  $(".news-page-content .news-category").slice(display_num).hide();
  $('#news-pagination').pagination({
      // Total number of items present
      // in wrapper class
      items: article_num,
  
      // Items allowed on a single page
      itemsOnPage: display_num, 
      onPageClick: function (noofele) {
          $(".news-page-content .news-category").hide()
              .slice(display_num * (noofele - 1),
              display_num + display_num * (noofele - 1)).show();
      }
  });
  //news pagination end-------------------

  //checkbox start------------------------

  //checkbox end--------------------------

  //Contact us Validation start-----------
  $("#contact-by-email").prop('checked', true);
  $("#contact-by-phone").prop('checked', true);
  var valid_status = 1;
  $('#contact-detail').click(function(){  //indetail button
    if($("#inquiry-phonenumber").val() == ""){
      $(".phonenumber-error").show();
      $("#inquiry-phonenumber").focus();
      valid_status = 0;
    }

    if($("#inquiry-email").val() == ""){
      $(".email-error").text("このフイールドを入力してください");
      $(".email-error").show();
      $("#inquiry-email").focus();
      valid_status = 0;
    } else{
      var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if(!regex.test($("#inquiry-email").val())){
        $(".email-error").text("「@」を含むメールアドレスを入力してください");
        $(".email-error").show();
        $("#inquiry-email").focus();
        alid_status = 0;
      } else{
        $(".email-error").hide();
      }
    }

    if($("#inquiry-name").val() == ""){
      $(".user-name-error").show();
      $("#inquiry-name").focus();
      valid_status = 0;
    }

    if($("#comp-name-input").val() == ""){
      $(".comp-name-error").show();
      $("#comp-name-input").focus();
      valid_status = 0;
    }

    if(valid_status != 100){
      console.log($("#inquiry-email").val())
      var modal = $("#contactus-popup-overlay");
      modal.find('.popup-inquire-qurpose').text($(".inquiry-purpose select").children("option:selected").val());
      modal.find('.popup-company-name').text($("#comp-name-input").val());
      modal.find('.popup-user-name').text($("#inquiry-name").val());
      modal.find('.popup-user-email').text($("#inquiry-email").val());
      if($('#contact-by-phone').is(":checked")){
        modal.find('.popup-phone-method').show();
      } else{
        modal.find('.popup-phone-method').hide();
      }
      if($('#contact-by-email').is(":checked")){
        modal.find('.popup-email-method').show();
      } else{
        modal.find('.popup-email-method').hide();
      }
      modal.find('.popup-inquire-detail').text($("#inquiry-detail").val());
      modal.show();
      $("body").css('overflow', "hidden");
    }
    valid_status = 1;
  })
  
  $("#comp-name-input").on("input", function(){ //when the company name is input to
    if($(this).val() == ''){
      $(".comp-name-error").show();
      valid_status = 0;
    } else{
      $(".comp-name-error").hide();
      valid_status = 1;
    }
  })

  $("#inquiry-name").on("input", function(){ //when the user name is input to
    if($(this).val() == ''){
      $(".user-name-error").show();
      valid_status = 0;
    } else{
      $(".user-name-error").hide();
      valid_status = 1;
    }
  })

  $("#inquiry-email").on("input", function(){ //when the email is input to
    if($("#inquiry-email").val() == ""){
      $(".email-error").val("このフイールドを入力してください");
      $(".email-error").show();
      $("#phonenumber-error").focus();
      valid_status = 0;
    } else{
      var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if(!regex.test($("#inquiry-email").val())){
        $(".email-error").text("「@」を含むメールアドレスを入力してください");
        $(".email-error").show();
        $("#inquiry-email").focus();
        valid_status = 0;
      } else{
        $(".email-error").hide();
        valid_status = 1;
      }
    }
  })

  $("#inquiry-phonenumber").on("input", function(){ //when the phonenumber is input to
    if($(this).val() == ''){
      $(".phonenumber-error").show();
      valid_status = 0;
    } else{
      $(".phonenumber-error").hide();
      var valid_status = 1;
    }
  })
  //Contact us Validation end--------------
})
