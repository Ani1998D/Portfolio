// Wait for the document to be ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded'); // Debug log
    
    // Get the toggle button
    const toggle = document.getElementById('darkModeToggle');
    console.log('Toggle button found:', !!toggle); // Debug log
    
    // Check for existing theme preference
    const darkMode = localStorage.getItem('darkMode') === 'true';
    console.log('Initial dark mode:', darkMode); // Debug log
    
    // Set initial state
    if (darkMode) {
        document.documentElement.classList.add('dark');
    }
    
    // Add click handler
    toggle.addEventListener('click', function() {
        // Toggle dark class on html element
        document.documentElement.classList.toggle('dark');
        
        // Save preference
        const isDark = document.documentElement.classList.contains('dark');
        localStorage.setItem('darkMode', isDark);
        
        console.log('Dark mode toggled:', isDark); // Debug log
    });
});
