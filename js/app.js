// Get a reference to the comment form element
  document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.main__hero'); 
  const headerPosition = header?.getBoundingClientRect(); 
  
       const commentForm = document.getElementById('commentForm');
  const commentSection = document.getElementById('commentSection'  );
  commentForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const commentInput = document.getElementById('comment');

    if (!nameInput.checkValidity() || !emailInput.checkValidity() || !commentInput.checkValidity()) {
      alert("Please fill out all fields correctly.");
      return;
    }

    const newComment = document.createElement('div');
    newComment.innerHTML = `
      <p>
        <strong>Name:</strong> ${nameInput.value} <br>
        <strong>Email:</strong> ${emailInput.value} <br>
        <strong>Comment:</strong> ${commentInput.value}
      </p>
    `;
    
    commentSection.appendChild(newComment);
     commentForm.reset();
  });
   
});

  function checkActiveSection() {
    const sections = document.querySelectorAll('section');
    let activeSection = null;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        activeSection = section;
      }
    });

    // Remove the active class from all sections
    sections.forEach(section => section.classList.remove('active'));

    // Add the active class to the currently active section
    if (activeSection) {
      activeSection.classList.add('active');
    }
  }

  // Call checkActiveSection on page load and on scroll event
  checkActiveSection();
  window.addEventListener('scroll', checkActiveSection);

    const navItems = [
      { name: "Section 1", link: "#section1" },
      { name: "Section 2", link: "#section2" },
      { name: "Section 3", link: "#section3" },
      { name: "Section 4", link: "#section4" },
      { name: "Section 5", link: "#section5" },
      { name: "Section 6", link: "#section6" }
    ];
  
    // Function to build the navigation bar
    function buildNavBar() {
        const navbar = document.getElementById('navbar');
        navItems.forEach(item => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = item.link;
            a.textContent = item.name;
            li.appendChild(a);
            navbar.appendChild(li);
        });
    }
  
    // Call the function to build the navigation bar
    buildNavBar();
  
    // Smooth scrolling function
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });

