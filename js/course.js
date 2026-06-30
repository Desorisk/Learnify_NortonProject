// Course data per category
const coursesByCategory = {
  design: [
    {
      thumb: "./public/page/coursepage/images1.jpg",
      title: "UI Design Fundamentals: Crafting Clean Digital Interfaces",
      name: "Adam Smith",
      role: "UI Designer",
      students: "50+ Students",
    },
    {
      thumb: "./public/page/coursepage/images3.png",
      title: "Motion Graphics for Beginners: Bringing Static Ideas to Life",
      name: "Lina Cho",
      role: "Motion Designer",
      students: "80+ Students",
    },
    {
      thumb: "./public/page/coursepage/images4.jpg",
      title: "Brand Identity Design: From Concept to Style Guide",
      name: "Omar Reyes",
      role: "Brand Designer",
      students: "65+ Students",
    },
    {
      thumb: "./public/page/coursepage/image5.png",
      title: "Typography Essentials: Pairing Fonts Like a Pro",
      name: "Sara Lim",
      role: "Type Designer",
      students: "40+ Students",
    },
    {
      thumb: "./public/page/coursepage/images6.png",
      title: "Design Systems 101: Building Scalable Component Libraries",
      name: "Jon Park",
      role: "Product Designer",
      students: "90+ Students",
    },
    {
      thumb: "./public/page/coursepage/images7.jpg",
      title: "Illustration for Web: Adding Personality to Interfaces",
      name: "Maya Chen",
      role: "Illustrator",
      students: "55+ Students",
    },
  ],
  development: [
    {
      thumb: "./public/page/coursepage/images8.jpg",
      title: "Python for Financial Analysis: Next and Algorithmic Trading",
      name: "Adam Smith",
      role: "Python Developer",
      students: "50+ Student",
    },
    {
      thumb: "./public/page/coursepage/images9.jpg",
      title: "Full-Stack Web Development with Modern JavaScript",
      name: "Eli Brooks",
      role: "Web Developer",
      students: "120+ Student",
    },
    {
      thumb: "./public/page/coursepage/images10.jpg",
      title: "Mastering React: Hooks, State and Component Patterns",
      name: "Priya Nair",
      role: "Frontend Engineer",
      students: "95+ Student",
    },
    {
      thumb: "./public/page/coursepage/images11.jpg",
      title: "Backend Engineering with Node.js and PostgreSQL",
      name: "Diego Ruiz",
      role: "Backend Developer",
      students: "70+ Student",
    },
    {
      thumb: "./public/page/coursepage/images12.jpg",
      title: "Mobile App Development with Swift for Beginners",
      name: "Anna Kim",
      role: "iOS Developer",
      students: "60+ Student",
    },
    {
      thumb: "./public/page/coursepage/images13.jpg",
      title: "DevOps Foundations: CI/CD Pipelines Explained",
      name: "Marcus Lee",
      role: "DevOps Engineer",
      students: "45+ Student",
    },
  ],
  business: [
    {
      thumb: "./public/page/coursepage/image14.jpg",
      title: "Startup Fundamentals: From Idea to First Customer",
      name: "Adam Smith",
      role: "Business Coach",
      students: "50+ Student",
    },
    {
      thumb: "./public/page/coursepage/images15.jpg",
      title: "Negotiation Skills That Win Better Deals",
      name: "Rachel Stone",
      role: "Negotiation Coach",
      students: "75+ Student",
    },
    {
      thumb: "./public/page/coursepage/images16.jpg",
      title: "Financial Modeling for Small Business Owners",
      name: "Tom Harris",
      role: "Financial Analyst",
      students: "65+ Student",
    },
    {
      thumb: "./public/page/coursepage/images17.jpg",
      title: "Leadership Essentials: Managing High-Performing Teams",
      name: "Nina Patel",
      role: "Leadership Coach",
      students: "85+ Student",
    },
    {
      thumb: "./public/page/coursepage/images18.jpg",
      title: "Marketing Strategy for Early-Stage Startups",
      name: "Carl Yu",
      role: "Growth Strategist",
      students: "40+ Student",
    },
    {
      thumb: "./public/page/coursepage/images19.png",
      title: "Business Analytics: Making Decisions with Data",
      name: "Lena Fox",
      role: "Business Analyst",
      students: "55+ Student",
    },
  ],
  data: [
    {
      thumb: "./public/page/coursepage/images20.jpg",
      title: "Python for Financial Analysis: Next and Algorithmic Trading",
      name: "Adam Smith",
      role: "Data Scientist",
      students: "50+ Student",
    },
    {
      thumb: "./public/page/coursepage/images21.jpg",
      title: "Machine Learning Foundations with Scikit-Learn",
      name: "Hana Suzuki",
      role: "ML Engineer",
      students: "110+ Student",
    },
    {
      thumb: "./public/page/coursepage/images22.jpg",
      title: "Data Visualization: Telling Stories with Charts",
      name: "Victor Cole",
      role: "Data Analyst",
      students: "68+ Student",
    },
    {
      thumb: "./public/page/coursepage/images23.jpg",
      title: "SQL for Analysts: Queries That Actually Scale",
      name: "Grace Han",
      role: "Data Engineer",
      students: "72+ Student",
    },
    {
      thumb: "./public/page/coursepage/images24.jpg",
      title: "Deep Learning Basics: Neural Networks Explained",
      name: "Sam Okafor",
      role: "AI Researcher",
      students: "90+ Student",
    },
    {
      thumb: "./public/page/coursepage/images25.jpg",
      title: "Statistics for Data Science: A Practical Primer",
      name: "Ivy Zhang",
      role: "Statistician",
      students: "58+ Student",
    },
  ],
  marketing: [
    {
      thumb: "./public/page/coursepage/images26.jpg",
      title: "SEO Mastery: Ranking Higher with Less Guesswork",
      name: "Adam Smith",
      role: "SEO Specialist",
      students: "50+ Student",
    },
    {
      thumb: "./public/page/coursepage/images27.jpg",
      title: "Social Media Marketing for Small Brands",
      name: "Tara Wells",
      role: "Social Strategist",
      students: "80+ Student",
    },
    {
      thumb: "./public/page/coursepage/images28.jpg",
      title: "Email Marketing That Converts: Lists to Loyalty",
      name: "Ben Carter",
      role: "CRM Marketer",
      students: "63+ Student",
    },
    {
      thumb: "./public/page/coursepage/images29.jpg",
      title: "Content Marketing Strategy for Modern Brands",
      name: "Olive Grant",
      role: "Content Lead",
      students: "95+ Student",
    },
    {
      thumb: "./public/page/coursepage/images30.jpg",
      title: "Paid Ads 101: Running Profitable Campaigns",
      name: "Felix Roy",
      role: "Performance Marketer",
      students: "47+ Student",
    },
    {
      thumb: "./public/page/coursepage /images31.jpg",
      title: "Brand Storytelling: Connecting with Your Audience",
      name: "Mona Singh",
      role: "Brand Strategist",
      students: "58+ Student",
    },
  ],
};

function renderCourses(cat) {
  const grid = document.getElementById("courseGrid");
  grid.innerHTML = "";
  const list = coursesByCategory[cat] || [];
  list.forEach((c) => {
    const card = document.createElement("div");
    card.className = "course-card";
    card.innerHTML = `
            <div class="thumb">
                <img src="${c.thumb}" alt="${c.title}" onerror="this.style.display='none'">
                <div class="play-badge">10x Lesson</div>
            </div>
            <div class="card-body">
                <div class="card-top">
                    <span class="lesson-tag">10x Lesson</span>
                    <span class="category-pill">${cat.charAt(0).toUpperCase() + cat.slice(1)}</span>
                </div>
                <h3>${c.title}</h3>
                <div class="instructor-row">
                    <div class="instructor">
                        <div class="avatar"></div>
                        <div>
                            <div class="name">${c.name}</div>
                            <div class="role">${c.role}</div>
                        </div>
                    </div>
                    <div class="students">${c.students}</div>
                </div>
                <div class="card-footer">
                    <div class="stars">★★★★★</div>
                    <div class="enroll">Enroll Now</div>
                </div>
            </div>
        `;
    grid.appendChild(card);
  });
}
document.getElementById("tabs").addEventListener("click", (e) => {
  const btn = e.target.closest(".tab");
  if (!btn) return;
  document
    .querySelectorAll(".tab")
    .forEach((t) => t.classList.remove("active"));
  btn.classList.add("active");
  renderCourses(btn.dataset.cat);
});

function scrollPartners(dir) {
  const track = document.getElementById("partnerItems");
  const current = getComputedStyle(track).animationPlayState;
  track.style.animationPlayState = "paused";
  let pos = track.getBoundingClientRect().left;
  track.style.transform = `translateX(${pos + dir * -120}px)`;
  setTimeout(() => (track.style.animationPlayState = "running"), 1500);
}

renderCourses("design");
courses.design.forEach((course) => {
  document.getElementById("course-list").innerHTML += `
        <div class="course-card">
            <img src="${course.thumb}" alt="${course.title}" class="course-image">

            <div class="course-content">
                <h3>${course.title}</h3>
                <p>${course.name}</p>
                <span>${course.role}</span>
                <p>${course.students}</p>
            </div>
        </div>
    `;
});
