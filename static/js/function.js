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
    <h4>WRITING [2]</h4>
    <p>WCWP 10A and 10B </p>
    <h4>ETHICS AND SOCIETY [2]</h4>
    <p>PHIL 27/POLI 27 and PHIL 28/POLI 28</p>
    <h4>FORMAL SKILLS [2]</h4>
    <p>Two courses in calculus, symbolic logic, computer programming and/or statistics</p>
    <h4>AREA STUDIES [6]</h4>
    <p>For Engineering majors. Two area studies, one in humanities/fine arts and one in 
    social sciences, each containing three courses.</p>
    <h4>PROGRAMS OF CONCENTRATION [12]</h4>
    <p>For non-Engineering majors. Two programs of concentration, each containing six courses, 
    and each noncontiguous to the major and to each other.</p>
    `;
    x.innerHTML = html;
}
  
function sixth(){
    var x = document.getElementById('display');
    const html = `
    <h1>Sixth College</h1>
    <h4>CULTURE,ART, AND TECHNOLOGY [4]</h4>
    <p>CAT 1, 2, 3 and 125 or 125R </p>
    <h4>INFORMATION TECHNOLOGY FLUENCY [1]</h4>
    <p>A computing course</p>
    <h4>FORMAL SKILLS [2]</h4>
    <p>Two courses in calculus, symbolic logic, computer programming and/or statistics</p>
    <h4>MODES OF INQUIRY [7]</h4>
    <p>Two courses in the social sciences, two courses in the humanities, two courses in the 
    natural sciences, one course in math/logic</p>
    <h4>EXPLORING DATA [1]</h4>
    <p>A statistics course</p>
    <h4>ART MAKING [2]</h4>
    <p>Two courses in literature, music, theatre and dance, or visual arts</p>
    <h4>PRACTICUM</h4>
    <p>Capstone project in which students apply theory to practice in local and global communities 
    through departmental courses, internships, research opportunities, or study abroad programs</p>
    `;
    x.innerHTML = html;
}

function muir(){
    var x = document.getElementById('display');
    const html = `
    <h1>John Muir College</h1>
    <h4>WRITING [2]</h4>
    <p>MCWP 40 AND 50</p>
    <h4>SOCIAL SCIENCES [3]</h4>
    <p>Courses chosen from an approved three-course sequence</p>
    <h4>MATH OR NATURAL SCIENCES</h4>
    <p>Courses chosen from an approved three-course sequence from either category</p>
    <h4>FINE ARTS, FOREIGHN LANGUAGE, OR HUMUNAITIES [6]</h4>
    <p>Must be chosen from approved three-course sequences in two of these categories</p>
    `;
    x.innerHTML = html;
}

function erc(){
  var x = document.getElementById('display');
  const html = `
  <h1>Eleanor Roosevelt College</h1>
  <h4>MAKING OF THE MODERN WORLD [5]</h4>
  <p>MMW 11, 12, 13, 14, 15</p>
  <h4>FOREIGN LANGUAGE [0-4]</h4>
  <p>Proficiency Exam or satisfied requirements or language sequence courses</p>
  <h4>FINE ARTS [2]</h4>
  <p>Courses from the departments of Music, Theatre & Dance, or Visual Arts</p>
  <h4>NATURAL SCIENCES [2]</h4>
  <p>Courses in a science or other approved courses</p>
  <h4>QUANTITATIVE & FORMAL SKILLS [2]</h4>
  <p>Courses from a approved list</p>
  <h4>REGIONAL SPECIALIZATION [3]</h4>
  <p>Courses from an approved list that are from the same region</p>
  <h4>UPPER DIVISION WRITING REQUIREMENT</h4>
  <p>An upper division course that includes a significant writing component</p>
  `;
  x.innerHTML = html;
}

function marshall(){
  var x = document.getElementById('display');
  const html = `
  <h1>Thurgood Marshall College</h1>
  <h4>DIMENSIONS OF CULTURE [3]</h4>
  <p>DOC 1, 2, 3</p>
  <h4>HUMANITIES/CULTURE [2]</h4>
  <p>Courses from an approved list</p>
  <h4>FINE ARTS [1]</h4>
  <p>Course on an approved list from the departments of Music, Theatre & Dance, or Visual Arts</p>
  <h4>NATURAL SCIENCES [3]</h4>
  <p>One course each in biology, chemistry, and physics</p>
  <h4>MATHEMATICS, STATISTICS, OR LOGIC [2]</h4>
  <p>Option A: Complete two courses in the Mathematics/Advanced Statistics category</p>
  <p>Option B: Complete one course in the Mathematics/Advanced Statistics category and one 
  course in either the Introductory Statistics category or the Computer Programming & Logic category.</p>
  <p>Option C: Complete one course in the Introductory Statistics category and one course in the 
  Computer Programming & Logic category.</p>
  <h4>DISCIPLINARY BREADTH [4]</h4>
  <p>Courses from an approved list of departments, two of which must be upper division and one of
  which must come from a course on the significant writing list</p>
  `;
  x.innerHTML = html;
}

function revelle(){
  var x = document.getElementById('display');
  const html = `
  <h1>Revelle College</h1>
  <h4>HUMANITIES [5]</h4>
  <p>Humanities 1, 2, 3, 4, 5</p>
  <h4>FOREIGN LANGUAGE [0-4]</h4>
  <p>Proficiency Exam or satisfied requirements or language sequence courses</p>
  <h4>FINE ARTS [1]</h4>
  <p>Course from the departments of Music, Theatre & Dance, or Visual Arts</p>
  <h4>NATURAL SCIENCES [5]</h4>
  <p>One course each in biology, chemistry, and physics and two additional courses from
  an approved list</p>
  <h4>MATHEMATICS [3]</h4>
  <p>MATH 10A/20A and MATH 10B/20B</p>
  <h4>SOCIAL SCIENCE [2]</h4>
  <p>Courses from an approved list of departments</p>
  `;
  x.innerHTML = html;
}

function seventh(){
  var x = document.getElementById('display');
  const html = `
  <h1>Seventh College</h1>
  <h4>SYNTHESIS [3]</h4>
  <p>SYN 1, 2, 100</p>
  <h4>HUMANITIES [2]</h4>
  <p>Courses from an approved list</p>
  <h4>ARTS [2]</h4>
  <p>CourseS on an approved list from the departments of Music, Theatre & Dance, or Visual Arts</p>
  <h4>NATURAL SCIENCES AND ENGINEERING [2]</h4>
  <p>Courses from an approved list</p>
  <h4>QUANTITATIVE REASONING [2]</h4>
  <p>Courses from an approved list</p>
  <h4>SOCIAL SCIENCES [2]</h4>
  <p>Courses from an approved list</p>
  <h4>HIGH IMPACT [1]</h4>
  <p>AIP 197 or Special Studies 197, 198, 199 or Study Abroad</p>
  `;
  x.innerHTML = html;
}

