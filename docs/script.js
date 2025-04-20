// --- Script para Menu Mobile ---
const btn = document.getElementById('mobile-menu-button');
const menu = document.getElementById('mobile-menu');
const mobileLinks = menu.querySelectorAll('.mobile-menu-link'); // Adicione a classe 'mobile-menu-link' aos links do menu mobile no HTML

if (btn && menu) {
    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
        // Opcional: Mudar ícone do botão (hamburger/close)
        // btn.innerHTML = menu.classList.contains('hidden') ? '<svg>Hamburger</svg>' : '<svg>Close</svg>';
    });

    // Fecha o menu ao clicar em um link
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('hidden');
             // Resetar ícone se mudou
             // btn.innerHTML = '<svg>Hamburger</svg>';
        });
    });
} else {
    console.error("Botão ou menu mobile não encontrado no DOM.");
}


// --- Opcional: Script para Dark Mode Toggle ---
/*
const darkModeToggle = document.getElementById('dark-mode-toggle');
const darkModeToggleMobile = document.getElementById('dark-mode-toggle-mobile');
const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const currentTheme = localStorage.getItem('theme');

// Aplica o tema na carga inicial
if (currentTheme === 'dark' || (!currentTheme && userPrefersDark)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}

function toggleDarkMode() {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
}

if (darkModeToggle) {
    darkModeToggle.addEventListener('click', toggleDarkMode);
}
if (darkModeToggleMobile) {
    darkModeToggleMobile.addEventListener('click', toggleDarkMode);
}
*/