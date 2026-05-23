document.addEventListener("DOMContentLoaded", () => {
  
  // 1. Determine path based on folder depth (Crucial for GitHub Pages!)
  const basePath = window.location.pathname.includes('/Pages/') ? '../' : './';

  // 2. Fetch using the relative basePath
  const fetchHeader = fetch(`${basePath}/Components/header.html`)
    .then(response => response.text())
    .then(data => {
      document.getElementById("header").innerHTML = data;
    });

  const fetchFooter = fetch(`/${basePath}/Components/footer.html`)
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    });

  // 3. Wait for both to finish
  Promise.all([fetchHeader, fetchFooter]).then(() => {
    // Fade the website in
    document.body.classList.add("is-loaded");
    
    // FIRE THE FLARE! 
    const readyEvent = new Event("ComponentsLoaded");
    document.dispatchEvent(readyEvent);
  }).catch(error => {
      console.error("Failed to load components:", error);
  });
});

// 4. Catch the flare to initialize your buttons!
document.addEventListener("ComponentsLoaded", () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const contactBtn = document.getElementById('contact-btn');
    const contactInfo = document.getElementById('contact-info');

    // Make sure elements exist before adding listeners
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', (event) => {
            event.stopPropagation();
            mobileMenu.classList.toggle('hidden');
        });
    }

    if (contactBtn && contactInfo) {
        contactBtn.addEventListener('click', (event) => {
            event.stopPropagation();
            contactInfo.classList.toggle('hidden');
        });
    }

    // Close dropdowns when clicking anywhere else
    document.addEventListener('click', (event) => {
        if (mobileMenu && !mobileMenu.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
            mobileMenu.classList.add('hidden');
        }
        if (contactInfo && !contactInfo.contains(event.target) && !contactBtn.contains(event.target)) {
            contactInfo.classList.add('hidden');
        }
    });
});