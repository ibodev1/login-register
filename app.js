var sifre = document.getElementById("sifre");
var icon = document.getElementById("icon");

icon.addEventListener("click", function () {
    icon.classList.toggle("fa-eye-slash");
    if (sifre.type === "password") {
      sifre.type = "text";
    } else {
      sifre.type = "password";
    }
  });