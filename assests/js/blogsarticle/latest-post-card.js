const categories = [
        "All Articles", "Development best practices", "Technology tutorials", 
        "Technology tutorials", "Ecommerce optimization", "AI implementation guides"
    ];

const posts = [
    { 
        id: 1, category: "Industry Trends",
        date: "Jan 10, 2026",
        title: "How Businesses Are Adapting to Rapid Tech Shifts",
        img: "assests/images/images-blog/latest-post-1.png"
    },
    { 
        id: 2, category: "Technology tutorials",
        date: "Jan 10, 2026",
        title: "Step-by-Step Guide to Building Modern Web Applications",
        img: "assests/images/images-blog/latest-post-2.png"
    },
    { 
        id: 3, category: "Security insights",
        date: "Jan 10, 2026",
        title: "Building Secure Applications From Day One",
        img: "assests/images/images-blog/latest-post-3.png"
    },
    { 
        id: 4, category: "Ecommerce optimization",
        date: "Jan 10, 2026",
        title: "Turning Traffic into Sales With Smart Ecommerce Strategies",
        img: "assests/images/images-blog/latest-post-4.png"
    },
    { 
        id: 5, category: "Development best practices",
        date: "Jan 10, 2026",
        title: "Building Software for Long-Term Maintainability",
        img: "assests/images/images-blog/latest-post-5.png"
    },
    { 
        id: 6, category: "AI implementation guides",
        date: "Jan 10, 2026",
        title: "Using AI to Automate, Analyze, and Scale Smarter",
        img: "assests/images/images-blog/latest-post-6.png"
    },
    { 
        id: 7, category: "Development best practices",
        date: "Jan 10, 2026",
        title: "Writing Code That Scales Without Breaking",
        img: "assests/images/images-blog/latest-post-7.png"
    },
    { 
        id: 8, category: "AI implementation guides",
        date: "Jan 10, 2026",
        title: "Implementing AI in Business Without Overcomplication",
        img: "assests/images/images-blog/latest-post-8.png"
    },
    { 
        id: 9, category: "Industry Trends",
        date: "Jan 10, 2026",
        title: "The Future of Software: What Teams Must Prepare For",
        img: "assests/images/images-blog/latest-post-9.png" }
];

const filterContainer = document.getElementById('category-filter');
filterContainer.innerHTML = categories.map((cat, index) => `
    <button class="${index === 0 ? 'bg-teal-400 text-teal-950' : 'text-gray-300 hover:text-white'} px-5 py-2 rounded-full transition-all latest-post-selector">
        ${cat}
    </button>
`).join('');

const cardsGrid = document.getElementById('cards-grid');
cardsGrid.innerHTML = posts.map(post => `
    <div class="relative z-11 rounded-2xl p-5 card-shadow duration-500 group cards-grid-post">
        <div class="rounded-xl overflow-hidden mb-6 aspect-video flex items-center justify-center">
            <img src="${post.img}" alt="${post.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
        </div>
        
        <div class="flex items-center justify-between mb-4">
            <span class="rounded-full px-3 py-2 tracking-wider">
                ${post.category}
            </span>
            <text class="cards-grid-post-date">${post.date}</text>
        </div>
        
        <h3 class="text-lg leading-tight">
            ${post.title}
        </h3>
    </div>
`).join('');