# Deployment Guide

This document outlines the deployment process for the Haven Coin & Jewelry website.

## Prerequisites

- Node.js 16+ installed
- Git repository access
- Domain name configured
- SSL certificate (recommended)

## Build Process

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Build for Production**
   ```bash
   npm run build
   ```

3. **Test Production Build**
   ```bash
   npm run preview
   ```

## Deployment Options

### Option 1: Netlify (Recommended)

1. Connect your Git repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Configure custom domain and SSL
5. Set up form handling for contact forms

### Option 2: Vercel

1. Connect repository to Vercel
2. Build settings are auto-detected
3. Configure custom domain
4. SSL is automatically provisioned

### Option 3: Traditional Web Hosting

1. Build the project locally: `npm run build`
2. Upload contents of `dist` folder to web server
3. Configure web server for SPA routing
4. Set up SSL certificate
5. Configure contact form backend

## Environment Configuration

### Production Environment Variables

Create a `.env.production` file (not committed to Git):

```env
VITE_SITE_URL=https://haven-coin.com
VITE_GA_MEASUREMENT_ID=GA_MEASUREMENT_ID
VITE_CONTACT_FORM_ENDPOINT=your-form-endpoint
```

### Analytics Setup

1. Create Google Analytics 4 property
2. Replace `GA_MEASUREMENT_ID` in index.html
3. Verify tracking is working

### Contact Form Setup

The contact forms require a backend service. Options include:

1. **Netlify Forms** (if using Netlify)
2. **Formspree** or similar service
3. **Custom backend** with email service

## SEO Configuration

### Google Search Console

1. Verify domain ownership
2. Submit sitemap: `https://haven-coin.com/sitemap.xml`
3. Monitor indexing status

### Local Business Listings

1. Google My Business
2. Bing Places
3. Local directories

## Performance Monitoring

### Core Web Vitals

Monitor these metrics:
- Largest Contentful Paint (LCP)
- First Input Delay (FID)
- Cumulative Layout Shift (CLS)

### Tools

- Google PageSpeed Insights
- GTmetrix
- WebPageTest
- Lighthouse

## Security Considerations

1. **HTTPS**: Always use SSL/TLS
2. **Headers**: Configure security headers
3. **Content Security Policy**: Implement CSP
4. **Regular Updates**: Keep dependencies updated

## Backup Strategy

1. **Code**: Git repository serves as backup
2. **Analytics**: Export data regularly
3. **Content**: Document any manual content changes

## Monitoring

### Uptime Monitoring

Set up monitoring for:
- Website availability
- Page load times
- Form submissions
- Analytics tracking

### Error Tracking

Consider implementing:
- JavaScript error tracking
- Performance monitoring
- User experience analytics

## Post-Deployment Checklist

- [ ] Website loads correctly
- [ ] All pages are accessible
- [ ] Contact forms work
- [ ] Analytics tracking active
- [ ] SEO meta tags present
- [ ] Mobile responsiveness verified
- [ ] Performance scores acceptable
- [ ] SSL certificate active
- [ ] Search console configured
- [ ] Sitemap submitted

## Maintenance

### Regular Tasks

- Monitor website performance
- Update content as needed
- Review analytics data
- Check for broken links
- Update dependencies
- Backup important data

### Updates

When making updates:
1. Test changes locally
2. Deploy to staging (if available)
3. Deploy to production
4. Verify functionality
5. Monitor for issues

## Support

For technical support or questions about deployment:
- Review this documentation
- Check the main README.md
- Contact the development team

---

Last updated: January 2024