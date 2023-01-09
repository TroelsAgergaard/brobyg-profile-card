let articleElement = document.querySelector("article");
articleElement.addEventListener("click", function () {
  articleElement.classList.remove("animate__backInUp");
  articleElement.classList.add("animate__tada");
  setTimeout(function () {
    articleElement.classList.remove("animate__tada");
  }, 500);
});

let kontaktLink = document.querySelector(".kontakt");
kontaktLink.addEventListener("click", function (e) {
  e.preventDefault();
  articleElement.classList.add("animate__backOutLeft");
  setTimeout(function () {
    window.location.assign("kontakt.html");
  }, 300);
});

function getAge() {
  "use strict";
  age = 21;
  console.log(age);
}
getAge();
