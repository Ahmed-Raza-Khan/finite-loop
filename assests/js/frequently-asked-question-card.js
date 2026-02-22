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
  card.className = "faq-card rounded-xl p-6 md:p-10 cursor-pointer transition-all duration-500";

  card.innerHTML = `
    <div class="flex justify-between items-center">
      <h3>${item.question}</h3>
      <span class="icon text-2xl">
        <img src="assests/images/asked-question-plus-sign.svg" width="20" height="20" alt="icon-plus">
      </span>
    </div>
    <p class="answer mt-4 pe-9 hidden">${item.answer}</p>
  `;

  card.addEventListener("click", function () {
  const answer = this.querySelector(".answer");
  const icon = this.querySelector(".icon");
  const isOpen = this.classList.contains("active");

  document.querySelectorAll(".faq-card").forEach(c => {
    c.classList.remove("active");
    c.querySelector(".answer").classList.add("hidden");
    c.querySelector(".icon").innerHTML =
      `<img src="assests/images/asked-question-plus-sign.svg" width="20" height="20" alt="icon-plus">`;
  });

  if (!isOpen) {
    this.classList.add("active");
    answer.classList.remove("hidden");
    icon.innerHTML =
      `<img src="assests/images/asked-question-cancel-sign.svg" width="20" height="20" alt="icon-cancel">`;
  }
});

  faqContainer.appendChild(card);
});