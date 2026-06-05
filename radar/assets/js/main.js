// Radar de Preços - JavaScript Principal com Afiliados

document.addEventListener('DOMContentLoaded', function() {
    loadOffers();
    loadNews();
    setupEventListeners();
});

// Configurações de afiliado
const AFFILIATE_CONFIG = {
    amazon: {
        tag: 'radar041-20',
        domain: 'amazon.com.br'
    },
    mercadolivre: {
        ref: 'radar041',
        domain: 'mercadolivre.com.br'
    }
};

// Função para converter URL para afiliado
function convertToAffiliateUrl(url) {
    if (!url) return url;
    
    // Amazon
    if (url.includes('amazon.com.br')) {
        let newUrl = url.replace(/tag=[^&]*/g, '');
        const separator = newUrl.includes('?') ? '&' : '?';
        return newUrl + separator + 'tag=' + AFFILIATE_CONFIG.amazon.tag;
    }
    
    // Mercado Livre
    if (url.includes('mercadolivre.com.br')) {
        let newUrl = url.replace(/ref=[^&]*/g, '');
        const separator = newUrl.includes('?') ? '&' : '?';
        return newUrl + separator + 'ref=' + AFFILIATE_CONFIG.mercadolivre.ref;
    }
    
    return url;
}

// Dados de exemplo com URLs de afiliado
const sampleOffers = [
    {
        id: 1,
        title: "Whey Protein Concentrado 100% 900g",
        price: "R$ 159,90",
        originalPrice: "R$ 249,90",
        discount: "68% OFF",
        badge: "OFERTA NINJA",
        store: "Amazon",
        url: "https://www.amazon.com.br/dp/B0CX9257Z8"
    },
    {
        id: 2,
        title: "Creatina Monohidratada Pura 500g",
        price: "R$ 44,90",
        originalPrice: "R$ 129,00",
        discount: "65% OFF",
        badge: "OFERTA NINJA",
        store: "Mercado Livre",
        url: "https://www.mercadolivre.com.br/creatina"
    },
    {
        id: 3,
        title: "Cooktop 4 Gás Fischer 4 Bocas",
        price: "R$ 332,10",
        originalPrice: "R$ 614,14",
        discount: "58% OFF",
        badge: "OFERTA NINJA",
        store: "Shopee",
        url: "https://shopee.com.br/cooktop"
    },
    {
        id: 4,
        title: "Parafusadeira Furadeira C/ 2 Baterias",
        price: "R$ 125,99",
        originalPrice: "R$ 245,00",
        discount: "49% OFF",
        badge: "OFERTA NINJA",
        store: "Amazon",
        url: "https://www.amazon.com.br/dp/B0D4X5Y9Z2"
    },
    {
        id: 5,
        title: "Kit 10 Pote De Vidro Marmético",
        price: "R$ 67,16",
        originalPrice: "R$ 155,00",
        discount: "57% OFF",
        badge: "OFERTA NINJA",
        store: "Mercado Livre",
        url: "https://www.mercadolivre.com.br/pote-vidro"
    },
    {
        id: 6,
        title: "Celular Samsung Galaxy A15",
        price: "R$ 899,00",
        originalPrice: "R$ 1.299,00",
        discount: "31% OFF",
        badge: "OFERTA NINJA",
        store: "Amazon",
        url: "https://www.amazon.com.br/dp/B0CX9257Z8"
    }
];

const sampleNews = [
    {
        id: 1,
        date: "05 JUN",
        title: "🔥 Mega Promoção do Mercado Livre: Até 70% OFF em Eletrônicos",
        excerpt: "O Mercado Livre iniciou uma mega promoção com descontos de até 70% em eletrônicos.",
        category: "Eletrônicos",
        readTime: "5 min"
    },
    {
        id: 2,
        date: "04 JUN",
        title: "💰 Amazon Brasil Lança Cupons Exclusivos para Membros Prime",
        excerpt: "Membros do Amazon Prime agora têm acesso a cupons exclusivos com descontos de até 50%.",
        category: "Cupons",
        readTime: "3 min"
    },
    {
        id: 3,
        date: "03 JUN",
        title: "👕 Promoção de Moda: Grandes Marcas com Até 60% de Desconto",
        excerpt: "Marcas renomadas de moda estão oferecendo descontos incríveis em roupas e calçados.",
        category: "Moda",
        readTime: "4 min"
    }
];

// Carregar ofertas
function loadOffers() {
    const offersGrid = document.getElementById('offersGrid');
    if (!offersGrid) return;

    offersGrid.innerHTML = '';
    
    sampleOffers.forEach(offer => {
        const affiliateUrl = convertToAffiliateUrl(offer.url);
        const offerCard = document.createElement('div');
        offerCard.className = 'offer-card';
        offerCard.innerHTML = `
            <div class="offer-image" style="position: relative;">
                <span class="offer-badge">${offer.badge}</span>
            </div>
            <div class="offer-title">${offer.title}</div>
            <div style="padding: 0 15px;">
                <div style="color: #9ca3af; text-decoration: line-through; font-size: 0.9rem;">
                    ${offer.originalPrice}
                </div>
            </div>
            <div class="offer-price">${offer.price}</div>
            <div style="padding: 0 15px 15px; display: flex; justify-content: space-between; align-items: center;">
                <span style="background: #dbeafe; color: #1e3a8a; padding: 4px 8px; border-radius: 4px; font-size: 0.8rem; font-weight: bold;">
                    ${offer.discount}
                </span>
                <span style="font-size: 0.8rem; color: #6b7280;">${offer.store}</span>
            </div>
            <a href="${affiliateUrl}" target="_blank" style="display: block; padding: 12px 15px; background: #f59e0b; color: white; text-align: center; text-decoration: none; font-weight: bold; border-radius: 0 0 12px 12px; transition: all 0.3s;">
                🛒 Ir para a Loja
            </a>
        `;
        offersGrid.appendChild(offerCard);
    });
}

// Carregar notícias
function loadNews() {
    const newsGrid = document.getElementById('newsGrid');
    if (!newsGrid) return;

    newsGrid.innerHTML = '';
    
    sampleNews.forEach(news => {
        const newsCard = document.createElement('div');
        newsCard.className = 'news-card';
        newsCard.innerHTML = `
            <div class="news-date">
                <span class="day">${news.date.split(' ')[0]}</span>
                <span class="month">${news.date.split(' ')[1]}</span>
            </div>
            <div class="news-title">${news.title}</div>
            <div class="news-excerpt">${news.excerpt}</div>
            <div style="padding: 0 15px 15px; display: flex; justify-content: space-between; align-items: center; font-size: 0.8rem;">
                <span style="background: #f59e0b; color: white; padding: 4px 12px; border-radius: 20px; font-weight: 600;">
                    ${news.category}
                </span>
                <span style="color: #9ca3af;">${news.readTime}</span>
            </div>
        `;
        newsGrid.appendChild(newsCard);
    });
}

// Setup de event listeners
function setupEventListeners() {
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            alert(`✅ Inscrição realizada com sucesso! Você receberá ofertas em: ${email}`);
            this.reset();
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}

function toggleCategory(element) {
    const content = element.nextElementSibling;
    const icon = element.querySelector('.toggle-icon');
    
    if (content) {
        content.classList.toggle('open');
        if (icon) {
            icon.style.transform = content.classList.contains('open') ? 'rotate(180deg)' : 'rotate(0)';
        }
    }
}

console.log('✅ Radar de Preços carregado com sucesso! Afiliado: radar041-20');
