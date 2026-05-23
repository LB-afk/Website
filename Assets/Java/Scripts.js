document.addEventListener("ComponentsLoaded", () => {
//Contact
    const contactBtn = document.getElementById('contact-btn');
    const contactInfo = document.getElementById('contact-info');



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
   
//Menu
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', (event) => {
            event.stopPropagation();
            mobileMenu.classList.toggle('hidden');

        document.addEventListener('click', (event) => {
              if (!contactInfo.contains(event.target) && !contactInfo.classList.contains('hidden')) {
                contactInfo.classList.add('hidden');
            }
        });
        
    });
    }
});