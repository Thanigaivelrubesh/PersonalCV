document.getElementById("HomeBtn").addEventListener("click", HomeBtnclicked);
document.getElementById("EducationBtn").addEventListener("click", EducationBtnclicked);
document.getElementById("ExperienceBtn").addEventListener("click", ExperienceBtnclicked);
document.getElementById("ContactBtn").addEventListener("click", ContactBtnclicked);

function HomeBtnclicked() {
  var home = document.getElementById('HomeBtn');
  var education= document.getElementById('EducationBtn');
  var experience = document.getElementById('ExperienceBtn');
  var contact = document.getElementById('ContactBtn');

  var hlink = document.getElementsByClassName('navItem')
  hlink[0].style.color="white";
  hlink[1].style.color="brown";
  hlink[2].style.color="brown";
  hlink[3].style.color="brown";

  home.classList.add("active");
  education.classList.remove("active");
  experience.classList.remove("active");
  contact.classList.remove("active");
}

function EducationBtnclicked() {
  var home = document.getElementById('HomeBtn');
  var education= document.getElementById('EducationBtn');
  var experience = document.getElementById('ExperienceBtn');
  var contact = document.getElementById('ContactBtn');

  var hlink = document.getElementsByClassName('navItem')
  hlink[0].style.color="brown";
  hlink[1].style.color="white";
  hlink[2].style.color="brown";
  hlink[3].style.color="brown";

  education.classList.add("active");
  home.classList.remove("active");
  experience.classList.remove("active");
  contact.classList.remove("active");


}

function ExperienceBtnclicked() {
  var home = document.getElementById('HomeBtn');
  var education= document.getElementById('EducationBtn');
  var experience = document.getElementById('ExperienceBtn');
  var contact = document.getElementById('ContactBtn');

  var hlink = document.getElementsByClassName('navItem')
  hlink[0].style.color="brown";
  hlink[1].style.color="brown";
  hlink[2].style.color="white";
  hlink[3].style.color="brown";

  experience.classList.add("active");
  home.classList.remove("active");
  education.classList.remove("active");
  contact.classList.remove("active");
}

function ContactBtnclicked() {
  var home = document.getElementById('HomeBtn');
  var education= document.getElementById('EducationBtn');
  var experience = document.getElementById('ExperienceBtn');
  var contact = document.getElementById('ContactBtn');

  var hlink = document.getElementsByClassName('navItem')
  hlink[0].style.color="brown";
  hlink[1].style.color="brown";
  hlink[2].style.color="brown";
  hlink[3].style.color="white";

  contact.classList.add("active");
  home.classList.remove("active");
  experience.classList.remove("active");
  education.classList.remove("active");
}

HomeBtnclicked();
