// Professional News Portal - Clean and Error-Free Code

// News Database
const newsDatabase = {
    world: [{
            id: 1,
            title: "Global Climate Summit Reaches Historic Agreement on Carbon Emissions",
            description: "World leaders from over 190 countries have committed to reducing carbon emissions by 50% by 2030, marking a significant milestone in the fight against climate change.",
            image: "https://images.unsplash.com/photo-1569163139394-de4798aa62b6?w=800&h=500&fit=crop",
            category: "World",
            source: "Global News Network",
            date: "2026-01-11",
            link: "#"
        },
        {
            id: 2,
            title: "International Space Station Welcomes First Mars-Bound Crew",
            description: "Six astronauts from various countries have arrived at the ISS to begin their final preparations for humanity's first crewed mission to Mars, scheduled for 2027.",
            image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=500&fit=crop",
            category: "World",
            source: "Space Today",
            date: "2026-01-10",
            link: "#"
        },
        {
            id: 3,
            title: "New Archaeological Discovery Rewrites Ancient History",
            description: "Archaeologists in Egypt have uncovered a previously unknown pyramid complex that predates the Great Pyramid, potentially revolutionizing our understanding of ancient civilizations.",
            image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=800&h=500&fit=crop",
            category: "World",
            source: "History Channel",
            date: "2026-01-09",
            link: "#"
        },
        {
            id: 4,
            title: "Global Economy Shows Strong Recovery Signs",
            description: "International Monetary Fund reports unprecedented economic growth across major economies, signaling a robust recovery from recent challenges.",
            image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop",
            category: "World",
            source: "Economic Times",
            date: "2026-01-08",
            link: "#"
        },
        {
            id: 5,
            title: "UN Launches Major Initiative for Global Education",
            description: "United Nations announces a $50 billion program to provide quality education access to children in developing nations over the next decade.",
            image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=500&fit=crop",
            category: "World",
            source: "UN News",
            date: "2026-01-07",
            link: "#"
        },
        {
            id: 6,
            title: "Breakthrough in Ocean Plastic Cleanup Technology",
            description: "Scientists unveil revolutionary method that can remove 90% of ocean microplastics, offering hope for marine ecosystem restoration.",
            image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=500&fit=crop",
            category: "World",
            source: "Environmental Weekly",
            date: "2026-01-06",
            link: "#"
        }
    ],
    technology: [{
            id: 7,
            title: "AI System Achieves Human-Level Understanding in Complex Tasks",
            description: "New artificial intelligence model demonstrates unprecedented comprehension abilities, passing rigorous tests in reasoning, creativity, and problem-solving.",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
            category: "Technology",
            source: "Tech Innovators",
            date: "2026-01-11",
            link: "#"
        },
        {
            id: 8,
            title: "Quantum Computing Breakthrough Promises Revolutionary Changes",
            description: "Scientists achieve quantum supremacy with a 1000-qubit processor, capable of solving problems in seconds that would take classical computers millennia.",
            image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=500&fit=crop",
            category: "Technology",
            source: "Quantum Today",
            date: "2026-01-10",
            link: "#"
        },
        {
            id: 9,
            title: "Revolutionary Battery Technology Extends EV Range to 1000 Miles",
            description: "New solid-state battery technology promises to triple electric vehicle range while reducing charging time to just 10 minutes.",
            image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&h=500&fit=crop",
            category: "Technology",
            source: "EV World",
            date: "2026-01-09",
            link: "#"
        },
        {
            id: 10,
            title: "6G Networks Begin Global Rollout",
            description: "Next-generation wireless technology promises speeds 100 times faster than 5G, enabling new innovations in IoT and autonomous systems.",
            image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&h=500&fit=crop",
            category: "Technology",
            source: "Network News",
            date: "2026-01-08",
            link: "#"
        }
    ],
    business: [{
            id: 11,
            title: "Tech Giants Announce Historic Merger",
            description: "Two of the world's largest technology companies agree to merge in a deal worth $500 billion, creating the most valuable corporation in history.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
            category: "Business",
            source: "Business Insider",
            date: "2026-01-11",
            link: "#"
        },
        {
            id: 12,
            title: "Green Energy Investments Reach Record $2 Trillion",
            description: "Renewable energy sector attracts unprecedented investment as companies worldwide commit to carbon neutrality goals.",
            image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=500&fit=crop",
            category: "Business",
            source: "Energy Finance",
            date: "2026-01-10",
            link: "#"
        },
        {
            id: 13,
            title: "Stock Markets Hit All-Time Highs Globally",
            description: "Major indices worldwide reach unprecedented levels as investor confidence soars amid strong economic indicators.",
            image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop",
            category: "Business",
            source: "Financial Times",
            date: "2026-01-09",
            link: "#"
        },
        {
            id: 14,
            title: "E-Commerce Revolution: Online Sales Surpass Traditional Retail",
            description: "For the first time in history, online shopping accounts for more than 50% of total retail sales globally.",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
            category: "Business",
            source: "Retail Weekly",
            date: "2026-01-08",
            link: "#"
        }
    ],
    sports: [{
            id: 15,
            title: "Underdog Team Wins Championship in Historic Upset",
            description: "Against all odds, the underdog team clinches the championship title in a thrilling final match that will be remembered for generations.",
            image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=500&fit=crop",
            category: "Sports",
            source: "Sports Network",
            date: "2026-01-11",
            link: "#"
        },
        {
            id: 16,
            title: "Olympic Athlete Breaks World Record by Unprecedented Margin",
            description: "Track and field star shatters 20-year-old world record, setting a new mark that experts believe will stand for decades.",
            image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&h=500&fit=crop",
            category: "Sports",
            source: "Olympic News",
            date: "2026-01-10",
            link: "#"
        },
        {
            id: 17,
            title: "Major League Announces Expansion to 10 New Cities",
            description: "Professional sports league reveals ambitious expansion plans, bringing top-tier competition to new markets across the globe.",
            image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=500&fit=crop",
            category: "Sports",
            source: "League Insider",
            date: "2026-01-09",
            link: "#"
        },
        {
            id: 18,
            title: "Rising Star Signs Record-Breaking $500 Million Contract",
            description: "Young phenom secures the largest contract in sports history, becoming the highest-paid athlete across all major leagues.",
            image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800&h=500&fit=crop",
            category: "Sports",
            source: "Sports Daily",
            date: "2026-01-08",
            link: "#"
        }
    ],
    health: [{
            id: 19,
            title: "Revolutionary Cancer Treatment Shows 95% Success Rate",
            description: "New immunotherapy breakthrough demonstrates remarkable effectiveness in treating various forms of cancer with minimal side effects.",
            image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&h=500&fit=crop",
            category: "Health",
            source: "Medical Journal",
            date: "2026-01-11",
            link: "#"
        },
        {
            id: 20,
            title: "Gene Therapy Approved for Rare Diseases",
            description: "Medical authorities approve groundbreaking gene therapy treatments offering hope to millions of patients with previously incurable conditions.",
            image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=500&fit=crop",
            category: "Health",
            source: "Biotech News",
            date: "2026-01-10",
            link: "#"
        },
        {
            id: 21,
            title: "Mental Health Initiative Reaches 100 Million People",
            description: "Global mental health awareness campaign successfully provides support and resources to communities worldwide.",
            image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=800&h=500&fit=crop",
            category: "Health",
            source: "Health Today",
            date: "2026-01-09",
            link: "#"
        },
        {
            id: 22,
            title: "Study Confirms Mediterranean Diet Benefits for Longevity",
            description: "Largest-ever nutrition study validates Mediterranean diet's significant impact on lifespan and overall health outcomes.",
            image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=500&fit=crop",
            category: "Health",
            source: "Nutrition Science",
            date: "2026-01-08",
            link: "#"
        }
    ],
    entertainment: [{
            id: 23,
            title: "Blockbuster Film Breaks All-Time Box Office Records",
            description: "Highly anticipated movie surpasses $3 billion globally in its opening month, setting new standards for cinema success.",
            image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&h=500&fit=crop",
            category: "Entertainment",
            source: "Hollywood Reporter",
            date: "2026-01-11",
            link: "#"
        },
        {
            id: 24,
            title: "Music Festival Announces Star-Studded Lineup",
            description: "Biggest music event of the year reveals incredible roster featuring top artists from around the world.",
            image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=500&fit=crop",
            category: "Entertainment",
            source: "Music News",
            date: "2026-01-10",
            link: "#"
        }
    ],
    science: [{
            id: 25,
            title: "Scientists Discover Potential for Life on Distant Exoplanet",
            description: "Revolutionary telescope observations reveal biosignatures on planet 40 light-years away, suggesting possibility of extraterrestrial life.",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
            category: "Science",
            source: "Space Science",
            date: "2026-01-11",
            link: "#"
        },
        {
            id: 26,
            title: "Fusion Energy Achieves Net Positive Output",
            description: "Scientists successfully generate more energy from fusion reaction than input, marking historic milestone in clean energy pursuit.",
            image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=500&fit=crop",
            category: "Science",
            source: "Science Today",
            date: "2026-01-10",
            link: "#"
        }
    ]
};

// Global variables
let currentCategory = 'world';
let currentView = 'grid';

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    updateDateTime();
    setInterval(updateDateTime, 1000);
    loadCategory('world');
    setupEventListeners();
});

// Update date and time
function updateDateTime() {
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    document.getElementById('datetime').textContent = now.toLocaleDateString('en-US', options);
}

// Setup event listeners
function setupEventListeners() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchNews();
        }
    });
}

// Load category
function loadCategory(category) {
    currentCategory = category;

    // Show featured section
    document.getElementById('featuredSection').style.display = 'block';

    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.category === category) {
            link.classList.add('active');
        }
    });

    // Update category title
    const categoryTitle = category.charAt(0).toUpperCase() + category.slice(1);
    document.getElementById('categoryTitle').textContent = `${categoryTitle} News`;

    // Show loading
    showLoading(true);

    // Simulate loading delay for better UX
    setTimeout(() => {
        displayNews(category);
        displayFeatured(category);
        displayTrending(category);
        displayBreakingNews(category);
        showLoading(false);
    }, 500);
}

// Display featured article
function displayFeatured(category) {
    const articles = newsDatabase[category] || newsDatabase.world;
    const featured = articles[0];

    const featuredHTML = `
        <div class="featured-image">
            <img src="${featured.image}" alt="${featured.title}">
        </div>
        <div class="featured-content">
            <span class="featured-category">${featured.category}</span>
            <h2 class="featured-title">${featured.title}</h2>
            <p class="featured-excerpt">${featured.description}</p>
            <div class="featured-meta">
                <span>${featured.source}</span>
                <span>•</span>
                <span>${formatDate(featured.date)}</span>
            </div>
        </div>
    `;

    document.getElementById('featuredArticle').innerHTML = featuredHTML;
}

// Display news grid
function displayNews(category) {
    const articles = newsDatabase[category] || newsDatabase.world;
    const newsGrid = document.getElementById('newsGrid');

    // Skip first article (it's featured)
    const displayArticles = articles.slice(1);

    const newsHTML = displayArticles.map(article => `
        <article class="news-card" onclick="openArticle('${article.link}')">
            <div class="news-image">
                <img src="${article.image}" alt="${article.title}">
                <span class="news-category">${article.category}</span>
            </div>
            <div class="news-content">
                <h3 class="news-title">${article.title}</h3>
                <p class="news-description">${article.description}</p>
                <div class="news-meta">
                    <span class="news-source">${article.source}</span>
                    <span class="news-date">${formatDate(article.date)}</span>
                </div>
            </div>
        </article>
    `).join('');

    newsGrid.innerHTML = newsHTML;
}

// Display trending news
function displayTrending(category) {
    const allArticles = [];
    Object.keys(newsDatabase).forEach(cat => {
        allArticles.push(...newsDatabase[cat]);
    });

    // Get random trending articles
    const trending = allArticles.sort(() => 0.5 - Math.random()).slice(0, 5);

    const trendingHTML = trending.map((article, index) => `
        <div class="trending-item" onclick="openArticle('${article.link}')">
            <div class="trending-number">${index + 1}</div>
            <div class="trending-content">
                <h4 class="trending-title">${article.title}</h4>
                <div class="trending-meta">${article.source} • ${formatDate(article.date)}</div>
            </div>
        </div>
    `).join('');

    document.getElementById('trendingList').innerHTML = trendingHTML;
}

// Display breaking news
function displayBreakingNews(category) {
    const articles = newsDatabase[category] || newsDatabase.world;
    const breakingText = articles.map(a => a.title).join(' • • • ');
    document.getElementById('breakingNews').innerHTML = `<span>${breakingText} • • • ${breakingText}</span>`;
}

// Search functionality
function searchNews() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();

    if (!searchTerm) {
        loadCategory(currentCategory);
        return;
    }

    // Search across all categories
    const allArticles = [];
    Object.keys(newsDatabase).forEach(category => {
        newsDatabase[category].forEach(article => {
            if (article.title.toLowerCase().includes(searchTerm) ||
                article.description.toLowerCase().includes(searchTerm)) {
                allArticles.push(article);
            }
        });
    });

    // Update title
    document.getElementById('categoryTitle').textContent = `Search Results for "${searchTerm}"`;

    // Hide featured section during search
    document.getElementById('featuredSection').style.display = 'none';

    if (allArticles.length === 0) {
        document.getElementById('newsGrid').innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
                <h3 style="color: var(--text-light); font-size: 1.5rem;">No results found for "${searchTerm}"</h3>
                <p style="color: var(--text-light); margin-top: 10px;">Try different keywords or browse our categories</p>
            </div>
        `;
        return;
    }

    const newsHTML = allArticles.map(article => `
        <article class="news-card" onclick="openArticle('${article.link}')">
            <div class="news-image">
                <img src="${article.image}" alt="${article.title}">
                <span class="news-category">${article.category}</span>
            </div>
            <div class="news-content">
                <h3 class="news-title">${article.title}</h3>
                <p class="news-description">${article.description}</p>
                <div class="news-meta">
                    <span class="news-source">${article.source}</span>
                    <span class="news-date">${formatDate(article.date)}</span>
                </div>
            </div>
        </article>
    `).join('');

    document.getElementById('newsGrid').innerHTML = newsHTML;
}

// Set view (grid or list)
function setView(view) {
    currentView = view;
    const newsGrid = document.getElementById('newsGrid');
    const viewButtons = document.querySelectorAll('.view-btn');

    viewButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.view === view) {
            btn.classList.add('active');
        }
    });

    if (view === 'list') {
        newsGrid.classList.add('list-view');
    } else {
        newsGrid.classList.remove('list-view');
    }
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;

    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

// Show/hide loading
function showLoading(show) {
    const spinner = document.getElementById('loadingSpinner');
    const newsGrid = document.getElementById('newsGrid');

    if (show) {
        spinner.classList.add('active');
        newsGrid.style.display = 'none';
    } else {
        spinner.classList.remove('active');
        newsGrid.style.display = 'grid';
    }
}

// Open article (placeholder)
function openArticle(link) {
    console.log('Opening article:', link);
    // In a real application, this would navigate to the article page
    alert('Article functionality would open here. This is a demo.');
}

// Prevent default link behavior
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href') === '#') {
        e.preventDefault();
    }
});
