// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

// Adicionar evento de clique nos botões "Peça Agora"
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    if (this.textContent.trim() === 'Peça Agora') {
      e.preventDefault();
      showNotification('Item adicionado ao carrinho! 🎉');
    }
  });
});

// Notificação Toast
function showNotification(message) {
  // Criar elemento de notificação
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  
  // Adicionar ao DOM
  document.body.appendChild(notification);
  
  // Adicionar animação de entrada
  setTimeout(() => {
    notification.classList.add('show');
  }, 10);
  
  // Remover após 3 segundos
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 3000);
}

// Animar elementos ao fazer scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observar todas as seções
document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// Menu hambúrguer para mobile (funcionalidade básica)
function setupMobileMenu() {
  const navbar = document.querySelector('.navbar');
  const header = document.querySelector('.header');
  
  // Fechar menu ao clicar em um link
  document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 768) {
        navbar.style.display = 'none';
        setTimeout(() => {
          navbar.style.display = '';
        }, 500);
      }
    });
  });
}

// Inicializar ao carregar a página
document.addEventListener('DOMContentLoaded', setupMobileMenu);

// Re-inicializar ao redimensionar a janela
window.addEventListener('resize', setupMobileMenu);
