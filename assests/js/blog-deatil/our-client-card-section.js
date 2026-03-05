const testimonials = [
  {
    text: '"Finite Loop worked like a true technical partner, not just a vendor. The final product was scalable, reliable, and built to last."',
    name: "Richard Davis",
    role: "Happy Client",
    image: "assests/images/client-trust-1.svg"
  },
  {
    text: '"Their attention to detail and clean execution ensured everything stayed on track. Communication was clear and delivery flawless."',
    name: "Mark Leborn",
    role: "Happy Client",
    image: "assests/images/client-trust-2.svg"
  },
  {
    text: '"They bring clarity to complex challenges. The end result was future-ready and incredibly well engineered."',
    name: "John Clark",
    role: "Happy Client",
    image: "assests/images/client-trust-3.svg"
  },
  {
    text: '"The AI automation solution reduced manual effort instantly. Practical, efficient, and results-driven engineering."',
    name: "Emily Josh",
    role: "Happy Client",
    image: "assests/images/client-trust-4.svg"
  },
  {
    text: '"They transformed our idea into a high-performing platform. A team that genuinely focuses on outcomes."',
    name: "John Parker",
    role: "Happy Client",
    image: "assests/images/client-trust-5.svg"
  }
];

function createCard(data) {
  return `
    <div class="max-w-[500px] backdrop-blur-md p-10 cards-all-inslider-user">
      <p class="mb-6 leading-relaxed">${data.text}</p>

      <div class="flex items-center gap-4">
          <img src="${data.image}" class="rounded-full object-cover"/>
        <div>
          <h4>${data.name}</h4>
          <span>${data.role}</span>
        </div>
      </div>
    </div>
  `;
}

const row1 = document.getElementById("sliderRow1");
const row2 = document.getElementById("sliderRow2");

function populateRow(row, direction) {
  let content = "";
  testimonials.forEach(t => content += createCard(t));
  testimonials.forEach(t => content += createCard(t));

  row.innerHTML = content;

  if(direction === "left") {
    row.style.animation = "scrollLeft 30s linear infinite";
  } else {
    row.style.animation = "scrollRight 30s linear infinite";
  }
}

populateRow(row1, "left");
populateRow(row2, "right");