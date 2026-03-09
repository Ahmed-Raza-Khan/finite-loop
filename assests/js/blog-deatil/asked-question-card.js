const faqData = [
            {
                title: "What does Finite Loop specialize in?",
                description: "Finite Loop specializes in AI-powered software engineering, including platform development, ecommerce solutions, enterprise web applications, and security-focused systems.",
            },
            {
                title: "How do projects typically start?",
                description: "Projects begin with a discovery phase where we understand your goals, technical requirements, and success criteria before defining a clear execution plan."
            },
            {
                title: "Do you work with startups or enterprises?",
                description: "We work with startups, growing businesses, and enterprise teams, adapting our approach based on scale, complexity, and long-term goals."
            },
            {
                title: "How do you ensure quality and security?",
                description: "We follow precision-led engineering practices, automated testing, and security-first development to ensure reliability, performance, and data protection."
            },
            {
                title: "Do you provide support after launch?",
                description: "Yes. We offer ongoing support, monitoring, optimization, and enhancements to ensure your system continues to perform as your business grows."
            },
            {
                title: "Can you work with existing systems?",
                description: "Absolutely. We integrate with existing codebases, platforms, and in-house teams to extend functionality or improve system performance.."
            }
        ];

const grid = document.getElementById('faq-grid');

faqData.forEach(faq => {
    const card = document.createElement('div');
    
    // const bgColor = faq.isHighlighted ? 'bg-emerald-100/10 border-emerald-500/30' : 'bg-zinc-900/50 border-white/5';
    
    card.className = `border p-10 rounded-2xl transition-all duration-300 hover:-translate-y-1 cursor-default asked-question-cards`;

    card.innerHTML = ` 
        <h3 class="text-xl mb-4 transition-colors">
            ${faq.title}
        </h3>
        <p class="leading-relaxed">
            ${faq.description}
        </p>
    `;

    grid.appendChild(card);
});