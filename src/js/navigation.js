export class Navigation {
  constructor() {
    this.header = null
    this.mobileToggle = null
    this.navMenu = null
    this.isMenuOpen = false
  }

  init() {
    this.header = document.querySelector('.header')
    this.mobileToggle = document.querySelector('.mobile-menu-toggle')
    this.navMenu = document.querySelector('.nav-menu')

    this.setupScrollEffect()
    this.setupMobileMenu()
  }

  setupScrollEffect() {
    let lastScrollY = window.scrollY
    
    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > 100) {
        this.header.classList.add('scrolled')
      } else {
        this.header.classList.remove('scrolled')
      }

      // Hide/show header on scroll
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        this.header.classList.add('hidden')
      } else {
        this.header.classList.remove('hidden')
      }

      lastScrollY = currentScrollY
    })
  }

  setupMobileMenu() {
    if (!this.mobileToggle || !this.navMenu) return

    this.mobileToggle.addEventListener('click', () => {
      this.toggleMobileMenu()
    })

    // Close menu when clicking on a link
    this.navMenu.addEventListener('click', (e) => {
      if (e.target.classList.contains('nav-link')) {
        this.closeMobileMenu()
      }
    })

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!this.navMenu.contains(e.target) && !this.mobileToggle.contains(e.target)) {
        this.closeMobileMenu()
      }
    })

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isMenuOpen) {
        this.closeMobileMenu()
      }
    })
  }

  toggleMobileMenu() {
    this.isMenuOpen = !this.isMenuOpen
    this.navMenu.classList.toggle('active', this.isMenuOpen)
    this.mobileToggle.classList.toggle('active', this.isMenuOpen)
    document.body.classList.toggle('menu-open', this.isMenuOpen)
  }

  closeMobileMenu() {
    this.isMenuOpen = false
    this.navMenu.classList.remove('active')
    this.mobileToggle.classList.remove('active')
    document.body.classList.remove('menu-open')
  }
}