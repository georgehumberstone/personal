/* Code here is inspired by what I found at https://www.w3schools.com/howto/howto_js_dropdown.asp (W3Schools cop. 1999-2020 ) */
/* Code here is written by George Humberstone*/
/*code in this fuction will display my menu*/
function showMenu() {
    document.getElementById("my-dropdown").classList.add("show-dropdown")
  }
  
/* event listener to listen for users click event on the button*/ 
let touchMenu=document.getElementById("touchit")
touchMenu.addEventListener("click",showMenu,false)
/*close all my links if user clicks elsewhere on the page*/
  window.onclick= function(event) {
    if (!event.target.matches('.my-drop-button')) {
      let theLinks = document.getElementsByClassName("menu-content");
      for (let link = 0; link < theLinks.length; link++) {
        //one by one it removes the links display
        theLinks[link].classList.remove('show-dropdown');
      }
    }
  }