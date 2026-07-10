// Course data per category
const coursesByCategory = {
  design: [
    {
      thumb: "./public/page/coursepage/images1.jpg",
      title: "UI Design Fundamentals: Crafting Clean Digital Interfaces",
      name: "Chan Narin",
      role: "UI Designer",
      students: "50+ Students",
      images: "./public/page/homepage/narin.jpg"
    },
    {
      thumb: "./public/page/coursepage/images3.png",
      title: "Motion Graphics for Beginners: Bringing Static Ideas to Life",
      name: "Chan Narin",
      role: "Motion Designer",
      students: "80+ Students",
      images: "./public/page/homepage/narin.jpg"
    },
    {
      thumb: "./public/page/coursepage/images4.jpg",
      title: "Brand Identity Design: From Concept to Style Guide",
      name: "Chan Narin",
      role: "Brand Designer",
      students: "65+ Students",
      images: "./public/page/homepage/narin.jpg"
    },
    {
      thumb: "./public/page/coursepage/image5.png",
      title: "Typography Essentials: Pairing Fonts Like a Pro",
      name: "Chan Narin",
      role: "Type Designer",
      students: "40+ Students",
      images: "./public/page/homepage/narin.jpg"
    },
    {
      thumb: "./public/page/coursepage/images6.png",
      title: "Design Systems 101: Building Scalable Component Libraries",
      name: "Chan Narin",
      role: "Product Designer",
      students: "90+ Students",
      images: "./public/page/homepage/narin.jpg"
    },
    {
      thumb: "./public/page/coursepage/images7.jpg",
      title: "Illustration for Web: Adding Personality to Interfaces",
      name: "Chan Narin",
      role: "Illustrator",
      students: "55+ Students",
      images: "./public/page/homepage/narin.jpg"
    },
  ],
  development: [
    {
      thumb: "./public/page/coursepage/images8.jpg",
      title: "Python for Financial Analysis: Next and Algorithmic Trading",
      name: "Boeun Soama",
      role: "Python Developer",
      students: "50+ Student",
      images: "./public/page/homepage/soama.JPG"
    },
    {
      thumb: "./public/page/coursepage/images9.jpg",
      title: "Full-Stack Web Development with Modern JavaScript",
      name: "Boeun Soama",
      role: "Web Developer",
      students: "120+ Student",
      images: "./public/page/homepage/soama.JPG"
    },
    {
      thumb: "./public/page/coursepage/images10.jpg",
      title: "Mastering React: Hooks, State and Component Patterns",
      name: "Boeun Soama",
      role: "Frontend Engineer",
      students: "95+ Student",
      images: "./public/page/homepage/soama.JPG"
    },
    {
      thumb: "./public/page/coursepage/images11.jpg",
      title: "Backend Engineering with Node.js and PostgreSQL",
      name: "Boeun Soama",
      role: "Backend Developer",
      students: "70+ Student",
      images: "./public/page/homepage/soama.JPG"
    },
    {
      thumb: "./public/page/coursepage/images12.jpg",
      title: "Mobile App Development with Swift for Beginners",
      name: "Boeun Soama",
      role: "iOS Developer",
      students: "60+ Student",
      images: "./public/page/homepage/soama.JPG"
    },
    {
      thumb: "./public/page/coursepage/images13.jpg",
      title: "DevOps Foundations: CI/CD Pipelines Explained",
      name: "Boeun Soama",
      role: "DevOps Engineer",
      students: "45+ Student",
      images: "./public/page/homepage/soama.JPG"
    },
  ],
  business: [
    {
      thumb: "./public/page/coursepage/image14.jpg",
      title: "Startup Fundamentals: From Idea to First Customer",
      name: "Moeun Senghour",
      role: "Business Coach",
      students: "50+ Student",
      images: "./public/page/homepage/senghour.jpg"
    },
    {
      thumb: "./public/page/coursepage/images15.jpg",
      title: "Negotiation Skills That Win Better Deals",
      name: "Moeun Senghour",
      role: "Negotiation Coach",
      students: "75+ Student",
      images: "./public/page/homepage/senghour.jpg"
    },
    {
      thumb: "./public/page/coursepage/images16.jpg",
      title: "Financial Modeling for Small Business Owners",
      name: "Moeun Senghour",
      role: "Financial Analyst",
      students: "65+ Student",
      images: "./public/page/homepage/senghour.jpg"
    },
    {
      thumb: "./public/page/coursepage/images17.jpg",
      title: "Leadership Essentials: Managing High-Performing Teams",
      name: "Moeun Senghour",
      role: "Leadership Coach",
      students: "85+ Student",
      images: "./public/page/homepage/senghour.jpg"
    },
    {
      thumb: "./public/page/coursepage/images18.jpg",
      title: "Marketing Strategy for Early-Stage Startups",
      name: "Moeun Senghour",
      role: "Growth Strategist",
      students: "40+ Student",
      images: "./public/page/homepage/senghour.jpg"
    },
    {
      thumb: "./public/page/coursepage/images19.png",
      title: "Business Analytics: Making Decisions with Data",
      name: "Moeun Senghour",
      role: "Business Analyst",
      students: "55+ Student",
      images: "./public/page/homepage/senghour.jpg"
    },
  ],
  data: [
    {
      thumb: "./public/page/coursepage/images20.jpg",
      title: "Python for Financial Analysis: Next and Algorithmic Trading",
      name: "Loeun Vandeth",
      role: "Data Scientist",
      students: "50+ Student",
      images: "./public/page/homepage/vandeth.png"
    },
    {
      thumb: "./public/page/coursepage/images21.jpg",
      title: "Machine Learning Foundations with Scikit-Learn",
      name: "Loeun Vandeth",
      role: "ML Engineer",
      students: "110+ Student",
      images: "./public/page/homepage/vandeth.png"
    },
    {
      thumb: "./public/page/coursepage/images22.jpg",
      title: "Data Visualization: Telling Stories with Charts",
      name: "Loeun Vandeth",
      role: "Data Analyst",
      students: "68+ Student",
      images: "./public/page/homepage/vandeth.png"
    },
    {
      thumb: "./public/page/coursepage/images23.jpg",
      title: "SQL for Analysts: Queries That Actually Scale",
      name: "Loeun Vandeth",
      role: "Data Engineer",
      students: "72+ Student",
      images: "./public/page/homepage/vandeth.png"
    },
    {
      thumb: "./public/page/coursepage/images24.jpg",
      title: "Deep Learning Basics: Neural Networks Explained",
      name: "Loeun Vandeth",
      role: "AI Researcher",
      students: "90+ Student",
      images: "./public/page/homepage/vandeth.png"
    },
    {
      thumb: "./public/page/coursepage/images25.jpg",
      title: "Statistics for Data Science: A Practical Primer",
      name: "Loeun Vandeth",
      role: "Statistician",
      students: "58+ Student",
      images: "./public/page/homepage/vandeth.png"
    },
  ],
  marketing: [
    {
      thumb: "./public/page/coursepage/images26.jpg",
      title: "SEO Mastery: Ranking Higher with Less Guesswork",
      name: "Moeun Senghour",
      role: "SEO Specialist",
      students: "50+ Student",
      images: "./public/page/homepage/senghour.jpg"
    },
    {
      thumb: "./public/page/coursepage/images27.jpg",
      title: "Social Media Marketing for Small Brands",
      name: "Moeun Senghour",
      role: "Social Strategist",
      students: "80+ Student",
      images: "./public/page/homepage/senghour.jpg"
    },
    {
      thumb: "./public/page/coursepage/images28.jpg",
      title: "Email Marketing That Converts: Lists to Loyalty",
      name: "Moeun Senghour",
      role: "CRM Marketer",
      students: "63+ Student",
      images: "./public/page/homepage/senghour.jpg"
    },
    {
      thumb: "./public/page/coursepage/images29.jpg",
      title: "Content Marketing Strategy for Modern Brands",
      name: "Moeun Senghour",
      role: "Content Lead",
      students: "95+ Student",
      images: "./public/page/homepage/senghour.jpg"
    },
    {
      thumb: "./public/page/coursepage/images30.jpg",
      title: "Paid Ads 101: Running Profitable Campaigns",
      name: "Moeun Senghour",
      role: "Performance Marketer",
      students: "47+ Student",
      images: "./public/page/homepage/senghour.jpg"
    },
    {
      thumb: "./public/page/coursepage /images31.jpg",
      title: "Brand Storytelling: Connecting with Your Audience",
      name: "Moeun Senghour",
      role: "Brand Strategist",
      students: "58+ Student",
      images: "./public/page/homepage/senghour.jpg"
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
                        <div class="avatar">
                          <img src=${c.images} alt="">
                        </div>
                        <div>
                            <div class="name">${c.name}</div>
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

  // Leaving search mode: reset heading/status and clear the ?q= param + hero input
  const heading = document.getElementById("coursesHeading");
  const status = document.getElementById("searchStatus");
  const heroInput = document.getElementById("heroSearchInput");
  heading.innerHTML = `Popular <span style="color: gray;">Courses</span>`;
  status.style.display = "none";
  status.innerHTML = "";
  if (heroInput) heroInput.value = "";
  const url = new URL(window.location);
  url.searchParams.delete("q");
  window.history.replaceState({}, "", url);

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

// ===== SEARCH FEATURE =====

// Flattens every category into one array so we can search across all of them at once
function getAllCourses() {
  const all = [];
  Object.keys(coursesByCategory).forEach((cat) => {
    coursesByCategory[cat].forEach((c) => all.push({ ...c, cat }));
  });
  return all;
}

// Renders a given list of courses (already resolved, with a `cat` field) into the grid
function renderCourseCards(list) {
  const grid = document.getElementById("courseGrid");
  grid.innerHTML = "";
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
                    <span class="category-pill">${c.cat.charAt(0).toUpperCase() + c.cat.slice(1)}</span>
                </div>
                <h3>${c.title}</h3>
                <div class="instructor-row">
                    <div class="instructor">
                        <div class="avatar">
                          <img src=${c.images} alt="">
                        </div>
                        <div>
                            <div class="name">${c.name}</div>
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

// Searches title, instructor name, instructor role, and category for the query text
function searchCourses(query) {
  const q = query.trim().toLowerCase();
  if (!q) return getAllCourses();
  return getAllCourses().filter((c) =>
    c.title.toLowerCase().includes(q) ||
    c.name.toLowerCase().includes(q) ||
    c.role.toLowerCase().includes(q) ||
    c.cat.toLowerCase().includes(q)
  );
}

function runSearch(query) {
  const heading = document.getElementById("coursesHeading");
  const status = document.getElementById("searchStatus");
  const tabs = document.getElementById("tabs");
  const results = searchCourses(query);

  // Switch heading/status into "search mode"
  heading.innerHTML = `Search results for <span style="color: gray;">"${query}"</span>`;
  tabs.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));

  status.style.display = "block";
  status.innerHTML = results.length
    ? `${results.length} course${results.length === 1 ? "" : "s"} found. <a href="#" id="clearSearchLink" style="color:#1a9e5c;">Clear search</a>`
    : `No courses matched "${query}". <a href="#" id="clearSearchLink" style="color:#1a9e5c;">Clear search</a>`;

  document.getElementById("clearSearchLink").addEventListener("click", (e) => {
    e.preventDefault();
    clearSearch();
  });

  if (results.length) {
    renderCourseCards(results);
  } else {
    document.getElementById("courseGrid").innerHTML =
      `<p style="grid-column:1/-1; text-align:center; color:gray; padding: 40px 0;">
        Try a different keyword, or browse a category above.
      </p>`;
  }
}

function clearSearch() {
  const heading = document.getElementById("coursesHeading");
  const status = document.getElementById("searchStatus");
  const heroInput = document.getElementById("heroSearchInput");

  heading.innerHTML = `Popular <span style="color: gray;">Courses</span>`;
  status.style.display = "none";
  status.innerHTML = "";
  if (heroInput) heroInput.value = "";

  document.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));
  document.querySelector('.tab[data-cat="design"]').classList.add("active");

  // Clean the ?q= param from the URL without reloading the page
  const url = new URL(window.location);
  url.searchParams.delete("q");
  window.history.replaceState({}, "", url);

  renderCourses("design");
}

function triggerHeroSearch() {
  const input = document.getElementById("heroSearchInput");
  const query = input.value;
  if (!query.trim()) {
    clearSearch();
    return;
  }
  const url = new URL(window.location);
  url.searchParams.set("q", query);
  window.history.replaceState({}, "", url);
  runSearch(query);
}

const heroSearchBtn = document.getElementById("heroSearchBtn");
const heroSearchInput = document.getElementById("heroSearchInput");
if (heroSearchBtn) {
  heroSearchBtn.addEventListener("click", triggerHeroSearch);
}
if (heroSearchInput) {
  heroSearchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") triggerHeroSearch();
  });
}

// ===== INITIAL LOAD =====
// If the page was opened with ?q=..., that came from the navbar search on
// another page — run the search immediately instead of the default "design" tab.
const initialQuery = new URLSearchParams(window.location.search).get("q");
if (initialQuery) {
  if (heroSearchInput) heroSearchInput.value = initialQuery;
  runSearch(initialQuery);
} else {
  renderCourses("design");
}
