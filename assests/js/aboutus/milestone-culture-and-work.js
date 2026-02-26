const cultureData = [
    {
        id: "01",
        title: "Work on Meaningful Problems",
        desc: "We build real products, AI systems, platforms, and ecommerce solutions that are used in daily lives."
    },
    {
        id: "02",
        title: "Ownership Over Micromanagement",
        desc: "You're trusted to make decisions, take responsibility, and see your work through — with support, not supervision."
    },
    {
        id: "03",
        title: "Learn, Improve, Repeat",
        desc: "We encourage continuous learning through hands-on problem solving, exposure to modern technologies, and real engineering."
    },
    {
        id: "04",
        title: "Collaborative, Respectful Teams",
        desc: "We value clear communication, shared knowledge, and mutual respect, creating an environment for teams to grow."
    }
];

const cultureContainer = document.getElementById('culture-cards-container');

if (cultureContainer) {
    cultureContainer.innerHTML = cultureData.map(item => `
        <div class="group relative p-6 rounded-xl border border-white/10 bg-[#16103a]/40 transition-all duration-300 hover:bg-[#10B981]/10 hover:border-[#10B981] cursor-pointer">
            <div class="flex items-start gap-6">
                <span class="text-2xl font-bold text-[#10B981] opacity-80 group-hover:opacity-100 transition-opacity">
                    ${item.id}
                </span>
                
                <div>
                    <h3 class="text-xl font-bold text-white mb-2 group-hover:text-[#5EEAD4] transition-colors">
                        ${item.title}
                    </h3>
                    <p class="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200">
                        ${item.desc}
                    </p>
                </div>
            </div>
        </div>
    `).join('');
}