let accordion = document.getElementsByClassName("vila");
let i;

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let show = this.nextElementSibling;
    if (show.style.display === "block") {
      show.style.display = "none";
    } else {
      show.style.display = "block";
    }
  });
}
