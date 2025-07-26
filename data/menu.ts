export interface INavMenuItem {
  key: string;
  icon?: string;
  url: string;
  items?: INavMenuItem[];
  extraItems?: INavMenuItem[];
}

export const navMenu: INavMenuItem[] = [
  {
    key: "class6to12",
    url: "/class-6-12",
    items: [
      { key: "hsc", url: "/class-6-12/hsc", icon: "/icons/hsc.svg" },
      {
        key: "classTen",
        url: "/class-6-12/class-ten",
        icon: "/icons/class-ten.svg",
      },
      {
        key: "classNine",
        url: "/class-6-12/class-nine",
        icon: "/icons/class-nine.svg",
      },
      {
        key: "classEight",
        url: "/class-6-12/class-eight",
        icon: "/icons/class-eight.svg",
      },
      {
        key: "classSeven",
        url: "/class-6-12/class-seven",
        icon: "/icons/class-seven.svg",
      },
      {
        key: "classSix",
        url: "/class-6-12/class-six",
        icon: "/icons/class-six.svg",
      },
    ],
  },
  {
    key: "skills",
    url: "/skills",
    items: [
      {
        key: "allCourses",
        url: "/skills/all-courses",
        icon: "/icons/all-courses.svg",
      },
      {
        key: "languageLearning",
        url: "/skills/language-learning",
        icon: "/icons/language-learning.jpeg",
      },
      {
        key: "freelancing",
        url: "/skills/freelancing",
        icon: "/icons/freelancing.jpeg",
      },
      { key: "bundle", url: "/skills/bundle", icon: "/icons/bundle.jpeg" },
      {
        key: "skillsIt",
        url: "/skills/skills-it",
        icon: "/icons/skills-it.jpeg",
      },
      {
        key: "designCreative",
        url: "/skills/design-creative",
        icon: "/icons/design-creative.jpeg",
      },
      {
        key: "careerReadiness",
        url: "/skills/career-readiness",
        icon: "/icons/career-readiness.jpeg",
      },
      { key: "kids", url: "/skills/kids", icon: "/icons/kids.jpeg" },
      {
        key: "professional",
        url: "/skills/professional",
        icon: "/icons/professional.jpeg",
      },
      { key: "free", url: "/skills/free", icon: "/icons/free.jpeg" },
    ],
  },
  {
    key: "admission",
    url: "/admission",
  },
  {
    key: "onlineBatch",
    url: "/online-batch",
    items: [
      { key: "class610", url: "/online-batch/class-6-10" },
      { key: "hsc", url: "/online-batch/hsc" },
    ],
  },
  {
    key: "englishCenter",
    url: "/english-center",
    items: [
      {
        key: "allProgrammes",
        url: "/english-center/all-programmes",
        icon: "/icons/all-programmes.jpeg",
      },
      {
        key: "ieltsProgramme",
        url: "/english-center/ielts-programme",
        icon: "/icons/ielts-programme.jpeg",
      },
      {
        key: "spokenEnglishJunior",
        url: "/english-center/spoken-english-junior",
        icon: "/icons/spoken-english-junior.jpeg",
      },
      {
        key: "englishFoundationProgramme",
        url: "/english-center/english-foundation-programme",
        icon: "/icons/english-foundation-programme.jpeg",
      },
      {
        key: "kidsEnglish",
        url: "/english-center/kids-english",
        icon: "/icons/kids-english.svg",
      },
    ],
  },
  {
    key: "more",
    url: "/more",
    items: [
      { key: "jobPreparation", url: "/job-preparation-courses" },
      { key: "blog", url: "/blog" },
      { key: "bookStore", url: "/book-store" },
      { key: "freeNotesGuides", url: "/free-notes-guides" },
      { key: "academicContent", url: "/academic-digital-content" },
      { key: "verifyCertificate", url: "/verify-certificate" },
    ],
    extraItems: [
      { key: "careerRecruitment", url: "/career-recruitment" },
      { key: "joinAsTeacher", url: "/join-as-a-teacher" },
      { key: "joinAsAffiliate", url: "/join-as-an-affiliate" },
    ],
  },
];
