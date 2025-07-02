export class AnimationController {
  constructor() {
    this.observers = []
  }

  init() {
    this.setupIntersectionObserver()
    this.setupParallaxEffects()
  }

  setupIntersectionObserver() {
    const fadeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    })

    this.observers.push(fadeObserver)
    this.observeElements('.fade-in', fadeObserver)
  }

  setupParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.parallax')
    
    if (parallaxElements.length > 0) {
      window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset
        const rate = scrolled * -0.5
        
        parallaxElements.forEach(element => {
          element.style.transform = `translateY(${rate}px)`
        })
      })
    }
  }

  observeElements(selector, observer) {
    const elements = document.querySelectorAll(selector)
    elements.forEach(el => observer.observe(el))
  }

  refresh() {
    // Re-observe new elements when page content changes
    this.observers.forEach(observer => {
      this.observeElements('.fade-in', observer)
    })
  }
}