const projects = [
  {
    id: "1",
    name: "Let's play tgther",
    heroku: true,
    descripcion:
      "App creada por hobby, un reproductor de YouTube online para ver videos junto a amigos, etc. Conexión por websockets usando Socket.io de NodeJS.",
    imagenes: [
      "https://i.imgur.com/NbhMy4s.png",
      "https://i.imgur.com/yGbl9zR.png",
      "https://i.imgur.com/QzzHuwd.png"
    ],
    url: "https://letsplaytgther.herokuapp.com/",
    gitRepo: "https://github.com/Joyfer/letsplaytgther",
    caracteristicas: [
      { icon: "nodejs", name: "Nodejs" },
      { icon: "language-javascript", name: "Javascript" },
      { icon: "bootstrap", name: "Bootstrap 4.5" },
      { icon: "server", name: "Express" },
      { icon: "web", name: "Socket.io" },
      { icon: "language-html5", name: "Templates EJS" }
    ]
  },
  {
    id: "2",
    name: "Portafolio diseñador",
    descripcion:
      "Portafolio sencillo estilo cartas de Facebook para mostrar imagenes, potenciado con tags para filtrar su contenido.",
    url: "https://joyfer-catalogo-fb.netlify.app/",
    imagenes: [
      "https://i.imgur.com/mAok9VK.png",
      "https://i.imgur.com/D9Y8dmK.png",
      "https://i.imgur.com/vl772Tj.png"
    ],
    caracteristicas: [
      { icon: "language-html5", name: "HTML" },
      { icon: "bootstrap", name: "Bootstrap 5" },
      { icon: "language-javascript", name: "Javascript" },
      { icon: "tag", name: "Filtrado de contenido dinámico" }
    ]
  },
  {
    id: "3",
    name: "Reproductor Youtube",
    heroku: true,
    descripcion:
      "Un Reproductor sencillo en Vue 2, con el poder de crear listas de reproducción.",
    imagenes: [
      "https://i.imgur.com/bCxqBhR.png",
      "https://i.imgur.com/ZRDzVr4.png",
      "https://i.imgur.com/QnmGvmi.png"
    ],
    url: "https://reproductor-joy.herokuapp.com/#/",
    caracteristicas: [
      { icon: "language-javascript", name: "Javascript" },
      { icon: "youtube", name: "Youtube Iframe" },
      { icon: "vuejs", name: "Vue 2" },
      { icon: "vuetify", name: "Vuetify" }
    ]
  },
  {
    id: "4",
    name: "E-Commerce NextJS",
    heroku: true,
    descripcion:
      "Una tienda online con NextJS usando Static Pages, Incremental Static Regeneration y Server Side Rendering.",
    imagenes: [
      "https://i.imgur.com/IBMkeE8.png",
      "https://i.imgur.com/GQccZ5M.png",
      "https://i.imgur.com/MNqfp1E.png"
    ],
    url: "https://next-joyfer.herokuapp.com/",
    gitRepo: "https://github.com/Joyfer/e-commerce",
    caracteristicas: [
      { icon: "react", name: "React" },
      { icon: "language-javascript", name: "Javascript" },
      { icon: "nodejs", name: "NextJS" },
      { icon: "material-ui", name: "Material-UI" }
    ]
  },
  {
    id: "5",
    name: "Let's play tgther 2",
    descripcion:
      "Let's play tgther 2, usando un cliente JAMStack con Nuxt y servidor en NodeJS.",
    imagenes: [
      "https://i.imgur.com/zXUS0TN.png",
      "https://i.imgur.com/WtLd7FT.png"
    ],
    url: "https://letsplaytgther2.netlify.app/",
    caracteristicas: [
      { icon: "language-javascript", name: "Javascript" },
      { icon: "nodejs", name: "Nodejs" },
      { icon: "vuejs", name: "Vue 2" },
      { icon: "vuetify", name: "Vuetify" },
      { icon: "nuxt", name: "NuxtJS" },
      { icon: "web", name: "Socket.io" }
    ]
  },
  {
    id: "6",
    gameZone: true,
    name: "React | To-do",
    gitRepo: "https://github.com/Joyfer/todoReact",
    descripcion: `Un To-do (Cosas por hacer), sencillo, creado en React con el Context API como state management y Material UI, con el 
      poder de guardar items en el almacenamiento del navegador siendo así una aplicación funcional.`,
    imagenes: ["https://i.imgur.com/cCIYFMl.png"],
    url: "https://joy-todo-react.netlify.app/",
    caracteristicas: [
      { icon: "language-javascript", name: "Javascript" },
      { icon: "react", name: "React" },
      { icon: "material-ui", name: "Material-UI" }
    ]
  },
  {
    id: "7",
    gameZone: true,
    name: "Vue 3 / TS | To-do",
    gitRepo: "https://github.com/Joyfer/todo-vue3-ts-twcss",
    descripcion: `Un To-do (Cosas por hacer), sencillo, creado en Vue 3 (Increíble) con el nuevo sistema Composable y Tailwind CSS, con el 
      poder de guardar items en el almacenamiento del navegador siendo así una aplicación funcional.`,
    imagenes: [
      "https://i.imgur.com/xcwqitg.png",
      "https://i.imgur.com/zftdWZj.png"
    ],
    url: "https://joy-todo-vue3.netlify.app/",
    caracteristicas: [
      { icon: "language-typescript", name: "Typescript" },
      { icon: "vuejs", name: "Vue 3" },
      { icon: "tailwind", name: "Tailwind CSS" },
      { icon: "web", name: "Vite" },
    ]
  },
  {
    id: "8",
    name: "Portafolio Web",
    gitRepo: "https://github.com/Joyfer/myweb",
    descripcion: `Portafolio web para mostrar mis proyectos e información sobre mí, usando
    jamstack con NuxtJS de Vue 2. (Este sitio)`,
    imagenes: ["https://i.imgur.com/WAMWSlS.png"],
    url: "https://joyferr-web.netlify.app/",
    caracteristicas: [
      { icon: "language-javascript", name: "Javascript" },
      { icon: "vuejs", name: "Vue 2" },
      { icon: "vuetify", name: "Vuetify" },
      { icon: "nuxt", name: "NuxtJS" },
      { icon: "translate", name: "i18n (Multi lenguaje)" }
    ]
  },
  {
    id: "9",
    gameZone: true,
    name: "Crowdfunding | Frontend Mentor",
    gitRepo: "https://github.com/Joyfer/crowdfunding-product",
    descripcion: `Prueba de Frontend mentor, donde uso Vue 3 con Typescript y Vite, también hago creación
    de varios composables functions.`,
    imagenes: [
      "https://i.imgur.com/FgbX2FR.png",
      "https://i.imgur.com/3X8R9bx.png",
      "https://i.imgur.com/uW44q2A.png",
      "https://i.imgur.com/Iy0K1NQ.png"
    ],
    url: "https://joy-crowdfunding-product.netlify.app/",
    caracteristicas: [
      { icon: "language-typescript", name: "Typescript" },
      { icon: "vuejs", name: "Vue 3" },
      { icon: "tailwind", name: "Tailwind CSS" },
      { icon: "web", name: "Vite" },
    ]
  }
];

export default projects;
