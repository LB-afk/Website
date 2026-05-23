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

    const filterSidebar = document.getElementById('filter-sidebar');
    const openFiltersBtn = document.getElementById('open-filters-btn');
    const closeFiltersBtn = document.getElementById('close-filters-btn');
    const filterOverlay = document.getElementById('filter-overlay');

    if (filterSidebar && openFiltersBtn) {
        openFiltersBtn.addEventListener('click', () => {
            filterSidebar.classList.remove('-translate-x-full');
            if (filterOverlay) filterOverlay.classList.remove('hidden');
            // Prevent body scrolling when sidebar is open
            document.body.style.overflow = 'hidden';
        });
    }

    function closeSidebar() {
        if (filterSidebar) {
            filterSidebar.classList.add('-translate-x-full');
            if (filterOverlay) filterOverlay.classList.add('hidden');
            document.body.style.overflow = '';
        }
    }

    if (closeFiltersBtn) closeFiltersBtn.addEventListener('click', closeSidebar);
    if (filterOverlay) filterOverlay.addEventListener('click', closeSidebar);
});