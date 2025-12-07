/**
 * Header Image Loader Script
 * 
 * This script ensures that header images (logo and social icons) are loaded with the correct
 * path regardless of the current page's location within the site hierarchy.
 * 
 * It resolves paths dynamically by calculating the relative path to the root directory,
 * allowing components to be reused across different page depths.
 * 
 * Author: SMVDU Web Development Team
 * Last Updated: 2025
 */

document.addEventListener('DOMContentLoaded', function () {
  // Wait a short time for the header elements to be loaded through AJAX
  setTimeout(loadHeaderImages, 200);
});

/**
 * Main function to load all header images with the correct paths
 * This runs after the header component is loaded into the DOM
 */
function loadHeaderImages() {
  console.log('Loading header images...');

  // Get the path to root
  let pathToRoot = '';

  // First, try to use the global pathToRoot if available from script.js
  if (window.pathToRoot) {
    console.log('Using global pathToRoot:', window.pathToRoot);
    pathToRoot = window.pathToRoot;
  } else {
    // Fallback to calculating it based on the current page URL
    const currentPath = window.location.pathname;
    console.log('Current path:', currentPath);

    // Count directory levels to build the correct relative path
    const segments = currentPath.split('/').filter(segment => segment.length > 0);
    console.log('Path segments:', segments);

    for (let i = 0; i < segments.length - 1; i++) {
      pathToRoot += '../';
    }

    // If we're at the root, pathToRoot will be empty, so set it to "./"
    if (pathToRoot === '') {
      pathToRoot = './';
    }

    console.log('Calculated pathToRoot:', pathToRoot);
  }

  // Set the image sources using the determined path
  setImageSources(pathToRoot);

  // Update the Last Updated date
  updateLastUpdatedDate();
}

/**
 * Sets the src attribute for all header images
 * 
 * @param {string} pathToRoot - The relative path to the website root directory
 */
function setImageSources(pathToRoot) {
  // Get references to all header image elements
  const smvduLogo = document.getElementById('smvdu-logo');
  const tcsLogo = document.getElementById('tcs-accredited-logo');
  const instagramIcon = document.getElementById('instagram-icon');
  const facebookLogo = document.getElementById('facebook-logo');
  const linkedinIcon = document.getElementById('linkedin-icon');
  const xIcon = document.getElementById('x-icon');
  const youtubeIcon = document.getElementById('youtube-icon');

  // Footer icons
  const footerInstagramIcon = document.getElementById('footer-instagram-icon');
  const footerFacebookLogo = document.getElementById('footer-facebook-logo');
  const footerLinkedinIcon = document.getElementById('footer-linkedin-icon');
  const footerXIcon = document.getElementById('footer-x-icon');
  const footerYoutubeIcon = document.getElementById('footer-youtube-icon');

  // Set the SMVDU logo path (with fallback for non-home pages)
  if (smvduLogo) {
    let logoPath = pathToRoot + 'images/smvdu-logo.png';
    smvduLogo.onerror = function () {
      // Fallback for non-home pages if pathToRoot is wrong
      this.onerror = null;
      this.src = '../../images/smvdu-logo.png';
    };
    smvduLogo.src = logoPath;
  } else {
    console.warn('smvdu-logo element not found');
  }

  // Set the TCS accredited logo path (with fallback for non-home pages)
  if (tcsLogo) {
    let tcsLogoPath = pathToRoot + 'images/tcs-accredited.png';
    tcsLogo.onerror = function () {
      // Fallback for non-home pages if pathToRoot is wrong
      this.onerror = null;
      // Try multiple fallback paths based on depth
      const currentPath = window.location.pathname;
      const segments = currentPath.split('/').filter(segment => segment.length > 0 && segment !== 'index.html');
      if (segments.length > 2) {
        this.src = '../../../images/tcs-accredited.png';
      } else {
        this.src = '../../images/tcs-accredited.png';
      }
    };
    tcsLogo.src = tcsLogoPath;
  } else {
    console.warn('tcs-accredited-logo element not found');
  }

  // Set the social media icon paths if the elements exist (with fallback)
  if (instagramIcon) {
    instagramIcon.onerror = function () { this.onerror = null; this.src = '../../images/instagram-icon.png'; };
    instagramIcon.src = pathToRoot + 'images/instagram-icon.png';
  }
  if (facebookLogo) {
    facebookLogo.onerror = function () { this.onerror = null; this.src = '../../images/facebook-logo.png'; };
    facebookLogo.src = pathToRoot + 'images/facebook-logo.png';
  }
  if (linkedinIcon) {
    linkedinIcon.onerror = function () { this.onerror = null; this.src = '../../images/linkedin-icon.png'; };
    linkedinIcon.src = pathToRoot + 'images/linkedin-icon.png';
  }
  if (xIcon) {
    xIcon.onerror = function () { this.onerror = null; this.src = '../../images/x-icon.png'; };
    xIcon.src = pathToRoot + 'images/x-icon.png';
  }
  if (youtubeIcon) {
    youtubeIcon.onerror = function () { this.onerror = null; this.src = '../../images/youtube-icon.png'; };
    youtubeIcon.src = pathToRoot + 'images/youtube-icon.png';
  }

  // Set footer social media icon paths
  if (footerInstagramIcon) {
    footerInstagramIcon.onerror = function () { this.onerror = null; this.src = '../../images/instagram-icon.png'; };
    footerInstagramIcon.src = pathToRoot + 'images/instagram-icon.png';
  }
  if (footerFacebookLogo) {
    footerFacebookLogo.onerror = function () { this.onerror = null; this.src = '../../images/facebook-logo.png'; };
    footerFacebookLogo.src = pathToRoot + 'images/facebook-logo.png';
  }
  if (footerLinkedinIcon) {
    footerLinkedinIcon.onerror = function () { this.onerror = null; this.src = '../../images/linkedin-icon.png'; };
    footerLinkedinIcon.src = pathToRoot + 'images/linkedin-icon.png';
  }
  if (footerXIcon) {
    footerXIcon.onerror = function () { this.onerror = null; this.src = '../../images/x-icon.png'; };
    footerXIcon.src = pathToRoot + 'images/x-icon.png';
  }
  if (footerYoutubeIcon) {
    footerYoutubeIcon.onerror = function () { this.onerror = null; this.src = '../../images/youtube-icon.png'; };
    footerYoutubeIcon.src = pathToRoot + 'images/youtube-icon.png';
  }
}

/**
 * Updates the Last Updated date in the top bar
 */
function updateLastUpdatedDate() {
  const dateElement = document.getElementById('last-updated-date');
  if (dateElement) {
    const now = new Date();
    const day = now.getDate();
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = monthNames[now.getMonth()];
    const year = now.getFullYear();

    // Add ordinal suffix to day
    const getOrdinal = (n) => {
      const s = ['th', 'st', 'nd', 'rd'];
      const v = n % 100;
      return n + (s[(v - 20) % 10] || s[v] || s[0]);
    };

    dateElement.textContent = getOrdinal(day) + ' ' + month + ', ' + year;
  }
} 