"use strict";

var sections = document.querySelectorAll(".section");
var sectionBtns = document.querySelectorAll(".controlls");
var sectionBtn = document.querySelectorAll(".controll");
var allSections = document.querySelector(".main-content");
var headerImage = document.getElementById('headerImage');
var hShape = document.getElementById("h-shape");

function pageTransition() {
  // Button Active Class
  for (var i = 0; i < sectionBtn.length; i++) {
    sectionBtn[i].addEventListener("click", function () {
      var currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].className = currentBtn[0].className.replace("active-btn", " ");
      this.className += "active-btn";
    });
  }

  allSections.addEventListener("click", function (e) {
    // bu kod ile biz ekranda clicklenen her hansi bir containerin data-id sini aliriq.
    var id = e.target.dataset.id;

    if (id) {
      sectionBtns.forEach(function (btn) {
        btn.classList.remove("active");
      });
      sections.forEach(function (section) {
        section.classList.remove("active");
      });
      var element = document.getElementById(id);
      element.classList.add("active");
    }
  });
  headerImage.addEventListener("mouseenter", function () {
    hShape.classList.add("active1");
  });
  headerImage.addEventListener("mouseleave", function () {
    hShape.classList.remove("active1");
  });
  var themeBtn = document.querySelector(".theme-btn");
  themeBtn.addEventListener("click", function () {
    var element = document.body;
    element.classList.toggle("light-mode");
  });
}

pageTransition();