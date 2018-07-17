let main = function() {
  setTimeout(function() {
    let paidStuff = document.getElementsByClassName("poster__purchaseable");
    Object.keys(paidStuff).forEach(function(key) {
      paidStuff[key].parentNode.parentNode.style.display = 'none' 
    });
  }, 1000);
};

window.addEventListener("load", main, false);
