//reviewer told me to add comments so yeah
function smoothScrollToSection(sectionNumber) {
  // create an ID for the 
  const sectionId = 'section' + sectionNumber; 
  // find the section
  const section = document.getElementById(sectionId);
  
  // if the section is actually there found
  if (section) { 
    // smooth scroll to section
    section.scrollIntoView({ behavior: 'smooth' });
  } else {
    // in case it was not found
    console.error('Section not found:', sectionId);
  }
}

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
});
//mission successful 