let aliments = document.getElementById("aliments");
let listePourCourse = document.getElementById("listePourCourse");
let rubrique = document.getElementById("rubrique");
let planning = document.getElementById("planning");

aliments.style.display = "none";

listePourCourse.addEventListener("click", () => {
  if(getComputedStyle(rubrique).display != "none"){
    rubrique.style.display = "none";
    aliments.style.display = "block";
  } 
})

planning.addEventListener("click", () => {
    if(getComputedStyle(aliments).display != "none"){
      aliments.style.display = "none";
      rubrique.style.display = "block";
    } 
  })