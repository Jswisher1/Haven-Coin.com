export class ContactForm {
  constructor() {
    this.forms = []
  }

  init() {
    // This will be called when contact forms are rendered
    this.bindForms()
  }

  bindForms() {
    const forms = document.querySelectorAll('.contact-form')
    forms.forEach(form => this.bindForm(form))
  }

  bindForm(form) {
    if (this.forms.includes(form)) return
    
    this.forms.push(form)
    form.addEventListener('submit', (e) => this.handleSubmit(e, form))
  }

  async handleSubmit(e, form) {
    e.preventDefault()
    
    const submitButton = form.querySelector('.submit-button')
    const originalText = submitButton.textContent
    
    // Show loading state
    submitButton.textContent = 'Sending...'
    submitButton.disabled = true
    submitButton.classList.add('loading')
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Show success message
      this.showNotification('Thank you! Your message has been sent successfully.', 'success')
      form.reset()
      
    } catch (error) {
      this.showNotification('Sorry, there was an error sending your message. Please try again.', 'error')
    } finally {
      // Reset button
      submitButton.textContent = originalText
      submitButton.disabled = false
      submitButton.classList.remove('loading')
    }
  }

  showNotification(message, type) {
    const notification = document.createElement('div')
    notification.className = `notification ${type}`
    notification.innerHTML = `
      <div class="notification-content">
        <span class="notification-icon">${type === 'success' ? '✓' : '✕'}</span>
        <span class="notification-message">${message}</span>
      </div>
    `
    
    document.body.appendChild(notification)
    
    // Animate in
    setTimeout(() => notification.classList.add('show'), 100)
    
    // Remove after 5 seconds
    setTimeout(() => {
      notification.classList.remove('show')
      setTimeout(() => document.body.removeChild(notification), 300)
    }, 5000)
  }
}