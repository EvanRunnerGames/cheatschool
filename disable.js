// Block all keyboard input
document.addEventListener('keydown', function (e) {
    e.preventDefault();
    console.log("Can't do that");
  });
  
  // Block right-click
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    console.log("Can't do that");
  });
  
  // Block left-click (mouse click)
  document.addEventListener('click', function (e) {
    e.preventDefault();
    console.log("Can't do that");
  });
  