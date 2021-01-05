var mybutton = document.getElementById("myBtn");
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
window.onbeforeunload = function() {window.scrollTo(0,0);}