export function initializeNavigation() {
  const header = document.querySelector('.header')
  const mobileToggle = document.querySelector('.mobile-menu-toggle')
  const navMenu = document.querySelector('.nav-menu')
  const navLinks = document.querySelectorAll('.nav-link')

  // Handle scroll effect on header
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      header.classList.add('scrolled')
    } else {
      header.classList.remove('scrolled')
    }
  })

  // Mobile menu toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active')
      mobileToggle.innerHTML = navMenu.classList.contains('active') ? '✕' : '☰'
    })

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active')
        mobileToggle.innerHTML = '☰'
      })
    })

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        navMenu.classList.remove('active')
        mobileToggle.innerHTML = '☰'
      }
    })
  }

  // Update active nav link based on scroll position
  const sections = document.querySelectorAll('section[id]')
  
  window.addEventListener('scroll', () => {
    let current = ''
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 150
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id')
      }
    })

    navLinks.forEach(link => {
      link.classList.remove('active')
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active')
      }
    })
  })
}