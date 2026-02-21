const faqData = [
  {
    question: "What types of projects do you work on?",
    answer: "We work on AI-powered products, ecommerce platforms, SaaS and enterprise applications, mobile apps, and secure digital systems. Each project is tailored to specific business goals."
  },
  {
    question: "How Do You Approach Project Delivery?",
    answer: "We follow agile methodology with sprint planning, transparent communication, and milestone-based delivery."
  },
  {
    question: "Do You Provide Support After Launch?",
    answer: "Yes, we provide maintenance, monitoring, optimization, and scaling support after launch."
  },
  {
    question: "Do You Work With Startups Or Only Enterprises?",
    answer: "We work with startups, SMEs, and large enterprises globally."
  }
];

const faqContainer = document.getElementById("faqContainer");

faqData.forEach((item, index) => {
  const card = document.createElement("div");
  card.className =
    "faq-card rounded-xl p-10 cursor-pointer transition-all duration-500";

  card.innerHTML = `
    <div class="flex justify-between items-center">
      <h3>${item.question}</h3>
      <span class="icon text-2xl">
        <img src="assests/images/asked-question-plus-sign.svg" width="20" height="20" alt="icon-plus">
      </span>
    </div>
    <p class="answer mt-4">${item.answer}</p>
  `;

  card.addEventListener("click", function () {
    const answer = this.querySelector(".answer");
    const icon = this.querySelector(".icon");
    const isOpen = !answer.classList.contains("hidden");

    document.querySelectorAll(".faq-card").forEach(c => {
      c.classList.remove("bg-cyan-400/10");
      c.querySelector(".answer").classList.add("hidden");
    //   c.querySelector(".icon").innerHTML = "+";
    });

    if (!isOpen) {
      this.classList.add("bg-cyan-400/10");
      answer.classList.remove("hidden");
      icon.innerHTML = "×";
    }
  });

  faqContainer.appendChild(card);
});

// const faqs = [
//     { 
//         q: "What Types Of Projects Do You Work On?", 
//         a: "We work on AI-powered products, ecommerce platforms, SaaS and enterprise applications, mobile apps, and secure digital systems. Each project is tailored to specific business goals." 
//     },
//     { 
//         q: "How Do You Approach Project Delivery?", 
//         a: "We follow an agile, precision-led methodology focusing on rapid prototyping and continuous feedback loops to ensure high-quality delivery." 
//     },
//     { 
//         q: "Do You Provide Support After Launch?", 
//         a: "Yes, we offer comprehensive post-launch support packages to ensure your software remains secure, updated, and scalable." 
//     },
//     { 
//         q: "Do You Work With Startups Or Only Enterprises?", 
//         a: "We work with both! Our approach scales to meet the unique needs of seed-stage startups and global enterprises alike." 
//     }
// ];

// const container = document.getElementById('faq-container');

// faqs.forEach((faq, index) => {
//     const card = document.createElement('div');
//     card.className = `bg-[#111827] border border-gray-800 rounded-xl overflow-hidden cursor-pointer transition-all duration-300`;
    
//     card.innerHTML = `
//         <div class="p-6 flex justify-between items-center transition-colors duration-300" id="header-${index}">
//             <h3 class="text-xl font-semibold">${faq.q}</h3>
//             <span class="text-emerald-400 text-2xl font-light" id="icon-${index}">+</span>
//         </div>
//         <div class="px-6 pb-6 text-gray-400 hidden" id="content-${index}">
//             <p>${faq.a}</p>
//         </div>
//     `;

//     card.onclick = () => {
//         const content = document.getElementById(`content-${index}`);
//         const icon = document.getElementById(`icon-${index}`);
//         const header = document.getElementById(`header-${index}`);
        
//         const isOpen = !content.classList.contains('hidden');

//         if (isOpen) {
//             content.classList.add('hidden');
//             card.classList.replace('bg-gray-800', 'bg-[#111827]');
//             icon.innerHTML = '+';
//             icon.classList.replace('text-white', 'text-emerald-400');
//         } else {
//             content.classList.remove('hidden');
//             card.classList.replace('bg-[#111827]', 'bg-gray-800');
//             icon.innerHTML = '✕';
//             icon.classList.replace('text-emerald-400', 'text-white');
//         }
//     };

//     container.appendChild(card);
// });