// News Portal with sample data (works without API)
// In production, replace with your own valid API key

window.addEventListener("load", () => fetchNews("world"));

function reload() {
    window.location.reload();
}

// Sample news data
const sampleNews = {
    world: [{
            title: "Global Climate Summit Reaches Landmark Agreement on Emissions",
            description: "World leaders gather to commit to significant reductions in carbon emissions by 2030, marking a historic moment in climate action.",
            image_url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=200&fit=crop",
            source: "Global News Network",
            pubDate: "2026-01-08T10:30:00Z",
            link: "https://example.com/climate-summit"
        },
        {
            title: "New Archaeological Discovery in Egypt Reveals Ancient Civilization Secrets",
            description: "Archaeologists uncover a previously unknown chamber in the Great Pyramid, containing artifacts that could rewrite history.",
            image_url: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=400&h=200&fit=crop",
            source: "World History Today",
            pubDate: "2026-01-07T14:20:00Z",
            link: "https://example.com/egypt-discovery"
        },
        {
            title: "International Space Station Welcomes New Crew for Six-Month Mission",
            description: "A multinational crew of astronauts successfully docks at the ISS, beginning experiments in microgravity research.",
            image_url: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=200&fit=crop",
            source: "Space News",
            pubDate: "2026-01-07T09:15:00Z",
            link: "https://example.com/iss-mission"
        },
        {
            title: "Global Economic Forum Discusses Sustainable Development Goals",
            description: "Economic leaders from around the world convene to address challenges and opportunities in sustainable development.",
            image_url: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400&h=200&fit=crop",
            source: "Economic Times",
            pubDate: "2026-01-06T16:00:00Z",
            link: "https://example.com/economic-forum"
        },
        {
            title: "Breakthrough in Renewable Energy: New Solar Panel Technology Announced",
            description: "Scientists develop revolutionary solar panels with 50% higher efficiency, promising to transform the energy sector.",
            image_url: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=200&fit=crop",
            source: "Tech Innovation",
            pubDate: "2026-01-06T11:30:00Z",
            link: "https://example.com/solar-breakthrough"
        },
        {
            title: "World Health Organization Launches New Global Health Initiative",
            description: "WHO announces comprehensive program to improve healthcare access in developing nations.",
            image_url: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&h=200&fit=crop",
            source: "Health Today",
            pubDate: "2026-01-05T13:45:00Z",
            link: "https://example.com/who-initiative"
        }
    ],
    technology: [{
            title: "AI Breakthrough: New Model Achieves Human-Level Understanding",
            description: "Researchers unveil advanced artificial intelligence system that demonstrates unprecedented comprehension abilities.",
            image_url: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop",
            source: "Tech Daily",
            pubDate: "2026-01-08T08:00:00Z",
            link: "https://example.com/ai-breakthrough"
        },
        {
            title: "Quantum Computing Reaches New Milestone in Processing Power",
            description: "Major tech company announces quantum processor capable of solving complex problems in seconds.",
            image_url: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=200&fit=crop",
            source: "Innovation Weekly",
            pubDate: "2026-01-07T12:30:00Z",
            link: "https://example.com/quantum-computing"
        },
        {
            title: "Revolutionary Battery Technology Promises Week-Long Smartphone Charge",
            description: "New solid-state battery technology could eliminate daily charging, extending battery life dramatically.",
            image_url: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=400&h=200&fit=crop",
            source: "Mobile Tech News",
            pubDate: "2026-01-06T15:20:00Z",
            link: "https://example.com/battery-tech"
        },
        {
            title: "5G Networks Complete Global Rollout Ahead of Schedule",
            description: "Telecommunications companies achieve worldwide 5G coverage, enabling new innovations in connectivity.",
            image_url: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=400&h=200&fit=crop",
            source: "Network World",
            pubDate: "2026-01-06T10:00:00Z",
            link: "https://example.com/5g-rollout"
        }
    ],
    business: [{
            title: "Stock Markets Hit Record Highs Amid Economic Recovery",
            description: "Major global indices reach unprecedented levels as investors show confidence in economic growth.",
            image_url: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=200&fit=crop",
            source: "Financial Times",
            pubDate: "2026-01-08T07:30:00Z",
            link: "https://example.com/stock-markets"
        },
        {
            title: "Major Tech Companies Announce Merger Creating Industry Giant",
            description: "Two leading technology firms agree to merge, creating one of the world's most valuable companies.",
            image_url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop",
            source: "Business Insider",
            pubDate: "2026-01-07T11:00:00Z",
            link: "https://example.com/tech-merger"
        },
        {
            title: "Green Energy Investments Surpass Fossil Fuels for First Time",
            description: "Renewable energy sector attracts more investment capital than traditional energy sources.",
            image_url: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=200&fit=crop",
            source: "Energy Finance",
            pubDate: "2026-01-06T14:15:00Z",
            link: "https://example.com/green-investment"
        },
        {
            title: "E-commerce Sales Break Records During Holiday Season",
            description: "Online retailers report unprecedented sales figures, highlighting shift in consumer behavior.",
            image_url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop",
            source: "Retail Weekly",
            pubDate: "2026-01-05T16:30:00Z",
            link: "https://example.com/ecommerce-records"
        }
    ],
    sports: [{
            title: "Underdog Team Wins Championship in Stunning Upset",
            description: "Against all odds, the underdog team clinches the championship title in a thrilling final match.",
            image_url: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=200&fit=crop",
            source: "Sports Network",
            pubDate: "2026-01-08T19:00:00Z",
            link: "https://example.com/championship-upset"
        },
        {
            title: "Olympic Athlete Breaks World Record in Historic Performance",
            description: "Track and field star shatters long-standing world record, making history in the sport.",
            image_url: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=400&h=200&fit=crop",
            source: "Athletic News",
            pubDate: "2026-01-07T17:45:00Z",
            link: "https://example.com/world-record"
        },
        {
            title: "Major League Announces Expansion to New International Markets",
            description: "Professional sports league reveals plans to expand operations to three new countries.",
            image_url: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400&h=200&fit=crop",
            source: "League Insider",
            pubDate: "2026-01-06T20:15:00Z",
            link: "https://example.com/league-expansion"
        },
        {
            title: "Rising Star Signs Record-Breaking Contract with Top Team",
            description: "Young athlete secures historic deal, becoming the highest-paid player in the sport.",
            image_url: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=400&h=200&fit=crop",
            source: "Sports Daily",
            pubDate: "2026-01-05T18:30:00Z",
            link: "https://example.com/contract-record"
        }
    ],
    health: [{
            title: "New Cancer Treatment Shows Promising Results in Clinical Trials",
            description: "Innovative therapy demonstrates remarkable success rate in treating various forms of cancer.",
            image_url: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400&h=200&fit=crop",
            source: "Medical Journal",
            pubDate: "2026-01-08T09:30:00Z",
            link: "https://example.com/cancer-treatment"
        },
        {
            title: "Mental Health Awareness Campaign Launches Globally",
            description: "International organizations unite to promote mental health awareness and reduce stigma.",
            image_url: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400&h=200&fit=crop",
            source: "Health Today",
            pubDate: "2026-01-07T13:00:00Z",
            link: "https://example.com/mental-health"
        },
        {
            title: "Revolutionary Gene Therapy Approved for Rare Disease Treatment",
            description: "Medical authorities approve groundbreaking gene therapy offering hope to patients with rare conditions.",
            image_url: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=200&fit=crop",
            source: "Biotech News",
            pubDate: "2026-01-06T12:45:00Z",
            link: "https://example.com/gene-therapy"
        },
        {
            title: "Study Reveals Benefits of Mediterranean Diet on Longevity",
            description: "Large-scale research confirms Mediterranean diet's significant impact on lifespan and health.",
            image_url: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=200&fit=crop",
            source: "Nutrition Science",
            pubDate: "2026-01-05T15:00:00Z",
            link: "https://example.com/mediterranean-diet"
        }
    ]
};

async function fetchNews(query) {
    const cardsContainer = document.getElementById("cards-container");
    cardsContainer.innerHTML = '<div class="loading">Loading news...</div>';

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    try {
        let articles = sampleNews[query.toLowerCase()] || sampleNews.world;

        if (articles && articles.length > 0) {
            bindData(articles);
        } else {
            cardsContainer.innerHTML = '<div class="no-results">No news found. Try a different category.</div>';
        }
    } catch (error) {
        console.error("Error loading news:", error);
        cardsContainer.innerHTML = '<div class="error">Failed to load news. Please try again.</div>';
    }
}

function bindData(articles) {
    const cardsContainer = document.getElementById("cards-container");
    const templateNewsCard = document.getElementById("template-news-card");

    cardsContainer.innerHTML = "";

    articles.forEach((article) => {
        const cardClone = templateNewsCard.content.cloneNode(true);
        fillDataInCard(cardClone, article);
        cardsContainer.appendChild(cardClone);
    });
}

function fillDataInCard(cardClone, article) {
    const newsImg = cardClone.querySelector('#news-img');
    const newsTitle = cardClone.querySelector('#news-title');
    const newsSource = cardClone.querySelector('#news-source');
    const newsDesc = cardClone.querySelector('#news-desc');

    newsImg.src = article.image_url || 'https://via.placeholder.com/400x200/e0e0e0/666666?text=No+Image';
    newsImg.onerror = () => {
        newsImg.src = 'https://via.placeholder.com/400x200/e0e0e0/666666?text=No+Image';
    };

    newsTitle.innerHTML = article.title;
    newsDesc.innerHTML = article.description || 'No description available';

    const date = new Date(article.pubDate).toLocaleString("en-US", {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });

    const sourceName = article.source || 'News Source';
    newsSource.innerHTML = `${sourceName} · ${date}`;

    cardClone.firstElementChild.addEventListener('click', () => {
        window.open(article.link, "_blank");
    });
}

let curSelectedNav = null;

function onNavItemClick(id) {
    fetchNews(id);
    const navItem = document.getElementById(id);
    curSelectedNav ? .classList.remove('active');
    curSelectedNav = navItem;
    curSelectedNav.classList.add('active');
}

const searchButton = document.getElementById("search-button");
const searchText = document.getElementById("search-text");

searchButton.addEventListener("click", () => {
    const query = searchText.value;
    if (!query) return;
    fetchNews(query);
    curSelectedNav ? .classList.remove('active');
    curSelectedNav = null;
});

searchText.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        const query = searchText.value;
        if (!query) return;
        fetchNews(query);
        curSelectedNav ? .classList.remove('active');
        curSelectedNav = null;
    }
});