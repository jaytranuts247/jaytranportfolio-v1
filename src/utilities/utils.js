export const techsMap = {
  html: 6,
  css: 7,
  sass: 18,
  javascript: 8,
  react: 9,
  redux: 10,
  reduxSaga: 11,
  styledComponents: 12,
  nodejs: 17,
  mongodb: 16,
  git: 14,
  vsc: 15,
  express: 8,
  firebase: 19,
  graphql: 20,
  chartjs: 21,
  materialui: 22,
  leaflet: 23
};

export const projectListInfo = [
  {
    name: "BnbConnect",
    image: "bnbconnect_demo",
    isGif: true,
    gifLink: null,
    intro: [
      "BnbConnect is a single-page, full-stack web application modeled after Airbnb and made to focus helping individual to effectively plan their trip. It use React.js and Redux for front-end and Node.js and MongoDB in the back-end. The website hosted on Heroku."
    ],
    techs: ["html", "sass", "react"],
    links: {
      github: "https://github.com/jaytranuts247/bnbconnect",
      demo: "https://bnbconnect.herokuapp.com/"
    },
    featuredShow: true
  },
  {
    name: "XFlix",
    image: "XFlix_demo",
    isGif: true,
    gifLink: "https://xfix.s3.us-east-2.amazonaws.com/XFlix_demo.gif",
    intro: [
      "XFlix is simplified version of NetFlix. It was created using React, and Firebase (hosting, authentication). XFlix also integrated with payment system with Firebase Stripe extension, which enable users to make payment via Stripe. The movies list was sourced from The MovieDB APIs fro frontend display and details."
    ],
    techs: ["react", "firebase", "html", "css"],
    links: {
      github: "https://github.com/jaytranuts247/xflix",
      demo: "https://xflix-69c66.web.app/"
    },
    featuredShow: true
  },
  {
    name: "Steak Awesome Restaurant",
    image: "steak_awesome_restaurant",
    gifLink:
      "https://bnbconnect.s3.us-east-2.amazonaws.com/steak_awesome_restaurent+(1).gif",
    isGif: true,
    intro: [
      "A Luxurious 5-stars Steak Restaurant Landing Page, integrated with beautiful smooth-animated Carousel. Made by React and advanced SCSS."
    ],
    techs: ["html", "sass", "react"],
    links: {
      github: "https://github.com/jaytranuts247/steakhouse_restaurent",
      demo: "https://steakawesome.netlify.app"
    },
    featuredShow: true
  },
  {
    name: "Covid-19 Tracker",
    image: "covid19_tracker",
    isGif: false,
    gifLink: null,
    intro: [
      "A Covid-19 tracker SPA made by react, chart.js, leaflet map to illustrate covid cases worldwide, and for each country geographically."
    ],
    techs: ["html", "css", "react", "materialui", "chartjs", "leaflet"],
    links: {
      github: "https://github.com/jaytranuts247/covid-tracker",
      demo: "https://covid-19-tracker-app-111b2.web.app/"
    },
    featuredShow: false
  },
  {
    name: "Weather App",
    image: "weather_app",
    isGif: false,
    gifLink: null,
    intro: [
      "Simple Weather forcast app that allow users search for weather conditions worldwide. Weather data is provided from Open Weather APIs"
    ],
    techs: ["html", "css", "react"],
    links: {
      github: "https://github.com/jaytranuts247/weatherApp",
      demo: "https://weatherforecast247.netlify.app/"
    },
    featuredShow: false
  },
  {
    name: "Natour",
    image: "natour",
    isGif: false,
    gifLink: null,
    intro: [
      "Simple travel landing page ceated React, advanced CSS and HTML. Following BEM best practices to create code that well organized, readable, and scalable."
    ],
    techs: ["html", "sass", "javascript"],
    links: {
      github: "https://github.com/jaytranuts247/natour",
      demo: "https://natourapp2020.herokuapp.com/"
    },
    featuredShow: false
  },
  {
    name: "Github Finder",
    image: "github_finder",
    isGif: false,
    gifLink: null,
    intro: [
      "Github finder is webapp to help users search for other users account on github. Using react-router-dom to enable user to navigate through different pages."
    ],
    techs: ["html", "css", "react"],
    links: {
      github: "https://github.com/jaytranuts247/RFTB-GitHUb-Finder",
      demo: "https://githubfinder2471989.netlify.app/"
    },
    featuredShow: false
  },
  {
    name: "Contact Keeper",
    image: "contact_keeper",
    isGif: false,
    gifLink: null,
    intro: [
      "Contact Keeper App is a MERN Stack app that allows users to login, sign up, create, edit, and delete contacts information."
    ],
    techs: ["html", "css", "react", "nodejs", "mongodb"],
    links: {
      github: "https://github.com/jaytranuts247/RFTB-ContactKeeper",
      demo: "https://rftb-contactkeeper.herokuapp.com/"
    },
    featuredShow: false
  },
  // {
  // 	name: "IT logger",
  // 	image: "it_logger",
  // 	intro:
  // 		"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus quia saepe error quasi molestias. Assumenda at, voluptatum odit unde molestias enim doloribus veritatis  nam laudantium.",
  // 	techs: ["html", "css", "react", "redux"],
  // 	links: {
  // 		github: "",
  // 		demo: "",
  // 	},
  // 	featuredShow: false,
  // },
  {
    name: "E-Commerce",
    image: "e-commerce",
    isGif: false,
    gifLink: null,
    intro: [
      "A full-stack ecommerce web application allowing fashion lover to do online shopping and make payment with Stripe. leverage Redux and Redux Saga for statemanagement on Frontend and using Firebase as Backend for user authentication and  storing shop data. "
    ],
    techs: ["html", "css", "react", "redux", "reduxSaga", "firebase"],
    links: {
      github: "https://github.com/jaytranuts247/E-commerce",
      demo: "https://crwn-ecommerce-250916.herokuapp.com/"
    },
    featuredShow: true
  },
  {
    name: "Keeper-App",
    image: "keeper-app",
    isGif: false,
    gifLink: null,
    intro: [
      "Keer-app is a MERN Stack SPA that modeled from Keeper Note App from Google. That allows user to sign up, login, create, edit, delete notes with beautiful masonry layout."
    ],
    techs: ["html", "css", "react", "mongodb", "nodejs"],
    links: {
      github: "https://github.com/jaytranuts247/Keeper-App-v2",
      demo: "https://keeper-app-2020.herokuapp.com/"
    },
    featuredShow: false
  },
  {
    name: "Snake Game",
    image: "snakegame",
    isGif: false,
    gifLink: null,
    intro: ["I make a simple snake game with html, css, and js"],
    techs: ["html", "css", "javascript"],
    links: {
      github: "https://github.com/jaytranuts247/snakegame",
      demo: "https://snakegamesimple.herokuapp.com/"
    },
    featuredShow: false
  },
  {
    name: "Simon Game",
    image: "simongame",
    isGif: false,
    gifLink: null,
    intro: ["I make a simple simon game with html, css, and js"],
    techs: ["html", "css", "javascript"],
    links: {
      github: "https://github.com/jaytranuts247/SimonGame",
      demo: "https://simongame2020.herokuapp.com/"
    },
    featuredShow: false
  }
];

/**
 * Checking if an image exist in your image folder
 */
export const loadImage = (variable) => {
  var imageSVG = new Image();
  var imagePNG = new Image();
  var url_image_svg = "../../../svg/svg-" + variable + ".svg";
  var url_image_png = "../../../svg/svg-" + variable + ".png";

  imageSVG.src = url_image_svg;
  imagePNG.src = url_image_png;

  console.log("image source width", variable, imageSVG.width, imagePNG.width);

  if (imageSVG.width !== 0) {
    return <img src={`../../../svg/svg-${variable}.svg`} alt="" />;
  } else if (imagePNG.width !== 0) {
    return <img src={`../../../svg/svg-${variable}.png`} alt="" />;
  } else {
    return <img src={`../../../svg/svg-9.svg`} alt="" />; // default react icon
  }
};
