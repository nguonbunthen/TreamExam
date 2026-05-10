// ==========================================================================
// ១. ការកំណត់អថេរពី URL (URL Parameters)
// ==========================================================================
const params = new URLSearchParams(window.location.search);
const categoryId = params.get("category") || "education";
const typeId = params.get("type"); // បន្ថែមសម្រាប់ឆែកមើលប្រភេទផ្នែក
const topicId = params.get("topic"); // បន្ថែមសម្រាប់ឆែកមើលផ្នែកលម្អិត (វិញ្ញាសាទី១-២០)

// ==========================================================================
// ២. ទិន្នន័យរចនាសម្ព័ន្ធវិញ្ញាសា (Exam Types & Sub Topics)
// ==========================================================================
const examTypes = [
  {
    id: "culture",
    title: "វិញ្ញាសាពហុចម្លើយ វប្បធម៌ទូទៅ",
    description: "សំណួរទាក់ទងនឹងចំណេះដឹងទូទៅ រដ្ឋបាល និងសង្គម។",
    icon: "fa-solid fa-earth-asia",
    color: "#d88718", // ពណ៌ទឹកក្រូច
  },
  {
    id: "language",
    title: "វិញ្ញាសាពហុចម្លើយ ភាសាបរទេស",
    description: "វិញ្ញាសាភាសាអង់គ្លេស និងភាសាបារាំង។",
    icon: "fa-solid fa-language",
    color: "#9b59b6", // ពណ៌ស្វាយ
  },
  {
    id: "primary",
    title: "វិញ្ញាសាពហុចម្លើយ គ្រូមត្តេយ្យ និងបឋម",
    description: "វិញ្ញាសាសម្រាប់ត្រៀមប្រឡងគ្រូបង្រៀនកម្រិតបឋម។",
    icon: "fa-solid fa-children",
    color: "#25845a", // ពណ៌បៃតង
  },
  {
    id: "secondary",
    title: "វិញ្ញាសាពហុចម្លើយ គ្រូអនុវិទ្យាល័យ",
    description: "វិញ្ញាសាសម្រាប់ត្រៀមប្រឡងគ្រូបង្រៀនកម្រិតមធ្យមសិក្សា។",
    icon: "fa-solid fa-school",
    color: "#039bb8", // ពណ៌ខៀវខ្ចី
  },
  {
    id: "highschool",
    title: "វិញ្ញាសាពហុចម្លើយ គ្រូវិទ្យាល័យ",
    description: "វិញ្ញាសាសម្រាប់ត្រៀមប្រឡងគ្រូបង្រៀនកម្រិតឧត្តមសិក្សា។",
    icon: "fa-solid fa-graduation-cap",
    color: "#cf4242", // ពណ៌ក្រហម
  },
];

// បន្ថែមប្រធានបទលម្អិតសម្រាប់ វប្បធម៌ទូទៅ
const subTopicData = {
  culture: [
    {
      id: "mixed",
      title: "វិញ្ញាសាចម្រុះ",
      icon: "fa-solid fa-layer-group",
      description: "វិញ្ញាសាចម្រុះគ្រប់វិញ្ញាសាទាំងអស់ខាងក្រោម",
    },
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
            <h3 style="display: flex; align-items: center; flex-wrap: wrap; gap: 8px; color: ${category.color};">
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

  // កំណត់ទិន្នន័យដែលត្រូវបង្ហាញ (កាតធំ ឬ កាតតូច)
  const isSubTopic = typeId && subTopicData[typeId] && !topicId;
  const isExamSet = !!topicId; // កំពុងស្ថិតក្នុងទំព័រវិញ្ញាសាទី១-២០

  // កំណត់ព័ត៌មានសម្រាប់កាតផ្នែកខាងលើ
  let headerTitle = category.title;
  let headerDesc = category.description;
  let headerColor = category.color;
  let headerIconHtml = `<img src="${category.image}" alt="${category.title}" style="width: 60px; height: 60px; object-fit: contain;" />`;

  if (isExamSet) {
    const currentTopic = getExamType(topicId);
    headerTitle = currentTopic.title;
    headerDesc = currentTopic.description;
    headerColor =
      currentTopic.color ||
      (typeId ? getExamType(typeId).color : null) ||
      category.color;
    headerIconHtml = `<div style="width: 60px; height: 60px; display: flex; align-items: center; justify-content: center;"><i class="${currentTopic.icon}" style="font-size: 36px; color: ${headerColor};"></i></div>`;
  } else if (typeId) {
    const currentType = getExamType(typeId);
    headerTitle = currentType.title;
    headerDesc = currentType.description;
    headerColor = currentType.color || category.color;
    headerIconHtml = `<div style="width: 60px; height: 60px; display: flex; align-items: center; justify-content: center;"><i class="${currentType.icon}" style="font-size: 36px; color: ${headerColor};"></i></div>`;
  }

  detail.innerHTML = `
    <div class="animate-enter" style="grid-column: 1 / -1; display: flex; align-items: center; gap: 16px; background-color: ${headerColor}26; border: 1px solid ${headerColor}80; border-radius: var(--radius); padding: 18px; margin-bottom: 8px; box-shadow: 0 6px 20px ${headerColor}26; animation-delay: 0s;">
      <div style="background: var(--paper); padding: 12px; border-radius: 12px; box-shadow: 0 4px 10px ${headerColor}40; display: flex; align-items: center; justify-content: center; flex-shrink: 0; border: 1px solid ${headerColor}33;">
        ${headerIconHtml}
      </div>
      <div>
        <h2 style="font-size: 1.25rem; color: ${headerColor}; margin: 0 0 6px 0; line-height: 1.4;">
          ${headerTitle}
        </h2>
        <p style="color: var(--muted); font-size: 0.95rem; margin: 0; line-height: 1.5;">
          ${headerDesc}
        </p>
      </div>
    </div>
  `;

  const examTypeList = document.getElementById("examTypeList");
  if (!examTypeList) return;

  let displayData = [];
  if (isExamSet) {
    // បង្កើតកាតចំនួន ២០ សម្រាប់អនុវត្ត
    for (let i = 1; i <= 20; i++) {
      displayData.push({
        id: `set-${i}`,
        title: `វិញ្ញាសាទី ${i}`,
        description: `អនុវត្តវិញ្ញាសាទី ${i} សម្រាប់${getExamType(topicId).title}`,
        icon: "fa-solid fa-file-lines",
      });
    }
  } else if (isSubTopic) {
    displayData = subTopicData[typeId];
  } else {
    displayData = examTypes;
  }

  const sectionTitle = document.querySelector(".section-head h2");

  if (sectionTitle) {
    if (isExamSet) {
      sectionTitle.textContent = getExamType(topicId).title;
    } else if (isSubTopic) {
      sectionTitle.textContent = getExamType(typeId).title;
    }
  }

  let backBtnHtml = "";
  if (isExamSet) {
    // ប៊ូតុងត្រឡប់ក្រោយសម្រាប់ពេលស្ថិតក្នុងវិញ្ញាសាទី១-២០
    const goBackHref =
      typeId && typeId !== topicId
        ? `category.html?category=${category.id}&type=${typeId}`
        : `category.html?category=${category.id}`;

    backBtnHtml = `
      <a class="exam-type-card animate-enter" href="${goBackHref}" style="border-color: ${category.color}60; background-color: var(--surface); box-shadow: 0 4px 15px ${category.color}15; animation-delay: 0.1s;">
        <span class="exam-type-icon" style="background: ${category.color}; color: white; box-shadow: 0 4px 10px ${category.color}40;">
          <i class="fa-solid fa-arrow-left"></i>
        </span>
        <div>
          <h3 style="color: ${category.color}; margin-bottom: 6px;">ត្រឡប់ក្រោយ</h3>
          <p style="margin: 0;">ត្រឡប់ទៅកាន់ ${typeId && typeId !== topicId ? getExamType(typeId).title : "ប្រភេទវិញ្ញាសា"}</p>
        </div>
      </a>
    `;
  } else if (isSubTopic) {
    backBtnHtml = `
      <a class="exam-type-card animate-enter" href="category.html?category=${category.id}" style="border-color: ${category.color}60; background-color: var(--surface); box-shadow: 0 4px 15px ${category.color}15; animation-delay: 0.1s;">
        <span class="exam-type-icon" style="background: ${category.color}; color: white; box-shadow: 0 4px 10px ${category.color}40;">
          <i class="fa-solid fa-arrow-left"></i>
        </span>
        <div>
          <h3 style="color: ${category.color}; margin-bottom: 6px;">ត្រឡប់ក្រោយ</h3>
          <p style="margin: 0;">ត្រឡប់ទៅកាន់ប្រភេទវិញ្ញាសា</p>
        </div>
      </a>
    `;
  }

  examTypeList.innerHTML =
    backBtnHtml +
    displayData
      .map((type, index) => {
        // កំណត់ URL ទៅតាមកម្រិតនៃវិញ្ញាសា (បើជា 'mixed' ចូលឆ្លើយសំណួរតែម្តង)
        const nextHref = isExamSet
          ? `quiz.html?category=${category.id}&type=${topicId}&level=${typeId}&set=${type.id}`
          : subTopicData[type.id]
            ? `category.html?category=${category.id}&type=${type.id}`
            : type.id === "mixed"
              ? `quiz.html?category=${category.id}&type=${type.id}&level=${typeId || ""}`
              : `category.html?category=${category.id}&type=${typeId || type.id}&topic=${type.id}`;

        const typeColor = type.color || headerColor || "var(--primary)";
        const delay = 0.1 + (backBtnHtml ? index + 1 : index) * 0.05; // តម្រៀបពេលចេញមកម្តងមួយៗ

        return `
        <a class="exam-type-card animate-enter" href="${nextHref}" style="border-color: ${typeColor}80; background-color: var(--surface); box-shadow: 0 4px 15px ${typeColor}20; animation-delay: ${delay}s;">
          <span class="exam-type-icon" style="background-color: ${typeColor}33; color: ${typeColor}; box-shadow: inset 0 0 0 1px ${typeColor}40;">
            <i class="${type.icon}"></i>
          </span>
          <div>
            <h3 style="color: ${typeColor}; margin-bottom: 6px;">${type.title}</h3>
            <p style="margin: 0;">${type.description}</p>
          </div>
          <i class="fa-solid fa-chevron-right" style="color: ${typeColor}; opacity: 0.9;"></i>
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

  const nextSetBtn = document.getElementById("nextSetBtn");

  if (result.rawSetId) {
    // ប្រសិនបើកំពុងធ្វើវិញ្ញាសាទី១-២០
    const currentSetNum = parseInt(result.rawSetId.replace("set-", ""));

    // បង្ហាញប៊ូតុង "បន្តទៅវិញ្ញាសាបន្ទាប់" ប្រសិនបើមិនទាន់ដល់វិញ្ញាសាទី ២០
    if (nextSetBtn && currentSetNum < 20) {
      nextSetBtn.style.display = "flex";
      nextSetBtn.href = `quiz.html?category=${result.categoryId}&type=${result.rawTypeId || ""}&level=${result.rawLevelId || ""}&set=set-${currentSetNum + 1}`;

      // ប្តូរប៊ូតុងធ្វើតេស្តម្តងទៀតទៅជាប៊ូតុងរង (Secondary)
      if (retryBtn) retryBtn.className = "secondary-action";
    }
  }

  if (retryBtn && category) {
    // កំណត់តំណភ្ជាប់ប៊ូតុង "ធ្វើតេស្តម្តងទៀត" ឱ្យចំវិញ្ញាសាដែលទើបនឹងធ្វើ
    let retryUrl = `quiz.html?category=${category.id}`;
    if (result.rawTypeId) retryUrl += `&type=${result.rawTypeId}`;
    if (result.rawLevelId) retryUrl += `&level=${result.rawLevelId}`;
    if (result.rawSetId) retryUrl += `&set=${result.rawSetId}`;
    else if (type) retryUrl += `&type=${type.id}`;

    retryBtn.href = retryUrl;

    // ប្តូរឈ្មោះប៊ូតុងប្រសិនបើវាជាវិញ្ញាសាចម្រុះ
    if (result.rawTypeId === "mixed" || (type && type.id === "mixed")) {
      const btnSpan = retryBtn.querySelector("span");
      const btnIcon = retryBtn.querySelector("i");
      if (btnSpan) btnSpan.textContent = "បង្កើតវិញ្ញាសាចម្រុះថ្មី";
      if (btnIcon) btnIcon.className = "fa-solid fa-shuffle";
    }
  }

  // កំណត់តំណភ្ជាប់ប៊ូតុង "ជ្រើសរើសប្រភេទផ្សេង" ឱ្យត្រឡប់ទៅបញ្ជីវិញ្ញាសាទី១-២០
  const chooseOtherBtn = document.getElementById("chooseOtherBtn");
  if (chooseOtherBtn && category) {
    let exitUrl = `category.html?category=${category.id}`;
    if (result.rawSetId && result.rawLevelId && result.rawTypeId) {
      exitUrl += `&type=${result.rawLevelId}&topic=${result.rawTypeId}`;
    } else if (result.rawLevelId) {
      exitUrl += `&type=${result.rawLevelId}`;
    } else if (
      result.rawTypeId &&
      result.rawTypeId !== "general" &&
      result.rawTypeId !== "mixed"
    ) {
      exitUrl += `&type=${result.rawTypeId}`;
    }
    chooseOtherBtn.href = exitUrl;
  }

  // បង្ហាញការពិនិត្យចម្លើយឡើងវិញ (Review Answers) នៅខាងក្រោមប៊ូតុងសកម្មភាព
  const resultActions = document.querySelector(".result-actions");
  if (resultActions && result.questions) {
    const reviewContainer = document.createElement("div");
    reviewContainer.className = "review-container";
    reviewContainer.style.width = "100%";
    reviewContainer.style.paddingBottom = "2rem";

    reviewContainer.innerHTML = `
      <div style="margin-top: 1rem;">
        <button id="toggleReviewBtn" class="primary-action" style="width: 100%; cursor: pointer; background: var(--green, #28a745); color: white; border: none; display: flex; align-items: center; justify-content: center; gap: 8px;">
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
                <p style="margin-bottom: 1rem; line-height: 1.5; color: var(--ink);"><strong>${index + 1}. ${q.text}</strong></p>
                <div style="font-size: 0.95rem; display: flex; flex-direction: column; gap: 0.6rem;">
                  ${!isCorrect ? `<div style="background: rgba(255, 59, 48, 0.08); border: 1px solid rgba(255, 59, 48, 0.2); color: #ff3b30; padding: 10px 12px; border-radius: 8px; display: flex; align-items: flex-start; gap: 8px;"><i class="fa-solid fa-circle-xmark" style="margin-top: 2px; font-size: 1.1rem;"></i> <span><strong>ចម្លើយរបស់អ្នក៖</strong> ${userAns !== null ? q.options[userAns] : "មិនបានឆ្លើយ"}</span></div>` : ""}
                  <div style="background: rgba(40, 167, 69, 0.08); border: 1px solid rgba(40, 167, 69, 0.2); color: var(--green, #28a745); padding: 10px 12px; border-radius: 8px; display: flex; align-items: flex-start; gap: 8px;"><i class="fa-solid fa-circle-check" style="margin-top: 2px; font-size: 1.1rem;"></i> <span><strong>ចម្លើយត្រឹមត្រូវ៖</strong> ${q.options[q.answer]}</span></div>
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
setupMenu();
renderHome();
renderCategory();
renderResult();
