document.addEventListener("DOMContentLoaded", () => {
  
  // 1. Check if we are inside the Pages folder
  const isSubPage = window.location.pathname.includes('/Pages/');

  // 2. Set the exact, correct relative paths for both scenarios
  // If in Pages, go up one level (../) directly to Components.
  // If on index, go into ./Assets/Components.
  const headerUrl = isSubPage ? '../Components/header.html' : './Assets/Components/header.html';
  const footerUrl = isSubPage ? '../Components/footer.html' : './Assets/Components/footer.html';

  // 3. Fetch using our corrected URLs
  const fetchHeader = fetch(headerUrl)
    .then(response => response.text())
    .then(data => {
      document.getElementById("header").innerHTML = data;
    });

  const fetchFooter = fetch(footerUrl)
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    });

  // 4. Wait for both to finish
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

// ... Keep your existing document.addEventListener("ComponentsLoaded" ... code down here!