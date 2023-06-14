
//JS From Bard AI by goolge == bard.google.com

//Navbar Button & Show and Hide Search on click
const btn2 = document.getElementById('btn2');
const menuToggle = document.querySelector('.toggle')

menuToggle.addEventListener('click', () =>{
    menuToggle.classList.toggle('active')
    if (btn2.style.display === 'flex') {
        // Hide the button
        btn2.style.display = 'none';
    } else {
        // Show the button
        btn2.style.display = 'flex';
    }
    window.addEventListener('resize', () => {
        // Check if the screen is 768px or wider
        if (window.innerWidth >= 768) {
        // Show the button
            btn2.style.display = 'flex';
      } else {
        // Hide the button
            btn2.style.display = 'none';
      }
    });
});

//Go Top btn
const goUpButton = document.getElementById("goUpButton");

window.addEventListener("scroll", function(){
  const scrollPosition = window.scrollY;
  if (scrollPosition > 500) {
      //show btn when scroll hieght > 500
      goUpButton.style.display = "block";
      //Click to go top
      goUpButton.addEventListener("click", function() {
      window.scrollTo(0, 0);
      });
  }
  else {
      //Hide btn when scroll hieght < 500
      document.getElementById("goUpButton").style.display = "none";
  }
});

//click link active
const links = document.querySelectorAll(".link");

// When the page scrolls
window.addEventListener("scroll", function() {
    // Get the current scroll position
    let scrollTop = window.scrollY;

    // Get all of the sections on the page
    const sections = document.querySelectorAll("section");

    // Loop through the sections
    sections.forEach(section => {
        // Get the top position of the section
        let sectionTop = section.offsetTop;
        let sTop = sectionTop - 92;

        // If the top of the section is within the current scroll position
        if (scrollTop >= sTop) {
            // Find the link that corresponds to the section
            let link = document.querySelector(`a[href="#${section.id}"]`);

            // If the link exists
            if (link) {
                // Remove the active class from all links
                links.forEach(otherLink => otherLink.classList.remove("active"));

                // Add the active class to the link that corresponds to the section
                link.classList.add("active");
            }
        }
    });
});