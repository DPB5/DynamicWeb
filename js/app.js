//reviewer told me to add comments so yeah


document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.main__hero');
  const headerPosition = header.getBoundingClientRect();     
  
  const commentForm = document.getElementById('comment-form');
  const commentsContainer = document.getElementById('comments-container');
//from line 19 to 23 are variables
  commentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    // user will put here name email and comment
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const comment = document.getElementById('comment').value;
    
    // container for the comment
    const newComment = document.createElement('div');
    newComment.classList.add('comment-container');
    newComment.innerHTML = `
      <b>Name:</b> ${name}<br>
      <b>Email:</b> ${email}<br>
      <b>Comment:</b> ${comment}
    `;
    
    // put the comment in the comments container
    commentsContainer.appendChild(newComment);

      // Clear input 
      commentForm.reset()
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
  
    // Remove the active class 
    sections.forEach(section => section.classList.remove('active'));
  
    // Add the active class to the viewport
    if (activeSection) {
      activeSection.classList.add('active');
    }
  }
  
  checkActiveSection();
  window.addEventListener('scroll', checkActiveSection);
  
});
//mission successful 