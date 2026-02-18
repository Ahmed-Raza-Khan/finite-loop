const services = [
    {
        title: "Ecommerce Solutions",
        desc: "Full-stack ecommerce solutions covering web, mobile, and custom software built for performance, scale, and conversions."
    },
    {
        title: "AI Product Development",
        desc: "AI-powered chatbots, intelligent agents, and automation solutions designed to improve efficiency and decision-making."
    },
    {
        title: "Platform Development",
        desc: "Scalable SaaS, marketplace, and multi-tenant platforms engineered for growth and long-term stability."
    },
    {
        title: "Cybersecurity Solutions",
        desc: "Security audits, penetration testing, and SOC platforms to protect systems, data, and infrastructure."
    },
    {
        title: "Custom Web Development",
        desc: "High-performance PWAs, web portals, and dashboards built with clean architecture and modern technologies."
    },
    {
        title: "Mobile App Development",
        desc: "iOS, Android, and cross-platform mobile apps designed for usability, speed, and scalability."
    }
];

const container = document.getElementById("servicesContainer");

services.forEach(service => {
    const card = document.createElement("div");

    card.className =
        "service-card p-8 text-center relative cursor-pointer rounded-2xl transition-all duration-300";

    card.innerHTML = `
        <div class="mb-6 flex justify-center">
            <img src="assests/images/digital-solution-enginering-card-purple.svg"
                class="service-icon w-15 h-15 transition-all duration-300"
                data-default="assests/images/digital-solution-enginering-card-purple.svg"
                data-hover="assests/images/digital-solution-enginering-card-teal.svg"
            />
        </div>

        <h3 class="mb-4">
            ${service.title}
        </h3>

        <p class="leading-relaxed mb-3">
            ${service.desc}
        </p>
    `;

    const img = card.querySelector(".service-icon");

    card.addEventListener("mouseenter", () => {
        img.src = img.dataset.hover;
    });

    card.addEventListener("mouseleave", () => {
        img.src = img.dataset.default;
    });

    container.appendChild(card);
});