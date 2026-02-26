const roadmapData = [
    { 
        year: "2020",
        image: "assests/images/images-aboutus/right-big-teal-arrow.svg",
        desc: "Launch of full-stack engineering services" },
    { 
        year: "2021",
        image: "assests/images/images-aboutus/right-big-teal-arrow.svg",
        desc: "Delivery of enterprise platform solutions" },
    { 
        year: "2022",
        image: "assests/images/images-aboutus/right-big-teal-arrow.svg",
        desc: "Expansion into ecommerce ecosystems" },
    { 
        year: "2023",
        image: "assests/images/images-aboutus/right-big-teal-arrow.svg",
        desc: "Introduction of AI-powered automation" },
    { 
        year: "2024",
        image: "assests/images/images-aboutus/right-big-teal-arrow.svg",
        desc: "Strengthening of security-first development" },
    { 
        year: "2025",
        image: "assests/images/images-aboutus/right-big-teal-arrow.svg",
        desc: "Focus on AI-first product engineering" }
];

const roadmapContainer = document.getElementById('roadmap-container');

let cards = "";

roadmapData.forEach((item, index) => {
    let staggerClass = "";

    if (index % 3 === 1) {
    staggerClass = "md:mt-16";
}
if (index % 3 === 2) {
    staggerClass = "md:mt-32";
}

    cards += `
        <div class="flex flex-col gap-3 group ${staggerClass} road-map-all-card-styling">
            <div class="flex items-center gap-4">
                <h2 class="text-5xl">${item.year}</h2>
                
                <img 
                    src="${item.image}" 
                    alt="arrow"
                    class="w-18 h-18 transition-transform duration-300 group-hover:translate-x-2"
                />
            </div>

            <p class="text-lg leading-snug w-4/4">
                ${item.desc}
            </p>
        </div>
    `;
});

roadmapContainer.innerHTML = cards;