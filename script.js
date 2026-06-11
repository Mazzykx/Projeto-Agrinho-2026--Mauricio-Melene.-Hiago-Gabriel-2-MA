// Base de dados: árvores ameaçadas + informações de sementes e prevenção
// Usando imagens em Base64 (embutidas no código) para garantir que funcionem sempre

// Imagens em Base64 das árvores
const imagensArvores = {
    pauBrasil: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%232c6e49'/%3E%3Ccircle cx='200' cy='120' r='50' fill='%23ffd700'/%3E%3Crect x='190' y='170' width='20' height='100' fill='%238B4513'/%3E%3Ccircle cx='160' cy='100' r='35' fill='%23ffd700'/%3E%3Ccircle cx='240' cy='100' r='35' fill='%23ffd700'/%3E%3Ctext x='200' y='260' text-anchor='middle' fill='white' font-size='20' font-weight='bold'%3EPau-Brasil%3C/text%3E%3C/svg%3E",
    
    araucaria: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%232c6e49'/%3E%3Cpolygon points='200,40 160,100 180,100 150,160 170,160 140,220 260,220 230,160 250,160 220,100 240,100' fill='%233a7a3a'/%3E%3Crect x='190' y='220' width='20' height='60' fill='%238B4513'/%3E%3Ctext x='200' y='280' text-anchor='middle' fill='white' font-size='20' font-weight='bold'%3EArauc%C3%A1ria%3C/text%3E%3C/svg%3E",
    
    jacaranda: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%232c6e49'/%3E%3Ccircle cx='200' cy='110' r='55' fill='%239b59b6'/%3E%3Crect x='190' y='165' width='20' height='100' fill='%238B4513'/%3E%3Ccircle cx='160' cy='90' r='30' fill='%23bb6bd9'/%3E%3Ccircle cx='240' cy='90' r='30' fill='%23bb6bd9'/%3E%3Ccircle cx='200' cy='70' r='25' fill='%23d291ff'/%3E%3Ctext x='200' y='260' text-anchor='middle' fill='white' font-size='18' font-weight='bold'%3EJacarand%C3%A1%3C/text%3E%3C/svg%3E",
    
    castanheira: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%232c6e49'/%3E%3Ccircle cx='200' cy='130' r='60' fill='%234a7a4a'/%3E%3Crect x='190' y='190' width='20' height='80' fill='%238B4513'/%3E%3Ccircle cx='180' cy='110' r='25' fill='%236a9a6a'/%3E%3Ccircle cx='220' cy='110' r='25' fill='%236a9a6a'/%3E%3Ccircle cx='200' cy='90' r='20' fill='%238aba8a'/%3E%3Ctext x='200' y='265' text-anchor='middle' fill='white' font-size='18' font-weight='bold'%3ECastanheira%3C/text%3E%3C/svg%3E"
};

// Dados das árvores com imagens em Base64
const treesData = [
    {
        name: "Pau-Brasil",
        scientific: "Paubrasilia echinata",
        status: "Em perigo (IUCN)",
        imgBg: imagensArvores.pauBrasil,
        seedDescription: "🌱 Semente pequena e achatada, dispersa por pássaros. Germinação lenta mas viável.",
        howHelp: "Evite comprar móveis de pau-brasil ilegal; apoie projetos de restauração na Mata Atlântica."
    },
    {
        name: "Araucária",
        scientific: "Araucaria angustifolia",
        status: "Criticamente em perigo",
        imgBg: imagensArvores.araucaria,
        seedDescription: "🌰 Pinhão - semente comestível fundamental para fauna. Estratificação para germinar.",
        howHelp: "Não coletar pinhões em excesso, plantar mudas em áreas de altitude."
    },
    {
        name: "Jacarandá-da-Bahia",
        scientific: "Dalbergia nigra",
        status: "Ameaçada (exploração madeireira)",
        imgBg: imagensArvores.jacaranda,
        seedDescription: "🍂 Sementes tipo sâmara, aladas. Germinação fácil em substrato arenoso.",
        howHelp: "Denuncie comércio ilegal, plante em restauração ecológica."
    },
    {
        name: "Castanheira",
        scientific: "Bertholletia excelsa",
        status: "Vulnerável (sobre-exploração)",
        imgBg: imagensArvores.castanheira,
        seedDescription: "🥜 Castanhas dentro de ouriço. Dependente de abelhas para polinização.",
        howHelp: "Consuma castanha certificada, apoie cooperativas extrativistas."
    }
];

// Dados para sementes em destaque
const seedsExtra = [
    { name: "Pinhão da Araucária", icon: "🌰", description: "Alimento e semente; germinação após quebra de dormência natural. Coleta consciente." },
    { name: "Semente de Pau-Brasil", icon: "🟤", description: "Rica em tanino, precisa de tratamento pré-germinativo. Essencial para recuperação." },
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
            <div class="card-img" style="background-image: url('${tree.imgBg}'); background-size: cover; background-position: center;"></div>
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

// Função para adicionar imagens de fundo mais realistas (opcional - com emojis grandes)
function addEmojiBackground() {
    const cards = document.querySelectorAll('.tree-card');
    const emojiMap = {
        'Pau-Brasil': '🌳',
        'Araucária': '🌲',
        'Jacarandá': '🌸',
        'Castanheira': '🌰'
    };
    
    cards.forEach(card => {
        const title = card.querySelector('h3')?.innerText || '';
        const imgDiv = card.querySelector('.card-img');
        const emoji = emojiMap[title] || '🌿';
        
        // Adicionar um overlay de emoji além da imagem SVG
        const emojiOverlay = document.createElement('div');
        emojiOverlay.style.cssText = `
            position: absolute;
            font-size: 80px;
            text-align: center;
            width: 100%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            opacity: 0.3;
            pointer-events: none;
        `;
        emojiOverlay.textContent = emoji;
        imgDiv.style.position = 'relative';
        imgDiv.appendChild(emojiOverlay);
    });
}

// Configurar adoção simbólica
function setupAdoption() {
    const adoptBtn = document.getElementById('adoptButton');
    const treeSelect = document.getElementById('treeSelect');
    const feedbackDiv = document.getElementById('feedbackMessage');
    if (!adoptBtn || !treeSelect || !feedbackDiv) return;

    const tipsByTree = {
        "Pau-Brasil": "✨ Dica: Apoie o replantio de mudas de Pau-Brasil no litoral brasileiro!",
        "Araucária": "✨ Dica: Plante um pinhão em um vaso e doe para um parque quando crescer!",
        "Jacarandá-da-Bahia": "✨ Dica: Denuncie madeireiros ilegais e incentive o cultivo!",
        "Castanheira": "✨ Dica: Consuma castanhas certificadas e ajude a Amazônia!"
    };
    
    adoptBtn.addEventListener('click', () => {
        const selected = treeSelect.value;
        const tip = tipsByTree[selected] || "💪 Plante uma muda nativa no seu quintal!";
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
                alert(`🌳 ${treeName} está ameaçada! Ajude espalhando informações e plantando mudas.`);
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
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        htmlElement.setAttribute('data-theme', 'dark');
        toggleBtn.innerHTML = '☀️ Light Mode';
    } else {
        htmlElement.setAttribute('data-theme', 'light');
        toggleBtn.innerHTML = '🌙 Dark Mode';
    }
    
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
            alert(`🌱 ${seedName}: Armazenar em local fresco e plantar em ambiente protegido!`);
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
    setTimeout(addEmojiBackground, 100);
    
    console.log("%c🌱 Guardian Trees - Protegendo árvores em extinção! 🌱", "color: #2c6e49; font-size: 16px; font-weight: bold;");
}

// Executar após carregamento do DOM
window.addEventListener('DOMContentLoaded', init);