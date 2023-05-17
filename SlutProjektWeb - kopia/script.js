let slideIndex = 1;



// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
  resetSlideTimer()
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
  resetSlideTimer()
}

function autoSlides() {
  slideTimer = setInterval(function() {
    plusSlides(1);
  }, 5000);
}


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


function resetSlideTimer() {
  clearInterval(slideTimer);
  autoSlides();
}

autoSlides();


/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}



/* min egen sämst kod */ 
function button(index){
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let buttons = [button1,button2,button3]

  for(let i = 0; i < buttons.length; i++){
    if (i == index){
      buttons[i].style.backgroundColor = "white";
      buttons[i].style.borderColor = "blue"
    }
    else{
      
      buttons[i].style.borderColor = "black"
    }

    
  }

}



function colourButton(index){
  let button0 = document.getElementById("colour0");
  let button1 = document.getElementById("colour1");
  let button2 = document.getElementById("colour2");
  let button3 = document.getElementById("colour3");
  
  let buttons = [button0,button1,button2,button3]

    for(let i = 0; i < buttons.length; i++){
      if (i == index){
        buttons[i].style.borderColor = "blue";
        currentIndexButton = i;
      }
      else{
        
        buttons[i].style.borderColor = "";
      }
  
      
    }
  
  }

var itemName = ""
  function cartSave(name){
    console.log(name)
    itemName = name
  }


function cart(){
  console.log(itemName)
  console.log("test")
  let name = document.getElementById("name");
  name.innerHTML = itemName
}
