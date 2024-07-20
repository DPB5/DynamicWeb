function smoothScrollToSection(sectionNumber) {
    const sectionId = 'section' + sectionNumber; 
    const section = document.getElementById(sectionId);
  
    if (section) { 
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error('Section not found:', sectionId);
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
      const header = document.querySelector('.main__hero');
      const headerPosition = header.getBoundingClientRect();        
      
      
     const commentForm = document.getElementById('comment-form');
  const commentsContainer = document.getElementById('comments-container');
  
  commentForm.addEventListener('submit', (event) => {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const comment = document.getElementById('comment').value;
  
    const newComment = document.createElement('div');
    newComment.classList.add('comment-container');
    newComment.innerHTML = `
      <b>Name:</b> ${name}<br>
      <b>Email:</b> ${email}<br>
      <b>Comment:</b> ${comment}
    `;
  
    commentsContainer.appendChild(newComment);
  });
  
  });
  