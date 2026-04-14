// Carregar posts do localStorage
function loadPosts() {
    const posts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
    
    // Filtrar apenas posts publicados
    const publishedPosts = posts.filter(p => p.status === 'published');
    
    // Ordenar por data (mais recente primeiro)
    publishedPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    return publishedPosts;
}

// Renderizar posts no grid
function renderPosts(postsToRender = null) {
    const posts = postsToRender || loadPosts();
    const grid = document.getElementById('postsGrid');
    
    if (!grid) return;
    
    if (posts.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 4rem 2rem;">
                <h3 style="font-family: 'Cormorant Garamond', serif; color: var(--borgonha); margin-bottom: 1rem;">
                    Nenhum artigo encontrado
                </h3>
                <p style="color: var(--cinza-medio);">
                    Ainda não há artigos publicados nesta categoria.
                </p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = posts.map(post => `
        <article class="article-card" data-category="${post.category}">
            ${post.image ? `
                <div class="article-image">
                    <img src="${post.image}" alt="${post.title}">
                </div>
            ` : ''}
            <div class="article-content">
                <span class="article-category">${post.category}</span>
                <h3>${post.title}</h3>
                <p class="article-excerpt">${post.excerpt || extractExcerpt(post.content)}</p>
                <div class="article-meta">
                    <span>📅 ${formatDate(post.date)}</span>
                    <span>👁️ ${post.views || 0} visualizações</span>
                </div>
                <a href="artigo.html?id=${post.id}" class="cta-button">Ler Artigo Completo →</a>
            </div>
        </article>
    `).join('');
}

// Extrair excerpt do conteúdo HTML
function extractExcerpt(htmlContent) {
    const div = document.createElement('div');
    div.innerHTML = htmlContent;
    const text = div.textContent || div.innerText || '';
    return text.substring(0, 200) + '...';
}

// Formatar data
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' });
}

// Renderizar posts recentes na sidebar
function renderRecentPosts() {
    const posts = loadPosts();
    const recent = posts.slice(0, 5);
    const recentList = document.getElementById('recentPostsList');
    
    if (!recentList) return;
    
    recentList.innerHTML = recent.map(post => `
        <li class="recent-post-item">
            <a href="artigo.html?id=${post.id}">
                <div class="recent-post-title">${post.title}</div>
                <div class="recent-post-date">${formatDate(post.date)}</div>
            </a>
        </li>
    `).join('');
}

// Renderizar post em destaque
function renderFeaturedPost() {
    const posts = loadPosts();
    if (posts.length === 0) return;
    
    const featured = posts[0]; // Mais recente
    const featuredSection = document.getElementById('featuredPost');
    
    if (!featuredSection) return;
    
    featuredSection.innerHTML = `
        <span class="featured-badge">✨ DESTAQUE</span>
        ${featured.image ? `
            <div class="featured-image">
                <img src="${featured.image}" alt="${featured.title}">
            </div>
        ` : ''}
        <div class="featured-content">
            <span class="featured-category">${featured.category} • INVESTIGAÇÃO CLÍNICA</span>
            <h2>${featured.title}</h2>
            <p>${featured.excerpt || extractExcerpt(featured.content)}</p>
            <a href="artigo.html?id=${featured.id}" class="cta-button">Ler Artigo Completo →</a>
        </div>
    `;
}

// Filtrar posts por categoria
function filterByCategory(category) {
    const posts = loadPosts();
    
    if (category === 'all') {
        renderPosts(posts);
        return;
    }
    
    const filtered = posts.filter(p => p.category === category);
    renderPosts(filtered);
}

// Buscar posts
function searchPosts(searchTerm) {
    const posts = loadPosts();
    const term = searchTerm.toLowerCase();
    
    const filtered = posts.filter(p => 
        p.title.toLowerCase().includes(term) ||
        p.content.toLowerCase().includes(term) ||
        (p.excerpt && p.excerpt.toLowerCase().includes(term))
    );
    
    renderPosts(filtered);
}

// Inicializar ao carregar página
document.addEventListener('DOMContentLoaded', function() {
    // Renderizar posts
    renderPosts();
    renderFeaturedPost();
    renderRecentPosts();
    
    // Setup filtros
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            filterByCategory(this.getAttribute('data-category'));
        });
    });
    
    // Setup busca
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            searchPosts(this.value);
        });
    }
});
