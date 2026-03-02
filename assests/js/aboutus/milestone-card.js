const milestoneContainer = document.getElementById('milestones-grid');

const milestoneData = [
    {
        step: "01",
        title: "Discovery & Strategy",
        description: "We start by understanding your business goals, technical constraints, and metrics to define a clear, actionable roadmap.",
        icon: "assests/images/images-aboutus/milestones-1.svg" 
    },
    {
        step: "02",
        title: "Architecture & Design",
        description: "Our team designs robust, scalable system architectures and user experiences aligned with long-term growth.",
        icon: "assests/images/images-aboutus/milestones-2.svg"
    },
    {
        step: "03",
        title: "Engineering & Integration",
        description: "We develop pixel-perfect solutions using modern technologies, AI integration, and clean maintainable codebases.",
        icon: "assests/images/images-aboutus/milestones-3.svg"
    },
    {
        step: "04",
        title: "Launch & Scale",
        description: "After rigorous testing and validation, we deploy production-ready systems and support continuous optimization.",
        icon: "assests/images/images-aboutus/milestones-4.svg"
    }
];

if (milestoneContainer) {
    milestoneContainer.innerHTML = milestoneData.map(item => `
        <div class="relative flex items-center mb-12 lg:mb-16 last:mb-0">
            <div class="absolute -left-[45px] lg:-left-[61px] z-10 flex items-center justify-center">
                <div class="w-10 h-10 lg:w-16 lg:h-16 rounded-full bg-[#5CFFC5] border-[4px] lg:border-[6px] border-[#10B981] flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                    <span class="text-[#27282A] font-bold text-sm lg:text-xl">${item.step}</span>
                </div>
            </div>

            <div class="bg-none rounded-3xl p-5 lg:p-8 w-full transition-all hover:shadow-2xl hover:bg-[#5CFFC51A] hover:-translate-y-1 border border-transparent hover:border-[#5CFFC533]">
                <div class="flex items-start lg:items-center gap-4 lg:gap-6">
                    <div class="w-10 h-10 flex-shrink-0">
                        <img src="${item.icon}" alt="icon" class="w-15 h-15">
                    </div>
                    <div>
                        <h3 class="text-lg text-white lg:text-2xl font-bold mb-1 lg:mb-2">${item.title}</h3>
                        <p class="text-[#EFF1F9] leading-relaxed text-xs lg:text-base font-light">
                            ${item.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}