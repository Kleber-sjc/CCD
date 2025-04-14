// Script para detectar o modo escuro
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    if (event.matches) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
});

// Script para o menu móvel e outras funcionalidades
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });
    
    // Script para validação do formulário
    const form = document.getElementById('inscricao-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const cidade = document.getElementById('cidade').value;
            
            if (!nome || !email || !cidade) {
                alert('Por favor, preencha todos os campos.');
                return;
            }
            
            document.getElementById('sucesso').classList.remove('hidden');
            form.reset();
            
            setTimeout(() => {
                document.getElementById('sucesso').classList.add('hidden');
            }, 5000);
        });
    }
    
    // Scroll suave para links de navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
        // Seu código existente...
        
        const backgroundAudio = document.getElementById('background-audio');
        if (backgroundAudio) {
            backgroundAudio.volume = 0.5; // Ajusta o volume para 50%
            backgroundAudio.play().catch(error => {
                console.log("Erro ao tentar tocar o áudio:", error);
            });
        }
    });
});