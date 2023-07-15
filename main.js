(function($) { 
    $(function() { 
  
      //  open and close nav 
      $('#navbar-toggle').click(function() {
        $('nav ul').slideToggle();
      });
  
  
      // Hamburger toggle
      $('#navbar-toggle').on('click', function() {
        this.classList.toggle('active');
      });
  
  
      // If a link has a dropdown, add sub menu toggle.
      $('nav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.navbar-dropdown').slideToggle("slow");
  
        // Close dropdown when select another dropdown
        $('.navbar-dropdown').not($(this).siblings()).hide("slow");
        e.stopPropagation();
      });
  
  
      // Click outside the dropdown will remove the dropdown class
      $('html').click(function() {
        $('.navbar-dropdown').hide();
      });
    }); 
  })(jQuery);
  
  // start anime

const prags = document.querySelector(".main .text-main p");
console.log(prags);

prags.innerHTML = prags.innerHTML.split(" ").map( (char) =>{
    return "<span>"+char+"</span>"
 }).join(" ")

anime.timeline({
loop:true,
})

.add({
targets:'.main .text-main p span' ,
translateX : [-500 , 0] , 
scale :[10 , 1] , 
opacity:[0 , 1],
easing:"easeOutExpo" , 
duration:1500 , 
delay:anime.stagger(300),
})


// const prag_how = document.querySelector(".text-we p");
// console.log(prag_how);

// prag_how.innerHTML = prag_how.innerHTML.split(" ").map( (char) =>{
//     return "<span>"+char+"</span>"
//  }).join(" ")

// anime.timeline({
// loop:false,
// })

// .add({
// targets:'.text-we p span' ,
// translateX : [-500 , 0] , 
// scale :[10 , 1] , 
// opacity:[0 , 1],
// easing:"easeOutExpo" , 
// duration:1500 , 
// delay:anime.stagger(300),
// })
// end anime

// start animation

let scroll = window.requestAnimationFrame || function (callback){
  window.setTimeout(callback, 1000/60)
}
let elementsToShow = document.querySelectorAll(".show-on-scroll");
function loop () {
 elementsToShow.forEach((element) =>{
  if(isElementInViewport(element)){
     element.classList.add('is-visible');
  }else{
     element.classList.remove('is-visible');
  }
 })
 scroll(loop)
}

loop();

function isElementInViewport(el){
 if(typeof jQuery === "function" && el instanceof jQuery){
     el = el[0];
 }
 let rect = el.getBoundingClientRect();
 return(
     (rect.top <=0 && rect.bottom >=0) || (rect.bottom >= (window.innerHeight ||document.documentElement.clientHeight) && rect.top <=(
         window.innerHeight ||document.documentElement.clientHeight
     ))
     ||
     (rect.top >=0 && rect.bottom <=(window.innerHeight || document.documentElement.clientHeight))
 )
}
// end animation