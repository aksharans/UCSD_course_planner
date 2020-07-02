function toggle(course) {
    var x = document.getElementById(course);
    if (x.style.display == "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function createPDF(){
    var data = document.getElementById('t2').innerHTML;
    var win = window.open('', '', height=400,width=600);
    win.document.write('<link rel="stylesheet" href="../static/css/style.css" />');
    win.document.write(data);
    win.document.close(); 
    //win.print();
  }