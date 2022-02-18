let listePourCourse = document.getElementById("listePourCourse");
let planning = document.getElementById("planning");
let ingredients = document.getElementById("ingredients");
let rubrique = document.getElementById("rubrique");

ingredients.style.display = "none";

listePourCourse.addEventListener("click", () => {
  if(getComputedStyle(rubrique).display != "none"){
    rubrique.style.display = "none";
    ingredients.style.display = "block";
  } 
})

planning.addEventListener("click", () => {
    if(getComputedStyle(ingredients).display != "none"){
      ingredients.style.display = "none";
      rubrique.style.display = "block";
    } 
  })