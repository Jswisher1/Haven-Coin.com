import './style.css'
import { initializeNavigation } from './js/navigation.js'
import { initializeContactForm } from './js/contact.js'
import { initializeImageLazyLoading } from './js/lazyload.js'

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  initializeNavigation()
  initializeContactForm()
  initializeImageLazyLoading()
  
  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute('href'))
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    })
  })
})