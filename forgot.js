let changeBtn = document.getElementById("change");
let changeBtn2 = document.getElementById("change2");
let form1 = document.querySelector(".forgot-form");
let form2 = document.querySelector(".forgot-form2");

changeBtn.addEventListener("click", function() {
  if (form1.style.display === "none") {
    form1.style.display = "block";
    form2.style.display = "none";
  } else {
    form1.style.display = "none";
    form2.style.display = "block";
  }
});

changeBtn2.addEventListener("click", function() {
    if (form1.style.display === "none") {
      form1.style.display = "block";
      form2.style.display = "none";
    } else {
      form1.style.display = "none";
      form2.style.display = "block";
    }
});

let changeBtn3 = document.getElementById("submit");

changeBtn3.addEventListener("click", function() {
    window.location.href = "../verify/verify.html";   
});