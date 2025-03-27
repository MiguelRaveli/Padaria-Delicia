document.addEventListener('DOMContentLoaded', function() {
    // Menu Mobile
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const nav = document.querySelector('nav');
    
    mobileMenuBtn.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
    
    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
        });
    });
    
    // Filtro do Cardápio
    if (document.querySelector('.cardapio-categorias')) {
        const filterButtons = document.querySelectorAll('.cardapio-categorias button');
        const menuItems = document.querySelectorAll('.cardapio-item');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove a classe active de todos os botões
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Adiciona a classe active ao botão clicado
                this.classList.add('active');
                
                const filter = this.getAttribute('data-categoria');
                
                menuItems.forEach(item => {
                    if (filter === 'todos' || item.getAttribute('data-categoria') === filter) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // Tabs de Vídeos e Fotos
    if (document.querySelector('.media-tabs')) {
        const tabButtons = document.querySelectorAll('.media-tabs button');
        const tabContents = document.querySelectorAll('.media-gallery');
        
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove a classe active de todos os botões
                tabButtons.forEach(btn => btn.classList.remove('active'));
                
                // Adiciona a classe active ao botão clicado
                this.classList.add('active');
                
                const tabId = this.getAttribute('data-tab') + '-tab';
                
                tabContents.forEach(content => {
                    if (content.id === tabId) {
                        content.style.display = 'block';
                    } else {
                        content.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // Formulário de Login
    if (document.getElementById('loginForm')) {
        const loginForm = document.getElementById('loginForm');
        
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aqui você pode adicionar a lógica de autenticação
            const email = this.querySelector('input[type="email"]').value;
            const password = this.querySelector('input[type="password"]').value;
            
            console.log('Email:', email);
            console.log('Password:', password);
            
            // Simulando um login bem-sucedido
            alert('Login realizado com sucesso!');
            this.reset();
        });
    }
    
    // Animação ao rolar a página
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        if (scrollPosition > 100) {
            document.querySelector('header').style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            document.querySelector('header').style.boxShadow = 'none';
        }
    });
    
    // Efeito de hover nos cards
    const cards = document.querySelectorAll('.destaque-item, .cardapio-item, .video-item');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
});