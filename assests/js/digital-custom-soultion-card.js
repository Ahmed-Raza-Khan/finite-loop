const services = [
    {
        img: "assets/images/digital-solution-enginering-card-purple.svg",
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
        "service-card p-8 text-center relative";

    card.innerHTML = `
        <div class="icon-box w-12 h-12 mb-6 flex items-center justify-center rounded-lg bg-purple-600/20 text-purple-400 transition-all duration-300">
            ${service.img}
        </div>

        <h3 class="mb-4">
            ${service.title}
        </h3>

        <p class="leading-relaxed mb-3">
            ${service.desc}
        </p>
    `;

    container.appendChild(card);
});
