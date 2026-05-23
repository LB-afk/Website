// Scripts.js

// Wait for the specific flare from loader.js
document.addEventListener("ComponentsLoaded", () => {
    
    const contactBtn = document.getElementById('contact-btn');
    const contactInfo = document.getElementById('contact-info');

    // Make sure the buttons actually exist on this page
    if (contactBtn && contactInfo) {
        
        contactBtn.addEventListener('click', (event) => {
            event.stopPropagation(); 
            contactInfo.classList.toggle('hidden');
        });

        document.addEventListener('click', (event) => {
            if (!contactInfo.contains(event.target) && !contactInfo.classList.contains('hidden')) {
                contactInfo.classList.add('hidden');
            }
        });
    }
});