export class Router {
  constructor() {
    this.routes = new Map()
    this.currentRoute = null
  }

  addRoute(path, handler) {
    this.routes.set(path, handler)
  }

  async navigate(path) {
    if (this.currentRoute === path) return

    const handler = this.routes.get(path)
    if (!handler) {
      console.error(`Route not found: ${path}`)
      return
    }

    try {
      // Show loading state
      this.showLoading()
      
      // Load the page module
      const pageModule = await handler()
      const page = new pageModule.default()
      
      // Render the page
      const mainContent = document.getElementById('main-content')
      mainContent.innerHTML = page.render()
      
      // Initialize page-specific functionality
      if (page.init) {
        page.init()
      }

      // Update current route
      this.currentRoute = path
      
      // Update browser history
      if (window.location.pathname !== path) {
        window.history.pushState({}, '', path)
      }

      // Update active nav link
      this.updateActiveNavLink(path)
      
      // Hide loading state
      this.hideLoading()
      
      // Scroll to top
      window.scrollTo(0, 0)

    } catch (error) {
      console.error('Error loading page:', error)
      this.showError()
    }
  }

  showLoading() {
    const mainContent = document.getElementById('main-content')
    mainContent.innerHTML = `
      <div class="loading-container">
        <div class="loading-spinner"></div>
        <p>Loading...</p>
      </div>
    `
  }

  hideLoading() {
    // Loading is hidden when new content is rendered
  }

  showError() {
    const mainContent = document.getElementById('main-content')
    mainContent.innerHTML = `
      <div class="error-container">
        <h2>Oops! Something went wrong</h2>
        <p>We're sorry, but there was an error loading this page.</p>
        <button onclick="window.location.reload()" class="btn btn-primary">Try Again</button>
      </div>
    `
  }

  updateActiveNavLink(path) {
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active')
      if (link.getAttribute('data-route') === path) {
        link.classList.add('active')
      }
    })
  }

  init() {
    // Handle browser back/forward buttons
    window.addEventListener('popstate', () => {
      this.navigate(window.location.pathname)
    })

    // Handle navigation clicks
    document.addEventListener('click', (e) => {
      const link = e.target.closest('[data-route]')
      if (link) {
        e.preventDefault()
        this.navigate(link.getAttribute('data-route'))
      }
    })

    // Load initial page
    this.navigate(window.location.pathname || '/')
  }
}