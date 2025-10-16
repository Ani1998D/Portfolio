tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // Light mode colors
                'light-primary': '#0000FF',    // Blue
                'light-secondary': '#0047AB',  // Cobalt Blue
                'light-bg': '#FFFFFF',         // White
                
                // Dark mode colors
                'dark-primary': '#800080',     // Purple
                'dark-secondary': '#8A2BE2',   // Violet
                'dark-accent': '#FF69B4',      // Pink
                'dark-bg': '#000000',          // Black
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out',
                'slide-up': 'slideUp 0.6s ease-out',
                'slide-in-left': 'slideInLeft 0.6s ease-out',
                'slide-in-right': 'slideInRight 0.6s ease-out',
            }
        }
    }
};
