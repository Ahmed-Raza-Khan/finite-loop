const teamMembers = [
    {
        name: "Rehan Akhtar",
        role: "CEO & Co-Founder",
        image: "assests/images/About-Us-chacha.jpg",
        description: "Leading the vision with years of expertise in tech innovation.",
    },
    {
        name: "Sarah Jones",
        role: "CTO",
        image: "assests/images/images-aboutus/our-team-2.jpg",
        description: "Drives platform design, AI integration, and engineering",
    },
    {
        name: "Emily Carter",
        role: "Technical Lead",
        image: "assests/images/images-aboutus/our-team-3.jpg",
        description: "Specializes in building robust back-end architectures.",
    },
    {
        name: "John Parker",
        role: "Engineering Manager",
        image: "assests/images/images-aboutus/our-team-4.jpg",
        description: "Managing agile teams to deliver high-quality software.",
    }
];

const teamGrid = document.getElementById('team-grid');

teamGrid.innerHTML = teamMembers.map(member => `
    <div class="relative group overflow-hidden rounded-2xl aspect-[3/4] border border-white/90 cursor-pointer">
        <img src="${member.image}" alt="${member.name}" class="absolute inset-0 w-full h-full object-cover transition-transform duration-500">
        
        <div class="absolute inset-0 flex flex-col justify-end transition-opacity duration-300 group-hover:opacity-0">
            <div class="absolute inset-0 bg-gradient-to-t from-[#10B981]/80 via-transparent to-transparent opacity-90"></div>
            
            <div class="relative p-6 text-left">
                <h3 class="text-2xl font-bold text-white">${member.name}</h3>
                <p class="text-white/80 text-sm tracking-wider font-light">${member.role}</p>
            </div>
        </div>

        <div class="absolute inset-0 p-6 flex flex-col opacity-0 group-hover:opacity-100 transition-all duration-300 bg-[#07032299]">
            
            <div class="text-left transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 class="text-2xl font-bold text-white">${member.name}</h3>
                <p class="text-[#5EEAD4] text-sm uppercase tracking-wider font-semibold">${member.role}</p>
            </div>

            <div class="flex-grow flex items-center justify-center gap-3">
                <a href="#" class="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center bg-white/10 hover:bg-[#10B981] transition-colors">
                    <img src="assests/images/images-aboutus/logo-fb-simple 2.svg" class="w-4 h-4" alt="FB">
                </a>
                <a href="#" class="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center bg-white/10 hover:bg-[#10B981] transition-colors">
                    <img src="assests/images/images-aboutus/instagram.svg" class="w-4 h-4" alt="IG">
                </a>
                <a href="#" class="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center bg-white/10 hover:bg-[#10B981] transition-colors">
                    <img src="assests/images/images-aboutus/linkedln.svg" class="w-4 h-4" alt="LinkedIn">
                </a>
            </div>

            <div class="mt-auto transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                 <p class="text-sm text-white text-left font-light leading-relaxed w-full border-t border-white/20 pt-4">
                    ${member.description}
                 </p>
            </div>
        </div>
    </div>
`).join('');