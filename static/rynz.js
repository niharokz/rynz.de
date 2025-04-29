(() => {
    const toggleButton = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    if (!toggleButton) {
        console.warn('Theme toggle button not found');
        return;
    }

    // Set initial theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        htmlElement.removeAttribute('data-theme');
        toggleButton.innerHTML = '🌙';
    } else if (savedTheme === 'dark' || (!savedTheme && prefersDark.matches)) {
        htmlElement.setAttribute('data-theme', 'dark');
        toggleButton.innerHTML = '☀️';
    } else {
        htmlElement.setAttribute('data-theme', 'dark'); // Default from index.html
        toggleButton.innerHTML = '☀️';
    }

    toggleButton.addEventListener('click', () => {
        if (htmlElement.getAttribute('data-theme') === 'dark') {
            htmlElement.removeAttribute('data-theme');
            toggleButton.innerHTML = '🌙';
            localStorage.setItem('theme', 'light');
        } else {
            htmlElement.setAttribute('data-theme', 'dark');
            toggleButton.innerHTML = '☀️';
            localStorage.setItem('theme', 'dark');
        }
    });

    toggleButton.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleButton.click();
        }
    });

    // Smooth scrolling for navbar links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = anchor.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });
})();