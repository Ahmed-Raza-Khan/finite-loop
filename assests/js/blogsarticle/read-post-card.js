const postsData = [
    {
        badge: "Development Best Practices",
        title: "Writing Code That Scales Without Breaking",
        description: "Learn the key factors to consider when selecting a cryptocurrency wallet to ensure your assets are secure and easily accessible.",
        date: "Jan 15, 2026"
    },
    {
        badge: "Industry Trends",
        title: "Technology Trends Reshaping Digital Products in 2026",
        description: "Avoid the most common pitfalls in crypto trading and maximize your chances of success by learning from others' mistakes.",
        date: "Jan 15, 2026"
    }
];

function createCardHtml(post) {
    return `
        <div class="card-container bg-card-base rounded-2xl p-10 border-2 border-transparent 
            hover:border-card-hover-border hover:shadow-card-hover hover:-translate-y-1 
            cursor-pointer flex flex-col h-full group must-read-post">
            
            <div class="inline-block mb-6">
                <span class="px-4 py-1.5 rounded-full">
                    ${post.badge}
                </span>
            </div>

            <h2 class="text-2xl md:text-3xl mb-4 leading-tight">
                ${post.title}
            </h2>

            <p class="text-lg mb-10 flex-grow leading-relaxed">
                ${post.description}
            </p>

            <p class="text-text-muted text-sm mt-auto read-post-date">
                ${post.date}
            </p>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('posts-container');
    
    const cardsHtml = postsData.map(post => createCardHtml(post)).join('');
    
    container.innerHTML = cardsHtml;
});