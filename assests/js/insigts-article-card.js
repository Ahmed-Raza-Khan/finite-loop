const blogData = [
  {
    image: "assests/images/whats-were-writing-1.png",
    badge: "Industry trends",
    date: "Jan 15, 2026",
    title: "Building Scalable Recommerce PlatformsKey Technical Challenges"
  },
  {
    image: "assests/images/whats-were-writing-2.png",
    badge: "Security",
    date: "Jan 15, 2026",
    title: "Security Best Practices for Ecommerce Platforms"
  },
  {
    image: "assests/images/whats-were-writing-3.png",
    badge: "Security",
    date: "Jan 15, 2026",
    title: "Headless Commerce: When and Why It Makes Sense"
  }
];

const blogContainer = document.getElementById("blogContainer");

blogData.forEach(item => {
  const card = document.createElement("div");
  card.className = "blog-card rounded-2xl p-4 md:p-6 cursor-pointer";

  card.innerHTML = `
    <img src="${item.image}" 
      class="rounded-lg w-full h-44 md:h-52 object-cover mb-6" 
      alt="blog image">

    <div class="flex justify-between items-center mb-4">
      <span class="px-4 py-1 rounded-full bg-transparent bloge-head-badge-all">
        ${item.badge}
      </span>
      <span class="bloge-head-date-all">
        ${item.date}
      </span>
    </div>

    <h3 class="leading-snug">
      ${item.title}
    </h3>
  `;

  blogContainer.appendChild(card);
});