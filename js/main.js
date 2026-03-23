/**
 * InternHub Main Script
 * Handles dynamic component loading and UI consistency.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Load components
    const componentContainers = document.querySelectorAll('[data-component]');
    
    componentContainers.forEach(container => {
        const componentName = container.getAttribute('data-component');
        
        // 1. Try to load from the pre-defined strings (bypasses CORS)
        if (window.INTERNHUB_COMPONENTS && window.INTERNHUB_COMPONENTS[componentName]) {
            container.innerHTML = window.INTERNHUB_COMPONENTS[componentName];
            highlightActiveLinks(container);
        } 
        // 2. Fallback to fetch if the string isn't found
        else {
            fetch(`components/${componentName}.html`)
                .then(response => {
                    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                    return response.text();
                })
                .then(html => {
                    container.innerHTML = html;
                    highlightActiveLinks(container);
                })
                .catch(err => {
                    console.error('Error loading component:', err);
                });
        }
    });

    function highlightActiveLinks(container) {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const links = container.querySelectorAll('a');
        links.forEach(link => {
            const href = link.getAttribute('href');
            // Support both direct filenames and full paths
            if (href === currentPage || (currentPage === '' && href === 'index.html')) {
                link.classList.add('active');
            }
        });
    }
});
