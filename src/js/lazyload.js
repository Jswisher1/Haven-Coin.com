export function initializeImageLazyLoading() {
  const images = document.querySelectorAll('img[data-src]')
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.dataset.src
        img.classList.remove('lazy-image')
        img.classList.add('loaded')
        observer.unobserve(img)
      }
    })
  })

  images.forEach(img => {
    img.classList.add('lazy-image')
    imageObserver.observe(img)
  })

  // Initialize fade-in animations
  const fadeElements = document.querySelectorAll('.fade-in')
  
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, {
    threshold: 0.1
  })

  fadeElements.forEach(el => {
    fadeObserver.observe(el)
  })
}