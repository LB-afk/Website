// loader.js
document.addEventListener("DOMContentLoaded", () => {
  
  const fetchHeader = fetch("/Assets/Components/header.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("header").innerHTML = data;
    });

  const fetchFooter = fetch("/Assets/Components/footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    });

  Promise.all([fetchHeader, fetchFooter]).then(() => {
    // Fade the website in
    document.body.classList.add("is-loaded");
    
    // FIRE THE FLARE! 
    // We create a custom event named "ComponentsLoaded" and broadcast it.
    const readyEvent = new Event("ComponentsLoaded");
    document.dispatchEvent(readyEvent);
  });
});