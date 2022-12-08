// const accordion_body_1 = document.getElementById("accordion-collapse-body-1");

const accordianHeaders = document.querySelectorAll(".accordian-header");

accordianHeaders.forEach((element) => {
  //console.log(element, element.nextSibling.nextSibling);
  element.addEventListener("click", function () {
    element.nextSibling.nextSibling.classList.toggle("hidden");
  });
});
