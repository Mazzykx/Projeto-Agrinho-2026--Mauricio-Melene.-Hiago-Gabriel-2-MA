// Base de dados: árvores ameaçadas + informações de sementes e prevenção
const treesData = [
    {
        name: "Pau-Brasil",
        scientific: "Paubrasilia echinata",
        status: "Em perigo (IUCN)",
        imgBg: "url('https://images.unsplash.com/photo-1622737133809-d95047b9e673?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')",
        seedDescription: "Semente lenhosa, pequena e achatada, dispersa por pássaros. Coleta deve ser autorizada; germinação lenta mas viável.",
        howHelp: "Evite comprar móveis de pau-brasil ilegal; apoie projetos de restauração na Mata Atlântica."
    },
    {
        name: "Araucária",
        scientific: "Araucaria angustifolia",
        status: "Criticamente em perigo",
        imgBg: "url('https://images.unsplash.com/photo-1594652478246-9befd602b7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')",
        seedDescription: "Pinhão (semente comestível) – fundamental para fauna. Armazenar em local fresco e estratificar para germinar.",
        howHelp: "Não coletar pinhões em excesso, plantar mudas de araucária em áreas de altitude, proteger remanescentes."
    },
    {
        name: "Jacarandá-da-Bahia",
        scientific: "Dalbergia nigra",
        status: "Ameaçada (exploração madeireira)",
        imgBg: "url('https://images.unsplash.com/photo-1601834656876-6e6ed6d6eb6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')",
        seedDescription: "Sementes tipo sâmara, aladas. Germinação fácil em substrato arenoso. Conservação ex situ em jardins botânicos.",
        howHelp: "Denuncie comércio ilegal, plante jacarandá em restauração ecológica."
    },
    {
        name: "Castanheira",
        scientific: "Bertholletia excelsa",
        status: "Vulnerável (sobre-exploração)",
        imgBg: "url('https://images.unsplash.com/photo-1551301097-811b5f9e2d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')",
        seedDescription: "Castanhas (sementes gigantes) dentro de ouriço. Dependente de abelhas para polinização. Ideais para replantio.",
        howHelp: "Consumir castanha com certificação de origem sustentável, apoiar cooperativas extrativistas."
    }
];

// Dados para sementes em destaque
const seedsExtra = [
    { name: "Pinhão da Araucária", icon: "🌰", description: "Alimento e semente; germinação após quebra de dormência natural. Coleta consciente." },
    { name: "Semente de Pau-Brasil", icon: "🫘", description: "Rica em tanino, precisa de tratamento pré-germinativo. Essencial para recuperação." },
    { name: "Ouriço da Castanheira", icon: "🌰", description: "Cada ouriço contém até 20 castanhas. Dispersão primária por roedores." },
    { name: "Sâmara do Jacarandá", icon: "🍂", description: "Dispersão pelo vento, fácil cultivo em viveiro. Muito procurada por projetos." }
];

// Função para renderizar os cards de árvores
function renderTreeCards() {
    const container = document.getElementById('treeCardsContainer');
    if (!container) return;
    container.innerHTML = '';
    treesData.forEach(tree => {
        const card = document.createElement('div');
        card.className = 'tree-card';
        card.innerHTML = `
            <div class="card-img" style="background-image: ${tree.imgBg}; background-size: cover; background-position: center;"></div>
            <div class="card-content">
                <span class="extinction-status">⚠️ ${tree.status}</span>
                <h3>${tree.name}</h3>
                <p><em>${tree.scientific}</em></p>
                <div class="seed-info">
                    🌱 <strong>Sementes:</strong> ${tree.seedDescription}
                </div>
                <p><strong>💚 Como ajudar:</strong> ${tree.howHelp}</p>
            </div>
        `;
        container.appendChild(card);
    });
}

// Renderizar seção sementes extras
function renderSeeds() {
    const seedDiv = document.getElementById('seedDynamic');
    if (!seedDiv) return;
    seedDiv.innerHTML = '';
    seedsExtra.forEach(seed => {
        const seedItem = document.createElement('div');
        seedItem.className = 'seed-item';
        seedItem.innerHTML = `
            <div class="seed-icon">${seed.icon}</div>
            <h4>${seed.name}</h4>
            <p style="font-size: 0.9rem;">${seed.description}</p>
        `;
        seedDiv.appendChild(seedItem);
    });
}

// Configurar adoção simbólica
function setupAdoption() {
    const adoptBtn = document.getElementById('adoptButton');
    const treeSelect = document.getElementById('treeSelect');
    const feedbackDiv = document.getElementById('feedbackMessage');
    if (!adoptBtn || !treeSelect || !feedbackDiv) return;

    const tipsByTree = {
        "Pau-Brasil": "✨ Dica de prevenção: Apoie o replantio de mudas de Pau-Brasil no litoral brasileiro e evite o comércio ilegal de madeira. Você pode doar para ONGs de restauração florestal!",
        "Araucária": "✨ Dica de prevenção: Plante um pinhão em um vaso e, quando crescer, doe para um parque. Promova a educação sobre a importância da araucária para a fauna.",
        "Jacarandá-da-Bahia": "✨ Dica de prevenção: Denuncie madeireiros ilegais, compartilhe conhecimento e incentive o cultivo em jardins botânicos. Cada muda faz diferença!",
        "Castanheira": "✨ Dica de prevenção: Consuma apenas castanhas com certificação florestal, ajude a combater o desmatamento na Amazônia, apoie comunidades extrativistas."
    };
    
    adoptBtn.addEventListener('click', () => {
        const selected = treeSelect.value;
        const tip = tipsByTree[selected] || "💪 Plante uma muda nativa no seu quintal ou participe de mutirões de reflorestamento. Toda ação conta!";
        feedbackDiv.innerHTML = `🌿 Obrigado por proteger <strong>${selected}</strong>! ${tip} 🌎`;
        feedbackDiv.style.backgroundColor = "var(--feedback-bg)";
        
        setTimeout(() => {
            feedbackDiv.style.backgroundColor = "var(--feedback-bg)";
        }, 500);
    });
}

// Evento de clique nos cards das árvores
function attachCardEventDelegation() {
    const container = document.getElementById('treeCardsContainer');
    if (!container) return;
    container.addEventListener('click', (e) => {
        let targetCard = e.target.closest('.tree-card');
        if (targetCard) {
            const titleElem = targetCard.querySelector('h3');
            if (titleElem) {
                const treeName = titleElem.innerText;
                alert(`🌳 ${treeName} está ameaçada! Você pode ajudar espalhando informações sobre suas sementes e plantando mudas. Visite seção de prevenção para saber mais.`);
            }
        }
    });
}

// Animação suave para links internos
function smoothAnchors() {
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
    
    const heroBtn = document.querySelector('.hero .btn');
    if (heroBtn && heroBtn.getAttribute('href') === '#especies') {
        heroBtn.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('especies').scrollIntoView({ behavior: 'smooth' });
        });
    }
}

// Função para alternar Dark Mode
function setupDarkMode() {
    const toggleBtn = document.getElementById('darkModeToggle');
    const htmlElement = document.documentElement;
    
    // Verificar preferência salva no localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        htmlElement.setAttribute('data-theme', 'dark');
        toggleBtn.innerHTML = '☀️ Light Mode';
    } else {
        htmlElement.setAttribute('data-theme', 'light');
        toggleBtn.innerHTML = '🌙 Dark Mode';
    }
    
    // Evento de clique do botão
    toggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        if (currentTheme === 'light') {
            htmlElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            toggleBtn.innerHTML = '☀️ Light Mode';
        } else {
            htmlElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            toggleBtn.innerHTML = '🌙 Dark Mode';
        }
    });
}

// Evento de clique nos itens de sementes
function attachSeedEvents() {
    const seedItems = document.querySelectorAll('.seed-item');
    seedItems.forEach(item => {
        item.addEventListener('click', () => {
            const seedName = item.querySelector('h4')?.innerText || "semente";
            alert(`🌰 ${seedName}: Armazenar adequadamente e plantar em ambiente protegido aumenta chances de germinação. Salvaguardar estas sementes é essencial.`);
        });
    });
}

// Observador de mutação para garantir que os elementos de sementes sejam carregados
function observeSeedItems() {
    const observer = new MutationObserver(() => {
        attachSeedEvents();
    });
    
    const seedContainer = document.getElementById('seedDynamic');
    if (seedContainer) {
        observer.observe(seedContainer, { childList: true, subtree: true });
    }
}

// Inicialização
function init() {
    renderTreeCards();
    renderSeeds();
    setupAdoption();
    attachCardEventDelegation();
    smoothAnchors();
    setupDarkMode();
    observeSeedItems();
    attachSeedEvents();
    
    console.log("%c🌱 Bem-vindo ao Guardian Trees! Ajude a preservar árvores em extinção, conheça cada semente. 🌱", "color: #1f6e43; font-size: 14px; font-weight: bold;");
}

// Executar após carregamento do DOM
window.addEventListener('DOMContentLoaded', init);