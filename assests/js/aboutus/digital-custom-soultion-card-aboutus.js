const services = [
    {
        image: "assests/images/images-aboutus/core-values-1.svg",
        title: "Security First",
        desc: "Every system is built with security embedded at the architectural level  ensuring data protection, system integrity, and long-term resilience."
    },
    {
        image: "assests/images/images-aboutus/core-values-2.svg",
        title: "Transparency",
        desc: "Clear communication, visible progress, and honest timelines. We believe trust is earned through openness at every stage of delivery."
    },
    {
        image: "assests/images/images-aboutus/core-values-3.svg",
        title: "Outcome-Driven Innovation",
        desc: "Innovation only matters when it delivers results. We design solutions that solve real business problems and scale with purpose."
    },
    {
        image: "assests/images/images-aboutus/core-values-4.svg",
        title: "Engineering Simplicity",
        desc: "Complex systems don’t need complex experiences. We prioritize clean design, intuitive workflows, and maintainable architectures."
    },
    {
        image: "assests/images/images-aboutus/core-values-5.svg",
        title: "Reliability at Scale",
        desc: "Our solutions are engineered for performance, stability, and uptime — built to operate confidently under real-world demands."
    },
    {
        image: "assests/images/images-aboutus/core-values-6.svg",
        title: "Partnership Mindset",
        desc: "We work as an extension of your team, aligning technology decisions with long-term business goals — not short-term delivery."
    }
];

const container = document.getElementById("servicesContainer");

services.forEach(service => {
    const card = document.createElement("div");

    card.className =
        "service-card p-8 text-start relative cursor-pointer rounded-2xl transition-all duration-300";

    card.innerHTML = `
        <div class="mb-6 flex justify-start card-icon-core-values">
            <img src="${service.image}" 
                class="rounded-lg object-cover p-2
                service-icon w-15 h-15 transition-all duration-300" 
                alt="blog image">
        </div>


        <h3 class="mb-4">
            ${service.title}
        </h3>

        <p class="leading-relaxed mb-3">
            ${service.desc}
        </p>
    `;

    const img = card.querySelector(".service-icon");

    // card.addEventListener("mouseenter", () => {
    //     img.src = img.dataset.hover;
    // });

    // card.addEventListener("mouseleave", () => {
    //     img.src = img.dataset.default;
    // });

    container.appendChild(card);
});