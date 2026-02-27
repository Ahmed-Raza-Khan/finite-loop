const cultureData = [
    {
        id: "01",
        title: "Work on Meaningful Problems",
        desc: "We build real products  AI systems, platforms, and ecommerce solutions that are used in production, not experiments that disappear."
    },
    {
        id: "02",
        title: "Ownership Over Micromanagement",
        desc: "You’re trusted to make decisions, take responsibility, and see your work through — with support, not supervision."
    },
    {
        id: "03",
        title: "Learn, Improve, Repeat",
        desc: "We encourage continuous learning through hands-on problem solving, exposure to modern technologies, and real engineering challenges."
    },
    {
        id: "04",
        title: "Collaborative, Respectful Teams",
        desc: "We value clear communication, shared knowledge, and mutual respect  creating an environment where people grow together."
    }
];

const cultureContainer = document.getElementById('culture-cards-container');

if (cultureContainer) {
    cultureContainer.innerHTML = cultureData.map(item => `
        <div class="group relative p-6 rounded-xl transition-all duration-300 cursor-pointer culutre-work-env-cards">
            <div class="flex items-start gap-6">
                <span class="text-2xl">
                    ${item.id}
                </span>
                
                <div>
                    <h3 class="text-xl mb-2 transition-colors">
                        ${item.title}
                    </h3>
                    <p class="leading-relaxed">
                        ${item.desc}
                    </p>
                </div>
            </div>
        </div>
    `).join('');
}