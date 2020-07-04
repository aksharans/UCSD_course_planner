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

function warren(){
    var x = document.getElementById('display');
    const html = `
    <h1>Earl Warren College</h1>
    `;
    x.innerHTML = html;
}
  
function sixth(){
    var x = document.getElementById('display');
    const html = `
    <h1>Sixth College</h1>
    `;
    x.innerHTML = html;
}

function muir(){
    var x = document.getElementById('display');
    const html = `
    <h1>John Muir College</h1>
    `;
    x.innerHTML = html;
}

function erc(){
  var x = document.getElementById('display');
  const html = `
  <h1>Eleanor Roosevelt College</h1>
  `;
  x.innerHTML = html;
}

function marshall(){
  var x = document.getElementById('display');
  const html = `
  <h1>Thurgood Marshall College</h1>
  `;
  x.innerHTML = html;
}

function revelle(){
  var x = document.getElementById('display');
  const html = `
  <h1>Revelle College</h1>
  `;
  x.innerHTML = html;
}

function seventh(){
  var x = document.getElementById('display');
  const html = `
  <h1>Seventh College</h1>
  `;
  x.innerHTML = html;
}

