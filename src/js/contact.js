export function initializeContactForm() {
  const contactForm = document.getElementById('contact-form')
  
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault()
      
      const submitButton = contactForm.querySelector('.submit-button')
      const originalText = submitButton.textContent
      
      // Show loading state
      submitButton.textContent = 'Sending...'
      submitButton.disabled = true
      
      // Simulate form submission (replace with actual form handling)
      try {
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // Show success message
        showNotification('Thank you! Your message has been sent successfully.', 'success')
        contactForm.reset()
        
      } catch (error) {
        showNotification('Sorry, there was an error sending your message. Please try again.', 'error')
      } finally {
        // Reset button
        submitButton.textContent = originalText
        submitButton.disabled = false
      }
    })
  }
}

function showNotification(message, type) {
  const notification = document.createElement('div')
  notification.className = `notification ${type}`
  notification.textContent = message
  
  // Add notification styles
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    color: white;
    font-weight: 500;
    z-index: 10000;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    ${type === 'success' ? 'background: #10b981;' : 'background: #ef4444;'}
  `
  
  document.body.appendChild(notification)
  
  // Animate in
  setTimeout(() => {
    notification.style.transform = 'translateX(0)'
  }, 100)
  
  // Remove after 5 seconds
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)'
    setTimeout(() => {
      document.body.removeChild(notification)
    }, 300)
  }, 5000)
}