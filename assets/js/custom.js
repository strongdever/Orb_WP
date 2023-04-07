//Usecase Tab bar start-----------------

function openUsecase(evt, usecaseName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  if(usecaseName == "usecase1"){
    document.getElementById(usecaseName).style.backgroundColor = "#087AC9";
  }
  if(usecaseName == "usecase2"){
    document.getElementById(usecaseName).style.backgroundColor = "#3CA1E1";
  }
  if(usecaseName == "usecase3"){
    document.getElementById(usecaseName).style.backgroundColor = "#59BAF0";
  }
  tablinks = document.getElementsByClassName("tabs-button");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  var targetcontent = document.getElementById(usecaseName);
  targetcontent.style.display = "flex";  
  evt.currentTarget.className += " active";
}
//Usecase Tab bar start-----------------