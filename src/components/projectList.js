const projectList = [
  {
    id: 0,
    name: "Chefs Mentor",
    img: "/assets/recipeSearchApp.png",
    alt: "Chefs Mentor Image",
    date: new Date("2020-05-09"),
    selected: false,
    description: "This is the Chefs Mentor Project",
    images: [
      { id: 0, link: "/assets/RecipeSearchApp.png", alt: "Slide One" },
      { id: 1, link: "/assets/recipeimage2.png", alt: "Slide Two" },
      { id: 2, link: "/assets/recipeimage3.png", alt: "Slide Three" },
    ],
    liveURL: "https://hmdnetizen.github.io/search-recipes/",
    repo: "https://github.com/hmdNetizen/search-recipes",
  },
  {
    id: 1,
    name: "URL Shortener",
    img: "/assets/urlshortenerImg1.jpg",
    alt: "Url Shortener Image",
    date: new Date("2020-09-07"),
    selected: false,
    description:
      "This project is a challenge from Frontend Mentor. It entails the building of the landing page and integrating it with the Rebrandly API.",
    images: [
      { id: 0, link: "/assets/urlshortenerImg1.jpg", alt: "Slide One" },
      { id: 1, link: "/assets/urlshortenerImg2.png", alt: "Slide Two" },
      { id: 2, link: "/assets/urlshortenerImg3.jpg", alt: "Slide Three" },
    ],
    liveURL: "https://hmdnetizen-url-shortener.netlify.app/",
    repo: "https://github.com/hmdNetizen/urlShortener-API",
    functions: [
      {
        id: 0,
        description:
          "View the optimal layout for the site depending on their device's screen size",
      },
      { id: 1, description: "Shorten any valid URL" },
      {
        id: 2,
        description:
          "See a list of their shortened links, even after refreshing the browser",
      },
      {
        id: 3,
        description:
          "Copy the shortened link to their clipboard in a single click",
      },
      {
        id: 4,
        description:
          "Receive an error message when the `form` is submitted if:",
        options: [
          "The 'input' field is empty",
          "The typed in URL is not valid",
          "Link already exist",
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Booklist Tracker with Dark Mode",
    img: "/assets/booklist.png",
    alt: "Book List Image",
    date: new Date("2020-07-07"),
    selected: false,
    description: "This is the Booklist Tracker Project",
    images: [
      { id: 0, link: "/assets/booklist1.png", alt: "Slide One" },
      { id: 1, link: "/assets/booklist2.png", alt: "Slide Two" },
      { id: 2, link: "/assets/booklist3.png", alt: "Slide Three" },
    ],

    repo: "https://github.com/hmdNetizen/BookList-App-With-Dark-Mode",
  },
  {
    id: 3,
    name: "EasyBank Landing Page",
    img: "/assets/easyBankLandingPage.png",
    alt: "Easy Bank Image",
    date: new Date("2020-07-22"),
    selected: false,
    description: "This is the EasyBank Landing Page Project",
    images: [
      { id: 0, link: "/assets/EasybankLandingPage.png", alt: "First Slide" },
      { id: 1, link: "/assets/EasybankLandingPage2.jpg", alt: "Second Slide" },
      { id: 2, link: "/assets/EasybankLandingPage3.jpg", alt: "Third Slide" },
    ],
    liveURL: "https://easybank-landing-page-lake.vercel.app/",
    repo: "https://github.com/hmdNetizen/EasyBank-Landing-Page",
  },
  {
    id: 4,
    name: "Manage Landing Page",
    img: "/assets/manageLandingPage.png",
    alt: "Manage Landing Page Image",
    date: new Date("2020-07-31"),
    selected: false,
    description: "This is the Manage Landing Page Project",
    images: [
      { id: 0, link: "/assets/manageLandingPage.png", alt: "Slide One" },
      { id: 1, link: "/assets/manage2.png", alt: "Slide Two" },
      { id: 2, link: "/assets/manage3.png", alt: "Slide Three" },
    ],
    liveURL: "https://manage-landiing-page.netlify.app/",
    repo: "https://github.com/hmdNetizen/Manage-landing-page",
  },
  {
    id: 5,
    name: "Javascript Quiz",
    img: "/assets/quizApp.png",
    alt: "Quiz App Image",
    date: new Date("2020-01-04"),
    selected: false,
    description: "This is the Javascript Quiz Project",
    images: [
      { id: 0, link: "/assets/quiz2.png", alt: "Slide One" },
      { id: 1, link: "/assets/quiz.png", alt: "Slide Two" },
      { id: 1, link: "/assets/quiz3.png", alt: "Slide Three" },
    ],
    repo: "https://github.com/hmdNetizen/Quiz-Application",
  },
];

const getProjects = () => {
  return projectList;
};

export default getProjects;
