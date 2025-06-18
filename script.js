// Мобільне меню
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.createElement('div');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('header .container').appendChild(menuToggle);

    const nav = document.querySelector('nav ul');
    menuToggle.addEventListener('click', function() {
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });

    // Закриття меню при кліку на пункт
    document.querySelectorAll('nav ul li a').forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                nav.style.display = 'none';
            }
        });

        const userIcon = document.getElementById('user-icon');
    
        // Імітація перевірки: заміни це на справжню перевірку (наприклад, через кукі чи локальне сховище)
        const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    
        if (userIcon) {
            userIcon.addEventListener('click', function (e) {
                e.preventDefault();
                if (isLoggedIn) {
                    window.location.href = 'profile.html';
                } else {
                    window.location.href = 'login.html';
                }
            });
        }
        
    });
    
});