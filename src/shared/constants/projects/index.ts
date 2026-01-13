import { IProjects } from "@/shared/types";

const PROJECTS: IProjects = [
  {
    id: 1,
    title: "Redev Course Projects",
    description: "Проекты и задания, выполненные в рамках курса Frontend Development. Включает различные компоненты и приложения.",
    tech: ["React", "TypeScript", "SCSS", "Vite", "Webpack"],
    githubUrl: "https://github.com/alagun/Redev",
    demoUrl: "https://alagun.github.io/Redev/",
    image: new URL("/static/projects/redev-preview.png", import.meta.url).href,    
  },
  {
    id: 2,
    title: "YoutubeSPA",
    description: "Клон YouTube с поиском видео, просмотром и системой рекомендаций. Интеграция с YouTube Data API.",
    tech: ["React", "YouTube API", "Material-UI", "Axios", "React Router"],
    githubUrl: "https://github.com/alagun/YoutubeSPA",
    demoUrl: "https://alagun.github.io/YoutubeSPA/",
    image: new URL("/static/projects/youtube-spa-preview.png", import.meta.url).href, 
  },
  {
    id: 3,
    title: "CoincapSPA",
    description: "Приложение для отслеживания криптовалют в реальном времени с графиками и детальной статистикой.",
    tech: ["React", "TypeScript", "Chart.js", "Coincap API", "Ant Design"],
    githubUrl: "https://github.com/alagun/CoincapSPA",
    demoUrl: "https://alagun.github.io/CoincapSPA/",
    image: new URL("/static/projects/coincap-preview.png", import.meta.url).href,
  },
  {
    id: 4,
    title: "NewsSPA",
    description: "SPA приложение для чтения новостей с фильтрацией, поиском и пагинацией. Интеграция с новостными API.",
    tech: ["React", "TypeScript", "REST API", "CSS Modules", "Vite"],
    githubUrl: "https://github.com/alagun/NewsSPA",
    demoUrl: "https://alagun.github.io/NewsSPA/",
    image: new URL("/static/projects/news-spa-preview.png", import.meta.url).href,
  },
  {
    id: 5,
    title: "Образовательная платформа - SpeechUp",
    description: "Разработка интерфейсов образовательной платформы для подготовки к выступлениям. Создание системы интерфейсов для анализа выступлений.",
    tech: ["React", "TypeScript", "Redux", "Адаптивная верстка"],
    demoUrl: "https://speechup.ru/",
    period: "Май 2023 – Май 2024",
    image: new URL("/static/projects/speechup-preview.png", import.meta.url).href,
  },
  {
    id: 6,
    title: "CRM Система - EasySales",
    description: "Разработка полнофункциональной CRM системы с аналитикой и управлением клиентами. Оптимизация производительности ключевых страниц, что сократило время загрузки на 15%.",
    tech: ["React 18", "TypeScript", "Redux Toolkit", "Ant Design", "REST API"],
    demoUrl: "http://easysales.pro/",
    period: "Май 2024 – Июнь 2025",
    image: new URL("/static/projects/easysales-preview.png", import.meta.url).href
  }
];

export const ALL_PROJECTS = PROJECTS.toReversed()