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
        <div class="relative flex items-center mb-16 last:mb-0 lg:-left-[-10px]">
            <div class="absolute -left-[36px] lg:-left-[70px] lg:-top-[0px] z-10">
                <div class="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-[#5CFFC5] border-[6px] border-[#10B981] flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                    <span class="text-[#27282A] font-medium text-lg lg:text-xl">${item.step}</span>
                </div>
            </div>

            <div class="bg-none rounded-3xl p-6 lg:p-8 ml-10 w-full transition-all hover:shadow-2xl hover:bg-[#5CFEC533] hover:-translate-y-1">
                <div class="flex items-start gap-5">
                    <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                        <img src="${item.icon}" alt="icon" class="w-15 h-15">
                    </div>
                    <div>
                        <h3 class="text-xl text-white lg:text-2xl font-bold mb-2">${item.title}</h3>
                        <p class="text-[#EFF1F9] leading-relaxed text-sm lg:text-base font-light">
                            ${item.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}