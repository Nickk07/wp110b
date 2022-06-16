window.onload = function(){
    document.getElementById('location').innerHTML = "You're in <strong>Home</strong>";
    document.getElementById('title1').innerHTML = "Home";
    document.getElementById('title2').innerHTML = "Welcome to my blog";
    document.getElementById('home').onclick = showHome;
    document.getElementById('about').onclick = showAbout;
    document.getElementById('hobbies').onclick = showHobbies;
    document.getElementById('contact').onclick = showContact;
  };
  function showHome(){
    document.getElementById('location').innerHTML = "You're in <strong>Home</strong>";
    document.getElementById('title1').innerHTML = "Home";
    document.getElementById('title2').innerHTML = "Welcome to my blog";
    document.getElementById('ex1').innerHTML = "Standard and simple blog.";
    document.getElementById('ex2').innerHTML = "This is my first time on making personal blog, i've been trying to make it simple.";
  }
  function showAbout(){
    document.getElementById('location').innerHTML = "You're in <strong>About</strong>";
    document.getElementById('title1').innerHTML = "About Blog";
    document.getElementById('title2').innerHTML = "About topics in Blog";
    document.getElementById('ex1').innerHTML = "This is my first blog";
    document.getElementById('ex2').innerHTML = "This blog was created using html, css, and js";
  }
  function showHobbies(){
    document.getElementById('location').innerHTML = "You're in <strong>Hobbies</strong>";
    document.getElementById('title1').innerHTML = "Online Games";
    document.getElementById('title2').innerHTML = "Watching Movies";
    document.getElementById('ex1').innerHTML = "I like online fps games";
    document.getElementById('ex2').innerHTML = "I like watching horror movies";
  }
  function showContact(){
    document.getElementById('location').innerHTML = "You're in <strong>Contact me</strong>";
    document.getElementById('title1').innerHTML = "Who Am I?";
    document.getElementById('title2').innerHTML = "Do you want contact me?";
    document.getElementById('ex1').innerHTML = "I am student major in computer science in Kinmen";
    document.getElementById('ex2').innerHTML = "Feel free to contact me : 0916-XXX-XXX";
  }