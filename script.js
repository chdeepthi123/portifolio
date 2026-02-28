// Typing Effect
const text = ["BCA Student", "Aspiring Software Developer", "AI Enthusiast"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){
  if(count === text.length){
    count = 0;
  }
  currentText = text[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing").textContent = letter;

  if(letter.length === currentText.length){
    setTimeout(()=>{
      index = 0;
      count++;
    },1000);
  }
  setTimeout(type,100);
})();

// Smooth Scroll
document.querySelectorAll("nav a").forEach(anchor=>{
  anchor.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior:"smooth"
    });
  });
});