// ==========================================================================
// ១. ការកំណត់អថេរពី URL (URL Parameters)
// ==========================================================================
const params = new URLSearchParams(window.location.search);
const categoryId = params.get("category") || "education";
const typeId = params.get("type"); // បន្ថែមសម្រាប់ឆែកមើលប្រភេទផ្នែក

// ==========================================================================
// ២. ទិន្នន័យរចនាសម្ព័ន្ធវិញ្ញាសា (Exam Types & Sub Topics)
// ==========================================================================
const examTypes = [
  {
    id: "culture",
    title: "វប្បធម៌ទូទៅ",
    description: "សំណួរទាក់ទងនឹងចំណេះដឹងទូទៅ រដ្ឋបាល និងសង្គម។",
    icon: "fa-solid fa-earth-asia",
  },
  {
    id: "language",
    title: "ភាសាបរទេស",
    description: "វិញ្ញាសាភាសាអង់គ្លេស និងភាសាបារាំង។",
    icon: "fa-solid fa-language",
  },
  {
    id: "primary",
    title: "គ្រូមត្តេយ្យ និងបឋម",
    description: "វិញ្ញាសាសម្រាប់ត្រៀមប្រឡងគ្រូបង្រៀនកម្រិតបឋម។",
    icon: "fa-solid fa-children",
  },
  {
    id: "secondary",
    title: "គ្រូអនុវិទ្យាល័យ",
    description: "វិញ្ញាសាសម្រាប់ត្រៀមប្រឡងគ្រូបង្រៀនកម្រិតមធ្យមសិក្សា។",
    icon: "fa-solid fa-school",
  },
  {
    id: "highschool",
    title: "គ្រូវិទ្យាល័យ",
    description: "វិញ្ញាសាសម្រាប់ត្រៀមប្រឡងគ្រូបង្រៀនកម្រិតឧត្តមសិក្សា។",
    icon: "fa-solid fa-graduation-cap",
  },
];

// បន្ថែមប្រធានបទលម្អិតសម្រាប់ វប្បធម៌ទូទៅ
const subTopicData = {
  culture: [
    {
      id: "public-service",
      title: "មុខងារសាធារណៈ",
      icon: "fa-solid fa-user-tie",
      description: "ច្បាប់សហលក្ខន្តិកៈមន្ត្រីរាជការស៊ីវិល",
    },
    {
      id: "teacher-ethics",
      title: "ក្រមសីលធម៌វិជ្ជាជីវៈគ្រូបង្រៀន",
      icon: "fa-solid fa-chalkboard-user",
      description: "បទដ្ឋានសីលធម៌ និងវិន័យគ្រូ",
    },
    {
      id: "gov-policy",
      title: "គោលនយោបាយរបស់រាជរដ្ឋាភិបាល",
      icon: "fa-solid fa-gavel",
      description: "យុទ្ធសាស្ត្របញ្ចកោណ និងកម្មវិធីនយោបាយ",
    },
    {
      id: "public-admin",
      title: "រដ្ឋបាលសាធារណៈ",
      icon: "fa-solid fa-building-columns",
      description: "ការគ្រប់គ្រងរដ្ឋបាលថ្នាក់ជាតិ",
    },
    {
      id: "civics",
      title: "ពលរដ្ឋវិទ្យា",
      icon: "fa-solid fa-users",
      description: "សិទ្ធិ និងកាតព្វកិច្ចពលរដ្ឋ",
    },
    {
      id: "history",
      title: "ប្រវត្តិសាស្ត្រកម្ពុជា",
      icon: "fa-solid fa-monument",
      description: "ព្រឹត្តិការណ៍សំខាន់ៗរបស់កម្ពុជា",
    },
    {
      id: "geography",
      title: "ភូមិសាស្ត្រកម្ពុជា",
      icon: "fa-solid fa-map-location-dot",
      description: "ធនធានធម្មជាតិ និងភូមិសាស្ត្រ",
    },
    {
      id: "asean",
      title: "អាស៊ាន",
      icon: "fa-solid fa-globe",
      description: "ចំណេះដឹងអំពីសហគមន៍អាស៊ាន",
    },
    {
      id: "economy",
      title: "សេដ្ឋកិច្ចកម្ពុជា",
      icon: "fa-solid fa-chart-line",
      description: "ស្ថានភាពសេដ្ឋកិច្ច និងហិរញ្ញវត្ថុ",
    },
    {
      id: "mixed",
      title: "ចម្រុះ",
      icon: "fa-solid fa-layer-group",
      description: "វិញ្ញាសាចម្រុះគ្រប់វិញ្ញាសាខាងលើ",
    },
  ],
  language: [
    {
      id: "english",
      title: "ភាសាអង់គ្លេស",
      icon: "fa-solid fa-font",
      description: "វិញ្ញាសាភាសាអង់គ្លេសសម្រាប់ត្រៀមប្រឡង",
    },
    {
      id: "french",
      title: "ភាសាបារាំង",
      icon: "fa-solid fa-language",
      description: "វិញ្ញាសាភាសាបារាំងសម្រាប់ត្រៀមប្រឡង",
    },
  ],
  primary: [
    {
      id: "khmer",
      title: "ភាសាខ្មែរ",
      icon: "fa-solid fa-book-open",
      description: "វិញ្ញាសាភាសាខ្មែរសម្រាប់គ្រូបឋមសិក្សា",
    },
    {
      id: "math",
      title: "គណិតវិទ្យា",
      icon: "fa-solid fa-calculator",
      description: "វិញ្ញាសាគណិតវិទ្យាសម្រាប់គ្រូបឋមសិក្សា",
    },
  ],
  secondary: [
    {
      id: "khmer-lit",
      title: "អក្សរសាស្ត្រខ្មែរ",
      icon: "fa-solid fa-book",
      description: "វិញ្ញាសាអក្សរសាស្ត្រខ្មែរ កម្រិតអនុវិទ្យាល័យ",
    },
    {
      id: "math",
      title: "គណិតវិទ្យា",
      icon: "fa-solid fa-calculator",
      description: "វិញ្ញាសាគណិតវិទ្យា កម្រិតអនុវិទ្យាល័យ",
    },
    {
      id: "physics",
      title: "រូបវិទ្យា",
      icon: "fa-solid fa-atom",
      description: "វិញ្ញាសារូបវិទ្យា កម្រិតអនុវិទ្យាល័យ",
    },
    {
      id: "chemistry",
      title: "គីមីវិទ្យា",
      icon: "fa-solid fa-flask",
      description: "វិញ្ញាសាគីមីវិទ្យា កម្រិតអនុវិទ្យាល័យ",
    },
    {
      id: "biology",
      title: "ជីវវិទ្យា",
      icon: "fa-solid fa-dna",
      description: "វិញ្ញាសាជីវវិទ្យា កម្រិតអនុវិទ្យាល័យ",
    },
    {
      id: "earth-science",
      title: "ផែនដីវិទ្យា",
      icon: "fa-solid fa-earth-americas",
      description: "វិញ្ញាសាផែនដីវិទ្យា កម្រិតអនុវិទ្យាល័យ",
    },
    {
      id: "history",
      title: "ប្រវត្តិវិទ្យា",
      icon: "fa-solid fa-monument",
      description: "វិញ្ញាសាប្រវត្តិវិទ្យា កម្រិតអនុវិទ្យាល័យ",
    },
    {
      id: "ethics-civics",
      title: "សីលធម៌-ពលរដ្ឋវិជ្ជា",
      icon: "fa-solid fa-scale-balanced",
      description: "វិញ្ញាសាសីលធម៌ និងពលរដ្ឋវិជ្ជា",
    },
    {
      id: "geography",
      title: "ភូមិវិទ្យា",
      icon: "fa-solid fa-map-location-dot",
      description: "វិញ្ញាសាភូមិវិទ្យា កម្រិតអនុវិទ្យាល័យ",
    },
    {
      id: "english",
      title: "ភាសាអង់គ្លេស",
      icon: "fa-solid fa-font",
      description: "វិញ្ញាសាភាសាអង់គ្លេស កម្រិតអនុវិទ្យាល័យ",
    },
    {
      id: "french",
      title: "ភាសាបារាំង",
      icon: "fa-solid fa-language",
      description: "វិញ្ញាសាភាសាបារាំង កម្រិតអនុវិទ្យាល័យ",
    },
    {
      id: "ict",
      title: "ព័ត៌មានវិទ្យា (ICT)",
      icon: "fa-solid fa-laptop-code",
      description: "វិញ្ញាសាព័ត៌មានវិទ្យា និងកុំព្យូទ័រ",
    },
    {
      id: "agriculture",
      title: "កសិកម្ម",
      icon: "fa-solid fa-seedling",
      description: "វិញ្ញាសាកសិកម្ម កម្រិតអនុវិទ្យាល័យ",
    },
  ],
  highschool: [
    {
      id: "khmer-lit",
      title: "អក្សរសាស្ត្រខ្មែរ",
      icon: "fa-solid fa-book",
      description: "វិញ្ញាសាអក្សរសាស្ត្រខ្មែរ កម្រិតវិទ្យាល័យ",
    },
    {
      id: "math",
      title: "គណិតវិទ្យា",
      icon: "fa-solid fa-calculator",
      description: "វិញ្ញាសាគណិតវិទ្យា កម្រិតវិទ្យាល័យ",
    },
    {
      id: "physics",
      title: "រូបវិទ្យា",
      icon: "fa-solid fa-atom",
      description: "វិញ្ញាសារូបវិទ្យា កម្រិតវិទ្យាល័យ",
    },
    {
      id: "chemistry",
      title: "គីមីវិទ្យា",
      icon: "fa-solid fa-flask",
      description: "វិញ្ញាសាគីមីវិទ្យា កម្រិតវិទ្យាល័យ",
    },
    {
      id: "biology",
      title: "ជីវវិទ្យា",
      icon: "fa-solid fa-dna",
      description: "វិញ្ញាសាជីវវិទ្យា កម្រិតវិទ្យាល័យ",
    },
    {
      id: "earth-science",
      title: "ផែនដីវិទ្យា",
      icon: "fa-solid fa-earth-americas",
      description: "វិញ្ញាសាផែនដីវិទ្យា កម្រិតវិទ្យាល័យ",
    },
    {
      id: "history",
      title: "ប្រវត្តិវិទ្យា",
      icon: "fa-solid fa-monument",
      description: "វិញ្ញាសាប្រវត្តិវិទ្យា កម្រិតវិទ្យាល័យ",
    },
    {
      id: "ethics-civics",
      title: "សីលធម៌-ពលរដ្ឋវិជ្ជា",
      icon: "fa-solid fa-scale-balanced",
      description: "វិញ្ញាសាសីលធម៌ និងពលរដ្ឋវិជ្ជា (វិទ្យាល័យ)",
    },
    {
      id: "geography",
      title: "ភូមិវិទ្យា",
      icon: "fa-solid fa-map-location-dot",
      description: "វិញ្ញាសាភូមិវិទ្យា កម្រិតវិទ្យាល័យ",
    },
    {
      id: "english",
      title: "ភាសាអង់គ្លេស",
      icon: "fa-solid fa-font",
      description: "វិញ្ញាសាភាសាអង់គ្លេស កម្រិតវិទ្យាល័យ",
    },
    {
      id: "french",
      title: "ភាសាបារាំង",
      icon: "fa-solid fa-language",
      description: "វិញ្ញាសាភាសាបារាំង កម្រិតវិទ្យាល័យ",
    },
    {
      id: "ict",
      title: "ព័ត៌មានវិទ្យា (ICT)",
      icon: "fa-solid fa-laptop-code",
      description: "វិញ្ញាសាព័ត៌មានវិទ្យា និងកុំព្យូទ័រ (វិទ្យាល័យ)",
    },
    {
      id: "agriculture",
      title: "កសិកម្ម",
      icon: "fa-solid fa-seedling",
      description: "វិញ្ញាសាកសិកម្ម កម្រិតវិទ្យាល័យ",
    },
  ],
};

// ==========================================================================
// ៣. អនុគមន៍ជំនួយ (Helper Functions)
// ==========================================================================
function getCategory(id) {
  return examData.find((category) => category.id === id) || examData[0];
}

function getExamType(id) {
  const allTypes = [
    ...examTypes,
    ...(subTopicData.culture || []),
    ...(subTopicData.language || []),
    ...(subTopicData.primary || []),
    ...(subTopicData.secondary || []),
    ...(subTopicData.highschool || []),
  ];
  return allTypes.find((type) => type.id === id) || examTypes[0];
}

// ==========================================================================
// ៤. អនុគមន៍គ្រប់គ្រងការបង្ហាញទំព័រ (Render Functions)
// ==========================================================================
function setupTheme() {
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const currentTheme = localStorage.getItem("treamExamTheme") || "light";

  if (currentTheme === "dark") {
    document.body.classList.add("dark-theme");
    if (themeToggleBtn)
      themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
      const isDark = document.body.classList.contains("dark-theme");
      localStorage.setItem("treamExamTheme", isDark ? "dark" : "light");
      themeToggleBtn.innerHTML = isDark
        ? '<i class="fa-solid fa-sun"></i>'
        : '<i class="fa-solid fa-moon"></i>';
    });
  }
}

function setupMenu() {
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("is-open");
  });
}

function renderHome() {
  const categoryList = document.getElementById("categoryList");
  if (!categoryList) return;

  categoryList.innerHTML = examData
    .map(
      (category) => `
        <a class="category-card" style="--accent: ${category.color}; ${category.id !== "education" ? "opacity: 0.6;" : ""}" href="category.html?category=${category.id}">
          <img src="${category.image}" alt="${category.title}" />
          <div>
            <h3 style="display: flex; align-items: center; flex-wrap: wrap; gap: 8px;">
              ${category.title}
              ${category.id !== "education" ? '<span style="font-size: 0.65rem; background: #fff3e0; color: #e67e22; padding: 2px 8px; border-radius: 12px; font-weight: 600; border: 1px solid rgba(230,126,34,0.3);">កំពុងអភិវឌ្ឍ</span>' : ""}
            </h3>
            <p>${category.description}</p>
          </div>
          <i class="fa-solid fa-chevron-right"></i>
        </a>
      `,
    )
    .join("");
}

function renderCategory() {
  const detail = document.getElementById("categoryDetail");
  if (!detail) return;

  const category = getCategory(categoryId);

  // បន្ថែមលក្ខខណ្ឌឆែក ID ក្រសួង (ឧបមាថា 'education' គឺជា ID របស់ក្រសួងអប់រំ)
  if (categoryId !== "education") {
    window.location.replace("under-development.html");
    return;
  }

  detail.innerHTML = `
    <img src="${category.image}" alt="${category.title}" />
    <div>
      <h1>${category.title}</h1>
      <p>${category.description}</p>
    </div>
  `;

  const examTypeList = document.getElementById("examTypeList");
  if (!examTypeList) return;

  // កំណត់ទិន្នន័យដែលត្រូវបង្ហាញ (កាតធំ ឬ កាតតូច)
  const isSubTopic = typeId && subTopicData[typeId];
  const displayData = isSubTopic ? subTopicData[typeId] : examTypes;
  const sectionTitle = document.querySelector(".section-head h2");

  if (isSubTopic && sectionTitle) {
    sectionTitle.textContent = `វិញ្ញាសា ${getExamType(typeId).title}`;
  }

  let backBtnHtml = "";
  if (isSubTopic) {
    backBtnHtml = `
      <a class="exam-type-card" href="category.html?category=${category.id}" style="border-color: var(--blue); background: rgba(52, 103, 214, 0.05);">
        <span class="exam-type-icon" style="background: var(--blue); color: white;">
          <i class="fa-solid fa-arrow-left"></i>
        </span>
        <div>
          <h3>ត្រឡប់ក្រោយ</h3>
          <p>ត្រឡប់ទៅកាន់ប្រភេទវិញ្ញាសា</p>
        </div>
      </a>
    `;
  }

  examTypeList.innerHTML =
    backBtnHtml +
    displayData
      .map((type) => {
        // បើចុចលើកាតដែលមានកូនបន្ត (ដូចជាវប្បធម៌ទូទៅ) ឱ្យនៅទំព័រ category ដដែល តែប្តូរ URL
        // បើគ្មានកូនបន្តទេ ឱ្យទៅទំព័រ quiz.html
        const nextHref = subTopicData[type.id]
          ? `category.html?category=${category.id}&type=${type.id}`
          : isSubTopic
            ? `quiz.html?category=${category.id}&type=${type.id}&level=${typeId}`
            : `quiz.html?category=${category.id}&type=${type.id}`;

        return `
        <a class="exam-type-card" href="${nextHref}">
          <span class="exam-type-icon">
            <i class="${type.icon}"></i>
          </span>
          <div>
            <h3>${type.title}</h3>
            <p>${type.description}</p>
          </div>
          <i class="fa-solid fa-chevron-right"></i>
        </a>
      `;
      })
      .join("");
}

function renderResult() {
  const scorePercent = document.getElementById("scorePercent");
  if (!scorePercent) return;

  const result = JSON.parse(localStorage.getItem("treamExamResult") || "null");

  if (!result) {
    window.location.replace("index.html");
    return;
  }

  const category = result ? getCategory(result.categoryId) : null;
  const type = result ? getExamType(result.typeId) : null;
  const correct = result?.correct || 0;
  const total = result?.total || 0;
  const percent = total ? Math.round((correct / total) * 100) : 0;

  scorePercent.textContent = `${percent}%`;
  document.getElementById("correctCount").textContent = correct;
  document.getElementById("totalCount").textContent = total;
  document.getElementById("resultCategory").textContent =
    type?.title || category?.shortTitle || "-";
  document.getElementById("scoreRing").style.background =
    `conic-gradient(var(--green) ${percent * 3.6}deg, var(--line) 0deg)`;

  const resultTitle = document.getElementById("resultTitle");
  const resultMessage = document.getElementById("resultMessage");
  const retryBtn = document.getElementById("retryBtn");

  if (percent >= 80) {
    resultTitle.textContent = "ល្អណាស់!";
    resultMessage.textContent =
      "អ្នកបានឆ្លើយត្រឹមត្រូវភាគច្រើន។ បន្តហាត់បន្ថែមដើម្បីរក្សាលទ្ធផលនេះ។";
  } else if (percent >= 50) {
    resultTitle.textContent = "លទ្ធផលល្អ";
    resultMessage.textContent =
      "អ្នកមានមូលដ្ឋានល្អហើយ។ ពិនិត្យមេរៀនបន្ថែម នឹងធ្វើបានកាន់តែប្រសើរ។";
  } else {
    resultTitle.textContent = "សូមព្យាយាមបន្ថែម";
    resultMessage.textContent =
      "លទ្ធផលនេះជាការហាត់សាកល្បង។ សូមរំលឹកមេរៀន រួចសាកល្បងម្តងទៀត។";
  }

  if (retryBtn && category)
    retryBtn.href = `quiz.html?category=${category.id}&type=${type?.id || "general"}`;

  // បង្ហាញការពិនិត្យចម្លើយឡើងវិញ (Review Answers) នៅខាងក្រោមប៊ូតុងសកម្មភាព
  const resultActions = document.querySelector(".result-actions");
  if (resultActions && result.questions) {
    const reviewContainer = document.createElement("div");
    reviewContainer.className = "review-container";
    reviewContainer.style.width = "100%";
    reviewContainer.style.paddingBottom = "2rem";

    reviewContainer.innerHTML = `
      <div style="margin-top: 1rem;">
        <button id="toggleReviewBtn" class="secondary-action link-action" style="width: 100%; cursor: pointer; border: 1px solid var(--line); display: flex; align-items: center; justify-content: center; gap: 8px;">
          <i class="fa-solid fa-magnifying-glass"></i>
          <span>ពិនិត្យចម្លើយឡើងវិញ</span>
        </button>
      </div>
      <div id="reviewSection" style="display: none; margin-top: 2rem; width: 100%; text-align: left;">
        <h2 style="font-size: 1.1rem; margin-bottom: 1.5rem; text-align: center; color: var(--ink);">លម្អិតនៃចម្លើយ</h2>
        <div class="review-list">
          ${result.questions
            .map((q, index) => {
              const userAns = result.answers[index];
              const isCorrect = userAns === q.answer;
              return `
              <div style="background: var(--surface); padding: 1.2rem; border-radius: 12px; margin-bottom: 1rem; border-left: 5px solid ${isCorrect ? "var(--green, #28a745)" : "#ff3b30"}; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                <p style="margin-bottom: 0.8rem; line-height: 1.5;"><strong>${index + 1}. ${q.text}</strong></p>
                <div style="font-size: 0.95rem; display: flex; flex-direction: column; gap: 0.4rem;">
                  <div style="color: var(--green, #28a745); display: flex; align-items: flex-start; gap: 8px;"><i class="fa-solid fa-circle-check" style="margin-top: 3px;"></i> <span>ចម្លើយត្រឹមត្រូវ៖ ${q.options[q.answer]}</span></div>
                  ${!isCorrect ? `<div style="color: #ff3b30; display: flex; align-items: flex-start; gap: 8px;"><i class="fa-solid fa-circle-xmark" style="margin-top: 3px;"></i> <span>ចម្លើយរបស់អ្នក៖ ${userAns !== null ? q.options[userAns] : "មិនបានឆ្លើយ"}</span></div>` : ""}
                </div>
              </div>`;
            })
            .join("")}
        </div>
      </div>`;

    resultActions.after(reviewContainer);

    const toggleBtn = document.getElementById("toggleReviewBtn");
    const reviewSection = document.getElementById("reviewSection");
    if (toggleBtn && reviewSection) {
      toggleBtn.addEventListener("click", () => {
        const isHidden = reviewSection.style.display === "none";
        reviewSection.style.display = isHidden ? "block" : "none";
        toggleBtn.querySelector("span").textContent = isHidden
          ? "លាក់ការពិនិត្យ"
          : "ពិនិត្យចម្លើយឡើងវិញ";
        toggleBtn.querySelector("i").className = isHidden
          ? "fa-solid fa-eye-slash"
          : "fa-solid fa-magnifying-glass";
      });
    }
  }
}

// ==========================================================================
// ៥. ការចាប់ផ្តើមដំណើរការកម្មវិធី (Initialization)
// ==========================================================================
setupTheme();
setupMenu();
renderHome();
renderCategory();
renderResult();
