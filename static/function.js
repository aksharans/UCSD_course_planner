function myFunction(course) {
    var x = document.getElementById(course);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }