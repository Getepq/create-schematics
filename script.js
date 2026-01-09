document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.style.opacity = '0.5';
        });
    });

    console.log('Site loaded successfully');
});
