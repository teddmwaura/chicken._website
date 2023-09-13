<script>
  var hello = document.getElementById("hello");
var videonav = document.getElementById("videonav");
var logo = document.getElementById("logo");
var isMenuOpen = false;

videonav.style.left = "-250px";

hello.addEventListener("click", function() {
  if (!isMenuOpen) {
    videonav.style.left = "0";
    logo.src = "https://cdn-icons-png.flaticon.com/128/10412/10412365.png";
  } else {
    videonav.style.left = "-250px";
    logo.src = "https://cdn-icons-png.flaticon.com/128/10412/10412365.png";
  }
  
  isMenuOpen = !isMenuOpen;
});

var scroll =new SmoothScroll('a[href*="#"]',{
  speed: 1000,
  speedAsDuration: true
  
  
  });
</script>

<script>
  var hello = document.getElementById("hello");
  var videonav = document.getElementById("videonav");
  var logo = document.getElementById("logo");
  var isOpen = false;
  
  hello.onclick = function() {
    if (!isOpen) {
      videonav.style.left = "0";
      logo.src = "https://cdn-icons-png.flaticon.com/128/10412/10412365.png";
    } else {
      videonav.style.left = "-250px";
      logo.src = "https://cdn-icons-png.flaticon.com/128/10412/10412107.png";
    }
    isOpen = !isOpen;
  };
  

var scroll =new SmoothScroll('a[href*="#"]',{
  speed: 1000,
  speedAsDuration: true
  
  
  });
</script>
  </body>
</html>
  
https://cdn-icons-png.flaticon.com/128/1828/1828859.png